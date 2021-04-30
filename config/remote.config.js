const config = [
    {
        REPO: "bringbackdada-back",
        SETTINGS: {
            BRANCH: "master",
            PATH: "/var/www/bringbackdada.com/bringbackdada-back",
            EXEC: "git pull && npm install && pm2 restart ecosystem.config.js"
        }
    },
    {
        REPO: "bringbackdada-front",
        SETTINGS: {
            BRANCH: "master",
            PATH: "/var/www/bringbackdada.com/bringbackdada-front",
            EXEC: "npm run build && pm2 restart ecosystem.config.js"
        }
    }
];

module.exports = config;
