# AngularMetatags

This project is a Meta Tags test generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Routes

There are four routes. 
- Home
- Projects
- Gallery
- About

The first 3 routes pull their data from a http call.
The About page has harcoded values.

## Metatags Service

The metatags service has 3 methods

- Init
Called from app.component, sets the metatags globally

- Update
Pulls the data from a http request then updates the metatags for a specific route, the page data is updated from the same value returned

## Result so far...
- Metatags are successfully set globally
- Home metatags not updated
- Projects metatags not updated
- Gallery metatags not updated
- About metatags updated


