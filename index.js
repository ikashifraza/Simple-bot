const login = require("fca-unofficial");
const fs = require("fs");
const config = require("./config.json");

// Load fbstate
let appState;
try {
  appState = JSON.parse(fs.readFileSync("fbstate.json", "utf-8"));
} catch (e) {
  console.error("❌ fbstate.json not found or invalid.");
  process.exit(1);
}

// Login
login({ appState }, (err, api) => {
  if (err) {
    console.error("❌ Login failed:", err.error || err);
    return;
  }

  console.log("✅ Logged in as:", api.getCurrentUserID());
  api.setOptions({ listenEvents: true });

  const listen = require("./modules/command/goibot");

  // Use legacy listen instead of listenMqtt
  api.listen((err, event) => {
    if (err) return console.error("❌ Listen error:", err);

    // 🐞 Optional Debug: log received message
    if (event.body) console.log(`📨 Message: ${event.body}`);

    listen.handleEvent({
      api,
      event,
      args: [],
      Threads: {},
      Users: {
        getNameUser: async () => "User"
      }
    });
  });
});
