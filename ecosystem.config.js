module.exports = {
    apps : [{
        name: "mydogprobot",
        script: "probot run ./index.js",
        env: {
            NODE_ENV: "production",
        }
    }]
}
