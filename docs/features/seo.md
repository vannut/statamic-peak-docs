# SEO

Peak includes full SEO support. It's easy to expand on since it's all built with native fields and templating. You can also easily replace it with a professional addon like [Aardvark SEO](https://statamic.com/addons/candour/aardvark-seo) or [SEO Pro](https://statamic.com/addons/statamic/seo-pro). 

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
* Cookie Consent Notification. Make sure you listen to `cookie_consent` to be `true` in GTM.

> Note: tracking and cookie consent by default only work on the `production` environment.

> Note: by default only `superusers` and the `marketeer` role get access to the SEO global configuration.

| Globals error messages  | Globals SEO  |  Globals Cookie Banner  |
|---|---|---|
| [![SEO globals JSON-ld](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-01.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-01.png) | [![SEO globals sitemap](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-02.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-02.png) | [![SEO globals cookie banner](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-03.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/seo-globals-03.png) |

| Entry specific SEO | 
|---|
| [![Page builder](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/entry-seo.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/entry-seo.png) |

## Disable SEO features

If you plan on using an addon for SEO and Peak's built in features, do the following:
* Remove

```html
{{ partial:snippets/seo }}
```
from `resources/views/layout.antlers.html`.

* Remove

```html
{{ yield:seo_body }}
``` 
from `resources/views/layout.antlers.html`.
* Remove the SEO section and import from `resources/blueprints/collections/pages/page.yaml`.
* Remove the whole 

```html
{{ section:pagination }}{{ /section:pagination }}
``` 
from `resources/views/components/_pagination.antlers.html`.

* Delete the SEO global `content/globals/seo.yaml`.

And optionally to erase all traces:
* Delete the SEO sitemap view `resources/views/sitemap/sitemap.antlers.html`
* Delete the SEO global blueprint `resources/blueprints/globals/seo.yaml`.
* Delete the SEO fieldset `resources/fieldsets/seo.yaml`.
* Delete the SEO partial `resources/views/snippets/_seo.antlers.html`.
* Delete the Cookie Banner fieldset: `resources/views/components/_cookie_banner.antlers.html`.
* Delete the sitemap route from: `routes/web.php`.