module.exports = {
  description:
    'Statamic Peak, an opinionated starter kit for all your Statamic sites.',
  head: [
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'CCKEJUTO', defer: true }]
  ],
  theme: 'default-prefers-color-scheme',
  title: 'Statamic Peak Docs',
  themeConfig: {
    algolia: {
      apiKey: '0149417b12bc475858a29a2dae34d0af',
      indexName: 'studio1902'
    },
    repo: 'studio1902/statamic-peak',
    docsRepo: 'studio1902/statamic-peak-docs',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Improve this page on GitHub',
    docsBranch: 'main',
    lastUpdated: 'Last updated',
    logo: '/statamic-peak-logo.svg',
    nav: [
      { text: 'Sponsor', link: 'https://github.com/sponsors/studio1902'},
      { text: 'Discord', link: 'https://discord.gg/sW7KXWaucH'},
      { text: 'Changelog', link: 'https://github.com/studio1902/statamic-peak/blob/main/CHANGELOG.md'},
    ],
    search: false,
    searchPlaceholder: 'Search...',
    sidebar: [
      {
        title: 'Getting Started',
        children: [
          '/getting-started/browser-support.md',
          '/getting-started/knowledge-assumptions.md',
          '/getting-started/installation.md',
          '/getting-started/tailwind-css.md',
        ],
      },
      {
        title: 'Features',
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
        title: 'Other',
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
          '/other/warm-all-caches.md',
        ],
      },
      {
        title: 'Contributing & License',
        children: ['/other/contributing.md', '/other/license.md'],
      },
    ],
  },
  plugins: [
    '@vuepress/active-header-links',
    'sitemap'
  ],
  plugins: {
    'sitemap': {
      hostname: 'https://peak.studio1902.nl'
    },
  },
};
