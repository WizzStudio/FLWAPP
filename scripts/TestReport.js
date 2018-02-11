const childProcess = require('child_process')
const path = require('path')
const cwd = path.resolve(__dirname, '../test')  // 子进程工作目录

childProcess.execSync('rm -rf ./testReport', {
	cwd: cwd
})

console.log(`TestReport finished! Look at ${path.resolve(__dirname, '../test/testReport')}`)
