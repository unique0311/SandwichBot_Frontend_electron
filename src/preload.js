// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const electron = require('electron');

export const getConfig = async () => {
  let config = null;
  const ipcRenderer = electron.ipcRenderer || false;
  if (ipcRenderer) {
    ipcRenderer.on("envReply", (e, arg) => {
      config = arg.parsed;
      return config.parsed;
    })
    ipcRenderer.send("invokeEnv");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
