# Page builder

While you could make different templates for all your page types, the idea is to make pages as modular as possible. Every unique element of your website could be a partial and a dedicated button in the page builder. 

If the layout of a page is totally different - or you really want to - you can always opt for using templates.

| Page builder | 
|---|
| [![Page builder](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/page-builder.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/page-builder.png) |

## Adding blocks
Edit `resources/fieldsets/page_builder.yaml` to add blocks (preferably imports) to the fieldset. In `resources/views/default.antlers.html` you can see the blocks being loaded. Antlers will look in the `resources/views/page_builder/` folder for partials with the handle of your block. Peak ships with the following blocks:

* Article ([long form content](/features/bard))
* Call to action (title, text and a button)
* Collection (title and links to other entries)
* [Forms](/features/forms)
* Link blocks (blocks with a title and text that link to other entries)

For example if you add a fieldset to the `page_builder.yaml` with the handle `call_to_action` make sure you add a `_call_to_action.antlers.html` file to the `resources/views/page_builder` folder.

> Note: blocks are scoped under `block` to avoid collision with other fields. Make sure you reference variables in a block like this: 
```
{{ block:field_name }}
```