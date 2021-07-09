# SEO

Peak includes full SEO support. It's easy to expand on since it's all built with native fields and templating. You can also easily replace it with a third party addon like [Aardvark SEO](https://statamic.com/addons/candour/aardvark-seo) or a first party aeddon like [SEO Pro](https://statamic.com/addons/statamic/seo-pro). However this implementation is already pretty full featured.

## SEO features
* Page title.
* Website title and seperator.
* Meta description.
* Canonical URL.
* Open Graph data and image.
* Default Open Graph image.
* Twitter card and image.
* Default Twitter card image.
* Auto generated sitemap.xml.
* Customize the sitemap: which collections are included and per entry frequency and priority settings.
* No-index for entries, also excludes from sitemap.
* JSON-ld schema objects.
* Hreflang tags automatically generated.
* Knowledge graph data (organization, person or custom).
* JSON-ld breadcrumbs.
* Trackers: Google Analytics, Google Tag Manager, Site Verification, Fathom or Cloudflare Web Analytics.
* Cookie Consent Banner.

> Note: by default only `superusers` and the `marketeer` role get access to the SEO global configuration.

| Globals error messages  | Globals SEO  |  Globals Cookie Banner  |
|---|---|---|
| [![SEO globals JSON-ld](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-01.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-01.png) | [![SEO globals sitemap](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-02.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-02.png) | [![SEO globals cookie banner](https://cdnt.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-03.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-03.png) |

| Entry specific SEO |
|---|
| [![Page builder](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/entry-seo.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/entry-seo.png) |

## Cookie consent banner

When you use Google Analytics or Google Tag Manager you can enable the cookie consent banner to comply with GPDR. The consent banner uses Google's Consent API so you might need to properly set this up in your GTM/Analytics settings.

Users can specify the type of consent they give (analytics, marketing or both). When consent is given a link will be added to the footer for users to reset their consent.

The cookie banner only blocks Google scripts since it uses the consent API, so if you really want to be a marketing-script asshole and bug your users with a Facebook pixel or Hotjar, you can be GDPR compliant by running all those scripts through GTM.

> Note: tracking and cookie consent by default only work on the `production` environment.
