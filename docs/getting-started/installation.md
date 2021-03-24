# Installation

## Installation via the CLI

The easiest way to install Statamic together with Peak is to use the [official CLI](https://github.com/statamic/cli). Install the CLI by running `composer global require statamic/cli` and for each project just run `statamic new my-site` and pick Peak as a starter kit. Alternatively you can skip this manual selection by running: `statamic new my-site --starter="studio1902/statamic-peak"`.

Run `npm i && npm run dev` to compile your frontend assets or `npm run watch` to watch for any changes you make.

## Manual installation.

**1. Create a new site** - cloning the repo and removing the origin repo.

```bash
git clone git@github.com:studio1902/statamic-peak.git my-site
cd my-site
rm -rf .git
composer install
cp .env.example .env && php artisan key:generate
```

**2. Edit .env file** - make sure you edited the `.env` file with at least the correct values for `APP_NAME`, `APP_URL` and the local mail configuration.

**3. Make a new user** – you'll want it to be a `super` so you have access to everything.

```bash
php please make:user
```

**4. Compile the frontend assets** - the [TailwindCSS](https://tailwindcss.com/) compiled assets aren't included in this repo. You need to compile it yourself. Compilation is configured in `webpack.mix.js`. Make sure you add your hostname to your `.env` file (`APP_URL`) as it's being used for Browsersync in `webpack.mix.js`.

```bash
npm i && npm run watch (or npm run dev)
```

To compile for production run this (on your server). It will purge all unnecessary utility classes and greatly reduce file size:

```bash
npm run production
```

**5. Build!** - if you're using [Laravel Valet](https://laravel.com/docs/valet), your site should be available at `http://my-site.test`. You can access the control panel at `http://my-site.test/cp` and login with your new user. Build your site, read the [Statamic Docs](https://statamic.dev) and have fun!

## Install in existing Laravel project

[Job Verplanke](https://github.com/jobverplanke) is working on a package to install Peak into your current Laravel project. [The package](https://github.com/studio1902/statamic-peak-package) is currently in beta.
