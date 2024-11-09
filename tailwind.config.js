module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        shadows: ["Shadows Into Light", "cursive"],
      },
      colors: {
        primary: "#FAC8B7",
        secondary: "#111111",

        info: "#2F80ED",
        succ: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757",

        blackLayer: {
          1: "#445069",
          2: "#384154",
          3: "#323948",
          4: "#212530",
        },

        Note: {
          green: "#C7EBB3",
          vanila: "#F4DFCD",
          pink: "#FFD5F8",
          white: "#FFFFFF",
        },
      },
      backgroundImage: {
        glass:
          "linear-gradient(225deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      boxShadow: {
        "hover-glow": "0 0 12px rgba(255, 255, 255, 0.5)",
        note: "0px 74px 21px 0px rgba(0, 0, 0, 0), 0px 48px 19px 0px rgba(0, 0, 0, 0.01), 0px 27px 16px 0px rgba(0, 0, 0, 0.05), 0px 12px 12px 0px rgba(0, 0, 0, 0.09), 0px 3px 7px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
