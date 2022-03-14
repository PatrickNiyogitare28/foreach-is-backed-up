

module.exports = {
  title: 'Hello VuePress',
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://github.com/DavidCouronne/vuepress-tailwind',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'https://github.com/DavidCouronne/vuepress-tailwind',
    // if your docs are not at the root of the repo:
    docsDir: 'src',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/content/' },
      { text: 'Blog', link: '/blog/' },
    ],
    sidebar: {
      '/content/': [
        '',
        'custom',
        'internet'
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


