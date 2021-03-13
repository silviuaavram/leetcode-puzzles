const chokidar = require('chokidar')
const watcher = chokidar.watch('../', {
  ignored: /[\/\\]\./,
  persistent: true,
})

watcher.on('change', path => {
  require('child_process').exec(
    `node --require ../puzzles/src/lib/set-as-globals.js ${path}`,
    (err, stdout) => {
      if (err) {
        console.log(err)
      } else {
        console.log(stdout)
      }
    },
  )
})
