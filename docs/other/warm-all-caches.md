# Warm all caches

## The static cache
Running `php artisan statamic:peak:warm` after your deployments will visit all urls and warm up the static cache. This is a custom command and is defined in `app/Console/Commands/WarmCommand.php`.

By default the warm command will warm up all your published entries. If you need to add any other pages that are not found by default for any reason (maybe you want to warm the first X pages of a specific collection?), you can add your extra urls to the `config/statamic/static_caching.php` file, under the `warm` key.

## Regularly refreshing the cache
Triggering `php artisan schedule:run` with a cronjob on a server will daily clear and warm all caches. It basically chains all commands defined in the [deployment script](/other/deployment-script). Edit `app/Console/Kernel.php` if you don't want this daily but for example hourly. [Read more in the Laravel Docs](https://laravel.com/docs/master/scheduling).
