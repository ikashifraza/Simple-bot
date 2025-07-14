const login = require("fca-unofficial");
const fs = require("fs");

console.log("🔍 Testing Facebook Login with fbstate.json...");

let appState;
try {
  appState = JSON.parse(fs.readFileSync("fbstate.json", "utf-8"));
} catch (e) {
  console.error("❌ fbstate.json not found or invalid.");
  process.exit(1);
}

login({ appState }, (err, api) => {
  if (err) {
    console.error("❌ Login Failed:", err.error || err);
    return;
  }

  console.log("✅ Login Successful!");
  console.log("Logged in as ID:", api.getCurrentUserID());
});