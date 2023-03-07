const secret = require("./secret")

module.exports = {
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现一段神秘的宇宙信号",
            buttonText: "开始接收"
        }
    },
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: 'Joeslate',
        repo: 'docs',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga': secret.ga,
    },
    '@vuepress/medium-zoom': {
        selector: 'img',
      }
}