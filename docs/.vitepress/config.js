import { defineConfig } from 'vitepress';

export default defineConfig({
    themeConfig: {
        siteTitle: "阿灯の博客",
        logo: "/img.png",
        nav: [
            { text: 'Guide', link: '/guide/readme', activeMatch: '/guide/readme' },
            {
                text: '项目预览',
                items: [
                    { text: 'Java项目', link: '/project/javaproject' },
                    { text: 'Gta5游戏项目', link: '/project/gtaproject' }
                ]
            },
            { text: 'alt:V相关', link: '/alt/about', activeMatch: '/alt/about' },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com" }],
        sidebar: {
            '/introduce/': [
                {
                    text: '自我介绍',
                    items: [
                        { text: '简历', link: '/introduce/resume' }, // /guide/index.md
                    ]
                },
                {
                    text: '学习笔记',
                    items: [
                        { text: '操作系统', link: '/introduce/os' }, // /guide/index.md
                        { text: '数据结构', link: '/introduce/ds' }, // /guide/one.md
                    ]
                }
            ],
            '/project/': [
                {
                    text: '相关项目',
                    items: [
                        { text: 'Java项目', link: '/project/javaproject' }, // /guide/index.md
                        { text: '游戏项目', link: '/project/gtaproject' }, // /guide/one.md
                    ]
                }
            ],
            '/guide/': [
                {
                    text: 'About Me',
                    items: [
                        { text: '关于我', link: '/guide/readme' },
                    ]
                }
            ]

        },
        footer: {
            message: 'Created By MrKangM.',
        }
    }
});
