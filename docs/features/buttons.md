# Buttons

The files `resources/fieldsets/buttons.yaml` and `resources/views/components/_buttons.antlers.html` go together. The button fieldset is a set in Bard but can also be called from other fieldsets where you want to include buttons. Just call the buttons partial in your template and one or multiple buttons will be rendered. 

| Buttons | 
|---|
| [![Buttons](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/button.png)](https://cdn.studio1902.nl/assets/statamic-peak/screenshots/v1.18.8/button.png) |

## Rendering a single button

In some cases you don't want to render dynamic buttons but a button to a specific entry or URL. This is possible using any of the following methods.

Link to the index page the collection `news` is mounted on:
```
{{ partial:components/button label="All news" link_type="url" url="{mount_url from='news'}" }}
```

Or link to a single entry:
```
 {{ partial:components/button label="Read more about this entry" link_type="entry" :entry="entry" }}
```