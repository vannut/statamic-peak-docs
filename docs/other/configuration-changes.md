# Configuration changes

Peak changes the default Statamic config. The following is different:

| File | Default | Peak |
| --- | --- | --- |
| `.env.example` |  | Add more default Statamic and Redis settings by default.  
| `app/console/Kernel.php` |  | Add a schedule you can invoke via a cron to [warm all caches](#warm-all-caches).
| `app/Http/Controllers/DynamicToken.php` |  | New Controller for [forms](#forms) |
| `app/Http/Middleware/VerifyCsrfToken.php` | `protected $except = []` | `protected $except = ['/!/DynamicToken']` |
| `app/listeners/GenerateFavicons.php` |  | Listen to a GlobalSavedEvent to generate [favicons](#favicons).
| `app/providers/EventServiceProvider.php` |  | Listen to a GlobalSavedEvent to generate [favicons](#favicons).
| `app/Tags/DynamicToken.php` |  | New Tag for [forms](#forms) |
| `config/statamic/assets.php` | `driver' => 'gd'` | `'driver' => env('IMAGE_MANIPULATION_DRIVER', 'gd')` |
| `config/statamic/assets.php` | `'cache' => false` | `'cache' => env('SAVE_CACHED_IMAGES', true),` |
| `config/statamic/assets.php` | `'presets' => []` | Contains a whole bunch of asset presets. |
| `config/statamic/cp.php` | A getting started widget | A page collection widget |
| `config/statamic/cp.php` | `'link_to_docs' => true` | `'link_to_docs' => false` |
| `config/statamic/editions.php` | `'pro' -> false` | `'pro' -> true` |
| `config/statamic/git.php` |  | Add `[BOT]` to git commit message. |
| `config/statamic/live_preview.php` | Three breakpoints | All tailwinds breakpoints defined in `tailwind.config.js` |
| `config/statamic/search.php` | `title` in search index | `title`, and `page_builder` in search index |
| `config/statamic/stache.php` | `'watcher' => true` | `'watcher' => env('STATAMIC_STACHE_WATCHER', true)` |
| `config/statamic/static_caching.php` | `rules' => [ // ]` | `'rules' => 'all'` |
| `config/statamic/users.php` | `'avatars' => 'initials'` | `'avatars' => 'gravatar'` |
| `routes/console.php` |  | A `php artisan warm` command to [warm the static cache](#warm-all-caches). 
| `routes/web.php` |  | Routes for the [favicons](#favicons) feature.  
| `routes/web.php` |  | Routes for the search [functionality](#search). Commented by default.
| `routes/web.php` |  | Routes for the sitemap and [dynamic form](#forms) token.  