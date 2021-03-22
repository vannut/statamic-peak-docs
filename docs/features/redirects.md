# Redirects

There is Redirects global where you can define your 301 and 302 redirects. This only kicks in when a 404 error is triggered as all logic is being done in `resources/views/errors/404.antlers.html`.

> Note: by default only `superusers` and the `marketeer` role get access to this feature.

> Note: alternatively you could use the fantastic [Redirect](https://github.com/riasvdv/statamic-redirect) by [Rias](https://github.com/riasvdv). It's very feature rich and even tracks 404 errors you can easily setup redirects for those as well.