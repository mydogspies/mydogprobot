/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
const exec = require('child_process').exec;
const config = require('./config/remote.config');
const { DateTime } = require('luxon');

module.exports = (app) => {

  app.log.info(getDateTime() + ' -> Mydogprobot loaded');

  app.on("issues.opened", async (context) => {
    // TODO issues
  });

  // PUSH event
  app.on("push", async (context) => {

    const payload = context.payload;
    const branch = payload.ref;
    const repo = payload.repository.name;

    // check config and do actions against existing entries
    config.forEach(site => {
      if(site.REPO === repo && branch === 'refs/heads/' + site.SETTINGS.BRANCH) {

        exec('cd ' + site.SETTINGS.PATH + ' && ' + site.SETTINGS.EXEC);
        app.log.info(getDateTime() + ' -> PUSH: ' + repo + ' [' + branch + '] pushed to remote');
      }
    });


  });

};

// get current datetime
function getDateTime() {
  return DateTime.now().toUTC().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
