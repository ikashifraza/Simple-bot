const login = require("fca-unofficial");
const fs = require("fs");
const config = require("./config.json");

login({ appState: JSON.parse(fs.readFileSync("fbstate.json", "utf-8")) }, (err, api) => {
  if (err) return console.error(err);
  api.setOptions({ listenEvents: true });
  const listen = require("./modules/command/goibot");
  api.listenMqtt((err, event) => {
    if (err) return console.error(err);
    listen.handleEvent({ api, event, args: [], Threads: {}, Users: {
      getNameUser: async () => "User"
    }});
  });
});