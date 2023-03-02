#!/usr/bin/env node

// 我们对于创建等命令的设定以及一些交互流程等都会在这个入口文件中设置
const { program } = require('commander')
// 远程下载
const download = require('download-git-repo')
// 增加加载效果
const ora = require('ora')
// 增加文本样式
const chalk = require('chalk')
// 增加图标
const logSymbol = require('log-symbols')

program
    .version('1.0.1')

program
  .version('1.0.1', '-v, --version')
  .usage('<command> [options]')
  .description('Standard tooling generate dir from templates')

program
    .command('create <project>')
    .description("初始化项目模板")
    .action(function(env) {
        const spinner = ora("正在下载模板中").start()

        const downLoadUrl = 'direct:https://github.com/bjyip/vue.git#main'
        download(downLoadUrl, env, { clone: true }, err => {
            if (err) {
                spinner.fail()
                return console.log(logSymbol.error, chalk.red("下载失败，失败原因：" + err))
            } else {
                spinner.succeed()
                return console.log(logSymbol.success, chalk.green("下载成功"))
            }
        })
    })

program
    .command("help")
    .description("查看所有可用模板")
    .action(function(env) {
        console.log("书写相关帮助信息")
    })

program.parse(process.argv)
