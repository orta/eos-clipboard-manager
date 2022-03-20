// https://github.com/microsoft/TypeScript-Website/issues/130#issuecomment-664673740

// A script which uses Facebook's watchman to restart the app on changes
const {spawn, execSync} = require('child_process');
const watchman = require('fb-watchman')
const client = new watchman.Client({})


// Startup watchman
client.command(['watch-project', process.cwd()], function (error, resp) {
    // https://facebook.github.io/watchman/docs/cmd/subscribe.html

  // // watch-project may re-use an existing watch at a higher level in the
  // // filesystem.  It will tell us the relative path to the directory that
  // // we expressed interest in, so we need to adjust for it in our results
  var path_prefix = ""
  var root = resp.watch
  if ("relative_path" in resp) {
    path_prefix = resp.relative_path
  }
  console.log({root, path_prefix})

  client.command(
    [
      'subscribe', root, 'Monorepo Builder',
      {
        expression: ['anyof', ['match', '*.ts'], ['match', '*.md'], ['match', '*.tsx'], ['match', '*.json']],
        relative_root: path_prefix,
        fields: ['name', 'exists', 'type'],
      },
    ],
    // error handling
  )

  let lastAppPID = -1
  client.on('subscription', function (resp) {
      console.log("changes")
      if (lastAppPID != -1) {
          try {
              execSync('killall io.orta.clipboard')
          } catch (error) {
              
          }
      }

      const upcomingCommand = 'sh ./scripts/run.sh'
      const newProcess = spawn(upcomingCommand, {
            shell: true,
            stdio: "inherit"
      })
      lastAppPID = newProcess.pid
  })
})

client.on("end", function () {
    // Called when the connection to watchman is terminated
    log("watch over")
  })
  
  client.on("error", function (error) {
    console.error("Error while talking to watchman: ", error)
  })
  