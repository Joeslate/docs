module.exports= {
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
        clientId: '8c016835dd53936fc57a',
        clientSecret: 'd0f1b0afc388cda9e5a77fc994c28250e18d2a3b',
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga': 'G-BJEVFQY9S4'
    }
}