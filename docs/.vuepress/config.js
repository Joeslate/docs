const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
const navConf = require("./config/navConf");
const sidebarConf = require("./config/sidebarConf");

module.exports = {

  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: "/docs/",
  title: "小明的学习笔记",
  plugins: pluginsConf,
  head: headConf,
  theme: 'reco',
  //description: "",
  themeConfig: {
    subSidebar: 'auto',//开启全局子侧边栏
    noFoundPageByTencent: false,
    logo: '/assets/img/logo.png',
    lastUpdated: '更新时间',
    nav: navConf,
    sidebar: sidebarConf,
    smoothScroll: true,
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    }

  }
}