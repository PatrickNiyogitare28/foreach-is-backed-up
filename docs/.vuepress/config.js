module.exports = {
  title: 'BACKED-UP Foreach',
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  '@vue/babel-preset-jsx'
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsxSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },
themeConfig: {
  repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Networking',
        link: '/networking/',
      },
      {
        text: 'Embedded Systems',
        link: '/embedded-systems/',
      },
      {
        text: 'AI',
        link: '/ai/',
      },
      {
        text: 'Github',
        link: 'https://github.com/PatrickNiyogitare28/super-vite'
      }
    ],
    sidebar: {
      '/networking/': [
        {
          title: 'Networking',
          collapsable: true,
          children: [
            '',
            'introduction',
          ]
        },
      ],
      '/embedded-systems/': [
        {
          title: 'Embedded Systems',
          collapsable: false,
          children: [
            '',
            'introduction',
          ]
        }
      ],
      '/ai/': [
        {
          title: 'Artificial Intelligence',
          collapsable: false,
          children: [
            '',
            'introduction',
          ]
        }
      ],
    }
}
}
