const inquirer = require('inquirer');
const repoConfig = require('../config/repo_config');

const promptList = [
  {
    type: 'list',
    message: '请选择要使用的模板',
    name: 'type',
    choices: ['vue', 'react'],
    filter: function (val) {
      // 使用filter将回答变为大写
      return val.toLowerCase();
    },
  },
];

const gitrepo = async () => {
  const inquirerpromit = await inquirer.prompt(promptList);
  let url = '';
  if (inquirerpromit.type == 'vue') {
    url = repoConfig.vue;
  } else {
    url = repoConfig.react;
  }
  console.log('当前下载地址' + url);
  return url;
};

module.exports = {
  gitrepo,
};
