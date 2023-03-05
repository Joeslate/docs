module.exports = {
    base: "/docs/",
    title: "lmxCode",
    description: "",
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: '更新时间',
        head: [
            ['link', { rel: 'icon', content: '/favicon.ico' }],
            ['meta', { name: 'author', content: '小明coding' }],
            ['meta', { name: 'keywords', content: 'vuepress介绍,vuepress博客,小明coding' }],
        ],
        nav: [
            { text: '主页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: '主页面about', link: '/about' },
            { text: '谷歌', link: 'https://google.com' },
            {
                text: '语言（未配置）',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' },
                    {
                        text: 'Group1', items: [
                            { text: '主页', link: '/' },
                            { text: '关于', link: '/about/' },
                        ]
                    }
                ]
            }
        ],
        sidebar: [
            '/',
            '/about',
            ['/about/', 'Explicit link text']
        ]
    }
}