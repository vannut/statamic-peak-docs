module.exports = {
    description: 'Statamic Peak, an opinionated starter kit for all your Statamic sites.',
    head: [
      ['link',
        {
          rel: 'icon',
          href: '/favicon.svg'
        }
      ]
    ],
    lang: 'en-US',
    title: 'Statamic Peak Docs',
    themeConfig: {
      docsBranch: 'main',
      docsRepo: 'studio1902/statamic-peak-docs',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: 'Improve this page on GitHub',
      lastUpdated: true,
      lastUpdatedText: 'Last updated',
      logo: './visuals/statamic-peak-logo.svg',
      navbar: [
        {
          text: 'Sponsor',
          link: 'https://github.com/sponsors/studio1902'
        },
        {
          text: 'Discord',
          link: 'https://discord.gg/sW7KXWaucH'
        },
        {
          text: 'Changelog',
          link: 'https://github.com/studio1902/statamic-peak/blob/main/CHANGELOG.md'
        },
      ],
      repo: 'studio1902/statamic-peak',
      sidebar: [
        {
          text: 'Getting started',
          link: '/getting-started/browser-support.md',
          children: [
            '/getting-started/installation.md',
            '/getting-started/knowledge-assumptions.md',
            '/getting-started/tailwind-css.md',
            '/getting-started/browser-support.md',
          ],
        },
        {
          text: 'Features',
          link: '/features/assets.md',
          children: [
            '/features/assets.md',
            '/features/bard.md',
            '/features/browser-appearance.md',
            '/features/buttons.md',
            '/features/dark-mode.md',
            '/features/forms.md',
            '/features/globals.md',
            '/features/navigation.md',
            '/features/page-builder.md',
            '/features/pagination.md',
            '/features/redirects.md',
            '/features/search.md',
            '/features/social-images-generation.md',
            '/features/seo.md',
            '/features/typography.md',
          ],
        },
        {
          text: 'Other',
          link: '/other/awesome.md',
          children: [
            '/other/awesome.md',
            '/other/configuration-changes.md',
            '/other/deployment-script.md',
            '/other/focus-visible.md',
            '/other/lighthouse.md',
            '/other/localization.md',
            '/other/reduced-motion.md',
            '/other/tags.md',
            '/other/toolbar.md',
            '/other/upcoming-features.md',
          ],
        },
        {
          text: 'Contributing & License',
          link: '/other/contributing.md',
          children: [
            '/other/contributing.md',
            '/other/license.md'
          ],
        },
      ],
    },
    plugins: [
      [
        '@vuepress/docsearch',
        {
          apiKey: '0149417b12bc475858a29a2dae34d0af',
          indexName: 'studio1902'
        }
      ]
    ]
  }
