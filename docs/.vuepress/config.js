module.exports = {
  themeConfig: {
    logo:
      '/statamic-peak-logo.svg',
    navbar: [
      // NavbarItem
      {
        text: 'Statamic Peak',
        link: 'https://github.com/studio1902/statamic-peak',
      },
    ],
    sidebar: [
      {
        isGroup: true,
        text: 'Getting Started',
        children: [
          '/getting-started/browser-support.md',
          '/getting-started/knowledge-assumptions.md',
          '/getting-started/installation.md',
          '/getting-started/tailwind-css.md',
        ],
      },
      {
        isGroup: true,
        text: 'Features',
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
        isGroup: true,
        text: 'Other',
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
        isGroup: true,
        text: 'Contributing & License',
        children: ['/other/contributing.md', '/other/license.md'],
      },
    ],
  },
};
