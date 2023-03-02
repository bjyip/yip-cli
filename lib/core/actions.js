const { promisify } = require('util');

const downloadRepo = promisify(require('download-git-repo'));
const { gitrepo } = require('./inquire');

const { success, error } = require('../utils/log');
const terminal = require('../utils/terminal');
// 增加加载效果
const ora = require('ora')
// 增加图标
const logSymbol = require('log-symbols')

const createProject = async (project, otherArg) => {
  const gitrepoer = await gitrepo();
  // 1.提示信息
  const spinner = ora(`正在下载模板`).start()

  // 2.clone项目从仓库
  downloadRepo(gitrepoer, project, { clone: true }, err => {
    if (err) {
      spinner.fail()
      return console.log(logSymbol.error, error("下载失败，失败原因：" + err))
    } else {
      spinner.succeed()
      return console.log(logSymbol.success, success("下载成功"))

      // // 3.执行终端命令npm install
      // // terminal.exec('npm install', {cwd: `./${project}`});
      // const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
      // await terminal.spawn(npm, ['install'], { cwd: `./${project}` });
      // console.log('run install is over');
      // // console.log('run server');

      // // 5.运行项目
      // // await terminal.spawn(npm, ['run', 'serve'], { cwd: `./${project}` });
    }
  })
};

module.exports = {
  createProject
};
