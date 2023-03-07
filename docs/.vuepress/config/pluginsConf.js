const secret = require("./secret")

module.exports = {
    //pwa离线网页
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现一段神秘的宇宙信号",
            buttonText: "开始接收"
        }
    },
    //评论
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: 'Joeslate',
        repo: 'docs',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
    },
    //回到顶部
    '@vuepress/back-to-top': true,
    //谷歌分析（弃用）
    '@vuepress/google-analytics': {
        'ga': secret.ga,
    },
    //图片缩放
    '@vuepress/medium-zoom': {
        selector: 'img',
    },
    //看板娘
    '@vuepress-reco/vuepress-plugin-kan-ban-niang':
    {
        theme: [
            'haruto',
        ],
        clean: false,
        messages: {
            welcome: '欢迎! ! !',
            home: '心里的花，我想要带你回家。',
            theme: '心悦君兮君不知',
            close: '挥挥~ ~'
        },
        messageStyle:
            { right: '68px', bottom: '290px' },
        width: 250,
        height: 320,
        modelStyle: {
            left: '0px',
            bottom: '-20px',
            opacity: '0.9'
        },
        clean: true,

    },

    //公告
    '@vuepress-reco/vuepress-plugin-bulletin-popover':
    {
        title: '公告',
        body: [{
            type: 'title',
            content: '学习交流请加vx 🎉🎉🎉',
            style: 'text-aligin: center;',
        },
        {
            type: 'text',
            content: 'VX：17771570059',
            style: 'text-align: center;'
        },
        {
            type: 'text',
            content: '喜欢的插件可以点关于页面',
            style: 'text-align: center;'
        },
        {
            type: 'text',
            content: '友链✨或Bug🐞可以给我留言',
            style: 'text-align: center;'
        }],
        // footer: [{ 
        //     type: 'button', 
        //     text: '打赏', 
        //     link: '/blog/donate' 
        // },]
    },
    //名人名言
    "vuepress-plugin-boxx":true
}