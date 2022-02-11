
# Tech

## Projekt s Angular

### index.html
\<link> na theme.css. Cesta začíná v C:\GitLab\AngularCookbook.

```html
<link id="theme-link" rel="stylesheet" type="text/css" href="/nx/node_modules/primeng/resources/themes/bootstrap4-dark-blue/theme.css">
```

### styles.css
Cesta začíná přímo za /node_modules/

```css
@import "./primeflex/primeflex.css";
```


## Generate components

### Generate lazy-loaded module
cd C:\GitLab\AngularCookbook\nx\apps\guide\src\modules
ng generate module <customers> --route <customers> --module app.module
