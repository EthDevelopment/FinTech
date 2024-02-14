module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        // Make sure to correct or remove the next line if it's invalid
        // 'plugin:[correct-plugin-name]/recommended',
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json", // Make sure this points to your actual tsconfig.json file
    },
    plugins: [
        "@typescript-eslint",
        // 'react-refresh', // This should only be included if you have this plugin installed
    ],
    rules: {
        // Your custom rules
    },
};
