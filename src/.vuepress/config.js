

module.exports = {
  title: 'F I B U',
  themeConfig: {
    repo: 'https://github.com/PatrickNiyogitare28/foreach-is-backed-up.git',
    repoLabel: 'Contribute!',
    docsRepo: 'https://github.com/PatrickNiyogitare28/foreach-is-backed-up.git',
    docsDir: 'src',
    docsBranch: 'master',
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'AI', link: '/content/ai/'},
      { text: 'Networking', link: '/content/networking/'},
      { text: 'ADV Networking', link: '/content/advanced-networking/'},
      { text: 'Net Security', link: '/content/net-security/'},
      { text: 'Embedded Systems', link: '/content/embedded-systems/'},
    ],
    sidebar: {
      '/content/ai/': [
        {
          title: 'Artificial Intelligence',
          collapsable: false,
          children: [
            '',
            'introduction',
          ]
        },
      ],
      '/content/networking/': [
        {
          title: 'Networking',
          collapsable: false,
          children: [
            '',
            'custom',
            'internet'  
          ]
        },
      ],
      '/content/advanced-networking/': [
        {
          title: 'Advanced Networking',
          collapsable: false,
          children: [
            '',
            {
              title: 'Introduction',
              collapsable: true,
              children: [
                'introduction/overview',
                'introduction/reviewing-fundamentals'
              ]
            },
            {
              title: 'Routing',
              collapsable: true,
              children: [
                {
                  title: 'Cisco Router',
                  collapsable: true,
                  children: [
                    'routing/cisco-router/introduction',
                    'routing/cisco-router/cisco-routers-interfaces',
                  ]
                },
              ]
            },
          ]
        },
      ],
      '/content/net-security/': [
        {
          title: 'Networking Security',
          collapsable: false,
          children: [
            '',
            'introduction',  
          ]
        },
      ],
      '/content/embedded-systems/': [
        {
          title: 'Embedded Systems',
          collapsable: false,
          children: [
            '',
            'introduction', 
          ]
        },
      ]
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    '@vuepress/pwa',
    'vuepress-plugin-reading-time',
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}


