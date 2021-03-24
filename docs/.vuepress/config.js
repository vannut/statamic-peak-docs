module.exports = {
  title: 'Statamic Peak Docs',
  description:
    'Documentation for Statamic Peak, an opinionated starter kit for all your Statamic sites.',
  themeConfig: {
    logo: '/statamic-peak-logo.svg',
    navbar: [
      // NavbarItem
      {
        text: 'Statamic Peak',
        link: 'https://github.com/studio1902/statamic-peak',
      },
    ],
    nav: [
      { 
        text: 'GitHub Peak', 
        link: 'https://github.com/studio1902/statamic-peak' 
      },
      { 
        text: 'GitHub Docs', 
        link: 'https://github.com/studio1902/statamic-peak-docs' 
      },
    ],
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
          '/features/buttons.md',
          '/features/dark-mode.md',
          '/features/favicons.md',
          '/features/forms.md',
          '/features/globals.md',
          '/features/navigation.md',
          '/features/page-builder.md',
          '/features/pagination.md',
          '/features/redirects.md',
          '/features/search.md',
          '/features/seo.md',
          '/features/typography.md',
        ],
      },
      {
        title: 'Other',
        children: [
          '/other/configuration-changes.md',
          '/other/deployment-script.md',
          '/other/focus-visible.md',
          '/other/lighthouse.md',
          '/other/localization.md',
          '/other/reduced-motion.md',
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
};
