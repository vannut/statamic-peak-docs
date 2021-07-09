# Tailwind and CSS configuration

Peak comes with a `tailwind.config.js` which dictates how Tailwind should be compiled. This file imports multiple Tailwind config files each responsible for various parts of your website. Next to the default config, it uses the following configuration files:

1. `tailwind.config.typography.js`: the Tailwind typography configuration for customizing the `prose` class.
2. `tailwind.config.peak.js`: all Peak's configuration, utilities and components.
3. `tailwind.config.site.js`: your site's configuration. This file would typically include all custom styles and config for the project you're currently working on.

All configuration files are fully documented. Read the Tailwind docs on [theme configuration](https://tailwindcss.com/docs/theme/) for more information.

Peak uses the Tailwind JIT compiler for fast compilation and no differences between your development and production CSS.

Read up on the [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms) and [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugins. They're easy to customize and the config file for typography already includes some basic customization so your theme colors are automatically applied. The plugins are easy to remove if you don't want to use them.

> Note: if you don't want to define your custom CSS in Tailwind JS config files you can add it to `resources/css/custom.css`. Make sure to read up on the use of [@layer](https://tailwindcss.com/docs/functions-and-directives#layer) to instruct what styles Tailwind should keep or purge. Use whatever method you prefer.

Peak ships with a few custom Tailwind goodies:
* `.break-decent`: uses `word-break: break-word`.
* `supports-backdrop-blur:`: a variant to check if the browsers supports backdrop filters (backdrop blur). This way you can do condionally change a background opacity for example using `supports-backdrop-blur:bg-opacity-70`.
* Style fyle upload form elements by default using your site's theme colors.
