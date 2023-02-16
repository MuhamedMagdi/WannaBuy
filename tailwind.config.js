module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './screens/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'light-red': '#e6324b',
                'dark-gray': '#353634',
                'light-black': '#2b2b2b',
            },
        },
    },
    plugins: [],
};
