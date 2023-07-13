# My Computer

This page is Created with `HTML`, `CSS`, and a little bit of vanilla javascript for fetching data. Inspired by [Old Linkin Park Website](https://web.archive.org/web/20200808165448/https://www.linkinpark.com/) and of course Windows 95~98. The routing is inspired by [cardars/john-doe](https://github.com/cadars/john-doe) to uses the `#anchor` suffix and the `:target` CSS selector to show and hide pages/content.

## Components

Because this page it built mainly with `HTML` and `CSS`, the components created is tightly coupled with the page itself.

### Desktop

```html
<main>
  <section>...</section>
  <section style="border: none"></section>
</main>
```

### Desktop Icons

```html
<nav>
  <ul>
    <li>
      <img width="32px" src="assets/recycle-bin.png" alt="recycle bin icon" />
      <a href="#recycle-bin">Recycle Bin</a>
    </li>
    ...
  </ul>
</nav>
```

### Window

```html
<section id="profil">
  <h2>Recycle Bin</h2>
  <article>...</article>
</section>
```

### Window Content

#### Text as Content

```html
<article>
  <h3>My Content</h3>
  <p>...</p>
</article>
```

#### Icons as Content

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
