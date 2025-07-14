const login = require("fca-unofficial");
const fs = require("fs");

login({ appState: JSON.parse(fs.readFileSync("fbstate.json", "utf-8")) }, (err, api) => {
  if (err) {
    console.error("❌ Login Failed:", err);
    return;
  }

  console.log("✅ Logged in as:", api.getCurrentUserID());

  api.setOptions({
    listenEvents: true
  });

  api.listenMqtt((err, event) => {
    if (err) return console.error("❌ Listen Error:", err);

    if (event.type === "message" && event.body) {
      console.log("📩 Message Received:", event.body);
      api.sendMessage("😂 Bot Online Hai Bhai!", event.threadID);
    }
  });
});
