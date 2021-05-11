# Social images generation (off)

Peak can generate your social sharing images (OG and Twitter) and add them to your entries. To use this feature you need to [install Browsershot](https://github.com/spatie/browsershot) and its dependencies. 

## Installation and configuration
On your development machine you can do this by running the following commands:

```bash
composer require spatie/browsershot
npm install puppeteer --global
```

Once you've installed the required software you can enable the functionality in the SEO globals -> Social Sharing. Make sure to flick on the switch and select each collection for which you want to enable auto generated social images. 

Finally uncomment the Social Images Route in `routes/web.php`. 

Edit `resources/views/social_images.antlers.html` to determine how the images should look. You can go wild with Antlers and Tailwind and even add any field you'd like to use. If you want to preview the images in your browser visit `http://yoursite.test/social-images/{id}`.

## Remove feature
By default the toggle to turn this feature on is only visibles to superusers. However if you completely want to remove this feature do the following:

* Delete the `toggle` and `collections` from `resources/blueprints/globals/seo.yaml`
* Delete the action `app/actions/GenerateSocialImages.php`.
* Delete the template `social_images.antlers.html`.
* Delete the template `social_images.antlers.html`.
* Delete the route from `routes/web.php`.