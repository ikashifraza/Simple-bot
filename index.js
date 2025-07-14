const { spawn } = require("child_process");
const axios = require("axios");
const express = require("express");
const path = require("path");
const logger = require("./utils/log");

////////////////////////////////////////
//========= Uptime Dashboard =========//
////////////////////////////////////////

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  logger("Dashboard server started successfully!", "[ UPTIME ]");
});

//////////////////////////////////////////////////////
//========= Launch and Auto-Restart Bot ============//
//////////////////////////////////////////////////////

let restartCount = 0;

function startBot(message) {
  if (message) logger(message, "[ BOT ]");

  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Priyansh.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("close", (code) => {
    if (code !== 0 && restartCount < 5) {
      restartCount++;
      logger(`Bot crashed. Restarting... (attempt ${restartCount})`, "[ RESTART ]");
      startBot();
    } else if (restartCount >= 5) {
      logger("Too many restart attempts. Exiting.", "[ ERROR ]");
      process.exit(1);
    }
  });

  child.on("error", (err) => {
    logger(`Failed to start bot: ${err.message}`, "[ ERROR ]");
  });
}

///////////////////////////////////////
//========= GitHub Update Check =====//
///////////////////////////////////////

axios.get("https://raw.githubusercontent.com/priyanshu192/bot/main/package.json").then((res) => {
  logger(res.data.name, "[ NAME ]");
  logger(`Version: ${res.data.version}`, "[ VERSION ]");
  logger(res.data.description, "[ DESCRIPTION ]");
}).catch(() => {
  logger("Failed to fetch update info.", "[ UPDATE CHECK ]");
});

startBot();
