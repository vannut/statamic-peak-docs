# Favicons

By uploading a single favicon SVG to the favicons asset container you can generate favicons for modern browsers on the fly. The favicon partial will spit out the following favicons:

* The SVG you uploaded as a `rel="icon"`.
* The SVG you uploaded with a custom color attribute as a `rel="mask-icon"`.
* A PNG with a custom colored background as a `rel="apple-touch-icon`.
* A `site.webmanifest` route with a manifest file containing a `android-chrome-512x512.png`.
* A meta with `name="theme-color"` with a custom color.

## Disable favicon feature
If you don't want to use this feature you can leave it disabled (default). To remove all traces, do the following:
* Remove 

```html
{{ partial:snippets/favicons }}
``` 

from `resources/views/layout.antlers.html`.
* Delete the asset container `content/assets/favicons.yaml`.
* Delete the blueprint `resources/blueprints/globals/favicons.yaml`.
* Delete the global `content/globals/favicons.yaml`.
* Delete the partial `resources/views/snippets/_favicons.antlers.html`.
* Delete the manifest view `resources/views/manifest/manifest.antlers.html`.
* Delete the listener `app/listeners/GenerateFavicons.php`.
* Remove manifest route from `routes/web.php`.
* Remove the listener from `app/providers/EventServiceProvider.php`.

> Note: To use the favicon feature you need to have the `PHP Imagick module` installed. Forge users: newer servers ship with this automatically. Ploi users: you can optionally install this with a click in the Ploi interface.