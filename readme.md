# My Computer

The page is created using HTML, CSS, and a touch of vanilla JavaScript for data fetching. It draws inspiration from the design of the [Old Linkin Park Website](https://web.archive.org/web/20200808165448/https://www.linkinpark.com/) and the nostalgic feel of Windows 95-98. The routing mechanism is influenced by [cardars/john-doe](https://github.com/cadars/john-doe) utilizing the #anchor suffix and the :target CSS selector to display and hide content.

## Components

To keep the code concise, this page makes use of various HTML tags instead of relying heavily on `classes` for styling. Below is a list of the components used in the page:

### Desktop

The elements visible on the desktop are nested within the `main` tag.

```html
<main>
  <nav>...</nav>
  <section>...</section>
  <section style="display: none;"></section>
</main>
```

### Icons

The icons are represented as an unordered list (`ul`) of list items (`li`), each containing an image (`img`) and a clickable link (`a`). Additional styling is applied to the a::after pseudo-element to enhance the clickability of the image.

```html
<ul>
  <li>
    <img width="32" src="assets/recycle-bin.png" alt="recycle bin icon" />
    <a href="#recycle-bin">Recycle Bin</a>
  </li>
  ...
</ul>
```

#### Desktop Icons

If the icons are used for navigation rather than as content, it is recommended to wrap them in a `nav` tag for better semantic structure.

```html
<nav>...</nav>
```

### Window

Each window is encapsulated within a `section` tag. By default, the `section` tag is hidden, and it becomes visible only when the corresponding `:target` selector is active. Each `section` tag should have two child elements: an `h2` tag for the window title and another tag (e.g., `article`, `ul`, `div`) for the window content.

```html
<section id="profil">
  <h2>Recycle Bin</h2>
  ...
</section>
```

#### Window Content

The content within a window should be enclosed within a single container tag.

```html
<article>
  <h3>My Content</h3>
  <p>...</p>
</article>
```

```html
<div>
  <p>...</p>
</div>
```

#### Icons as Content

When icons are placed inside a `section` tag, they will be rendered as a grid of icons.

```html
<ul>
  <li>
    <img width="32px" src="" alt="24" />
    <a href="https://rizkybaihaqy.github.io/24/">24 Game</a>
  </li>
  ...
</ul>
```

### Taskbar

The taskbar is positioned outside the `main` tag as it is not part of the desktop content. The taskbar's child elements are `spaced-evenly`, aligning them to the left and right sides of the taskbar. To add multiple items on each side, use a `div` tag.

```html
<main>...</main>
<footer>
  <a role="button" href="#">Start</a>
  <div>
    <a href="#help">
      <img width="16" src="assets/help.png" alt="help" />
    </a>
    <time datetime="2023-07-08T16:00:46Z">16:00</time>
  </div>
</footer>
```

## Known Bug

Currently, an additional `section` tag needs to be included in the markup, even though it is hidden using the `display: none;` property. This is required for the routing mechanism to function correctly.
