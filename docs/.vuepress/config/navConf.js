module.exports =
    [
        { text: '主页', link: '/' },
        { text: '关于', link: '/about/' },
        { text: '劝学', link: '/quanxue' },
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
    ]