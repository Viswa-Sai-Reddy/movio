module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "others": {'min': '340px', 'max': '1200px'}
        }
      },
    },
    plugins: [],
}