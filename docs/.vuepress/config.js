module.exports = {
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: '主页面about', link: '/about' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
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
            '/page-a',
            ['/page-b', 'Explicit link text']
          ]
    }
}