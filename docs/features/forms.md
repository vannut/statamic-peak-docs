# Forms

Peak renders forms and mail templates dynamically so you can add as many forms as you'd like, just by creating them in the CP. Peak ships with a default basic contact form you can edit using the following files:

* `resources/forms/contact.yaml` The contact form configuration.
* `resources/blueprints/forms/contact.yaml` The forms blueprint defining all the fields.
* `resources/views/page_builder/_form.antlers.html` The forms template file.
* `resources/views/email/form_owner.html` The forms email template that goes out to the site owner. The `_text.html` version contains the text template.
* `resources/views/email/form_sender.html` The forms email template that goes out to the sender of the form. The `_text.html` version contains the text template.

Strings used in the e-mail templates are localized and defined in `resources/lang/en/site.php`, and the form's field labels are localized and defined in `resources/lang/en.json`.

The default contact form has a required consent field. When you use `consent` as a field handle it won't render in the e-mail templates.

The forms sending is done with AJAX and uses Alpine to display the various notifications. 

> Note: Peak dynamically fetches a CSRF token so you can even use forms with [Static File Caching](https://statamic.dev/static-caching) on. This technique is based on the [Dynamic Token](https://statamic.com/addons/mykolas-mankevicius/dynamic-token) addon for Statamic v2 by Mykolas. It's ported to v3 and included with Peak.

> Note: When using BrowserSync and visit your site by means of an IP adress as url; You'll get an 500-error upon submitting the form. This is caused by Statamic's FormController which identifies your Site by means of the FQDN listed in `config/statamic/sites.php`. As you visit the website through an IP adress this lookup will fail, resulting in the said 500 `Call to a member function shortLocale() on null` error.

| Forms backend | Forms frontend  |
|---|---|
| [![Forms backend](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/forms-backend.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/forms-backend.png) | [![Forms frontend](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.15/forms-frontend.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.15/forms-frontend.png) |