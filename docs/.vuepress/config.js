const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
const navConf = require("./config/navConf");
const sidebarConf = require("./config/sidebarConf");

module.exports = {
    base: "/docs/",
    title: "lmxCode",
    plugins: pluginsConf,
    head: headConf,
    //description: "",
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: '更新时间',
        nav: navConf,
        sidebar: sidebarConf
    }
}