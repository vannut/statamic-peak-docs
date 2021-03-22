# Warm all caches

Running `php artisan warm` after your deployments will visit all urls and warm up the static cache. This is a custom command and is defined in `routes/console.php`. 

Triggering `php artisan schedule:run` with a cronjob on a server will daily clear and warm all caches. It basically chains all commands defined in the [deployment-script](#deployment-script). Edit `app/console/Kernel.php` if you don't want this daily but for example hourly. [Read more in the Laravel Docs](https://laravel.com/docs/master/scheduling).