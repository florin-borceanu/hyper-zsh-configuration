module.exports = {
  config: {
    MaterialTheme: {
      theme: "Palenight",
      backgroundOpacity: "0.3",
      accentColor: "#64FFDA",
      vibrancy: "dark"
    },
    opacity: 1,
    updateChannel: "canary",
    fontSize: 13,
    fontFamily:
      '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    fontWeight: 300,
    fontWeightBold: 700,
    cursorColor: "rgba(248,28,229,0.8)",
    cursorAccentColor: "#000",
    cursorShape: "BLOCK",
    cursorBlink: false,
    foregroundColor: "#fff",
    backgroundColor: "",
    selectionColor: "rgba(248,28,229,0.3)",
    borderColor: "#333",
    css: "",
    termCSS: "",
    showHamburgerMenu: "",
    showWindowControls: "left",
    padding: "0px 0px",
    activeTab: "🚀",
    colors: {
      black: "#000000",
      red: "#C51E14",
      green: "#1DC121",
      yellow: "#C7C329",
      blue: "#0A2FC4",
      magenta: "#C839C5",
      cyan: "#20C5C6",
      white: "#C7C7C7",
      lightBlack: "#686868",
      lightRed: "#FD6F6B",
      lightGreen: "#67F86F",
      lightYellow: "#FFFA72",
      lightBlue: "#6A76FB",
      lightMagenta: "#FD7CFC",
      lightCyan: "#68FDFE",
      lightWhite: "#FFFFFF"
    },
    webGLRenderer: false,
    shell: "/usr/local/bin/zsh",
    shellArgs: ["--login"],
    env: {},
    bell: "SOUND",
    copyOnSelect: false,
    defaultSSHApp: true
  },
  plugins: [
    "hyper-material-theme",
    "hyper-font-ligatures",
    "hyper-active-tab",
    "hyper-statusline"
  ],
  localPlugins: [],
  keymaps: {}
};
