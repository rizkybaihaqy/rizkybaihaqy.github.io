# My Computer

This page is Created with `HTML`, `CSS`, and a little bit of vanilla javascript for fetching data. Inspired by [Old Linkin Park Website](https://web.archive.org/web/20200808165448/https://www.linkinpark.com/) and of course Windows 95~98. The routing is inspired by [cardars/john-doe](https://github.com/cadars/john-doe) to uses the `#anchor` suffix and the `:target` CSS selector to show and hide pages/content.

## Components

Because this page it built mainly with `HTML` and `CSS`, the components created is tightly coupled with the page itself.

### Desktop

Everything that would show on the desktop is placed as the child of `main` tag.

```html
<main>
  <section>...</section>
  <section style="display: none;"></section>
</main>
```

### Icons

Icons is just a unordered list of `li` tag with an `img` tag. There are some styling to the `a::after` pseudo element to make the image clickable.

```html
<ul>
  <li>
    <img width="32px" src="assets/recycle-bin.png" alt="recycle bin icon" />
    <a href="#recycle-bin">Recycle Bin</a>
  </li>
  ...
</ul>
```

#### Desktop Icons

Use `nav` tag for better semantic if the icons is used for navigating window and not a content itself.

```html
<nav>...</nav>
```

### Window

The window is wrapped inside a `section` tag. The `section` tag is hidden by default, and only shown when the `:target` selector is active. The child of the `section` tag must be an `h2` tag as the title of the window, and an `article` tag as the container of the content. There are some cosmetic style applied to the `article::after` pseudo element to make the window looks like a real window.

```html
<section id="profil">
  <h2>Recycle Bin</h2>
  <article>...</article>
</section>
```

### Window Content

#### Text as Content

Any html tag can be placed here for the content.

```html
<article>
  <h3>My Content</h3>
  <p>...</p>
</article>
```

#### Icons as Content

The icons wrapped inside an `article` tag would be rendered as a grid of icons.

```html
<article>
  <ul>
    <li>
      <img width="32px" src="" alt="24" />
      <a href="https://rizkybaihaqy.github.io/24/">24 Game</a>
    </li>
    ...
  </ul>
</article>
```

### Taskbar

Taskbar is not part of the window so it should be placed outside of `main` tag. The taskbar child is spaced-between so it would be aligned to the left and right side of the taskbar. Use the `div` tag to add more than one item on each side of the taskbar.

```html
<main>...</main>
<footer>
  <a role="button" href="#">Start</a>
  <div>
    <a href="#help">
      <img width="16px" src="assets/help.png" alt="help" />
    </a>
    <time datetime="2023-07-08T16:00:46Z">16:00</time>
  </div>
</footer>
```
