var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

buttons.ActionButton({
  id: "move-tab-to-start",
  label: "Move Tab to Start",
  icon: {
    "16": "./to-start-16.png",
    "32": "./to-start-32.png",
    "64": "./to-start-64.png"
  },
  onClick: moveTabToStart
});

var { Hotkey } = require("sdk/hotkeys");
Hotkey({
  combo: "accel-home",
  onPress: moveTabToStart
});

function moveTabToStart() {
    tabs.activeTab.index = 0;
}


buttons.ActionButton({
  id: "move-tab-to-end",
  label: "Move Tab to End ",
  icon: {
    "16": "./to-end-16.png",
    "32": "./to-end-32.png",
    "64": "./to-end-64.png"
  },
  onClick: moveTabToEnd
});

var { Hotkey } = require("sdk/hotkeys");
Hotkey({
  combo: "accel-end",
  onPress: moveTabToEnd
});

function moveTabToEnd() {
    tabs.activeTab.index = tabs.length - 1;
}


