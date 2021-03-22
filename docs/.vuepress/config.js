module.exports = {
  themeConfig: {
    logo:
      'https://camo.githubusercontent.com/2f1cf6ca13f9a57097adba1bddd20c526082cee5e8ec34251f44db72e22e9fb2/68747470733a2f2f63646e2e73747564696f313930322e6e6c2f6173736574732f73746174616d69632d7065616b2f73746174616d69632d7065616b2d6c6f676f2e706e673f763d32',
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
