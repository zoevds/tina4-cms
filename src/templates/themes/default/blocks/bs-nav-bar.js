blockManager.add('bs-nav-bar', {
    category: 'Bootstrap - Nav',
    label: 'Basic Navbar',
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.5 44.5"><path d="M0 0h44.5v44.5H0z" style="fill:none;stroke-width:0"/><path d="M37.43 5.6H7.07c-1.94 0-3.51 1.58-3.51 3.51v16.17c0 1.94 1.58 3.52 3.51 3.52h14.35l2.48 7.45a1.72 1.72 0 0 0 2.85.68l1.12-1.12 2.59 2.59c.34.33.78.5 1.21.5s.88-.17 1.22-.5l1.87-1.87c.67-.67.67-1.76 0-2.43l-2.59-2.59 1.12-1.12c.19-.19.33-.42.42-.67.1-.3.11-.61.04-.91h3.69c1.94 0 3.51-1.58 3.51-3.52V9.11c0-1.94-1.58-3.51-3.52-3.51Zm-4.99 29.71-.77.77-2.59-2.59c-.33-.34-.77-.5-1.22-.5s-.88.17-1.22.5l-.77.77-2.38-7.12 7.13 2.38-.77.77c-.33.32-.51.75-.51 1.21 0 .46.18.89.5 1.22l2.59 2.59Zm6.01-10.02c0 .56-.46 1.02-1.02 1.02h-8.54l-6.08-2.03c-.36-.12-.75-.12-1.1 0-.85.29-1.31 1.18-1.11 2.02H7.07c-.56 0-1.01-.46-1.01-1.02V9.11c0-.56.46-1.01 1.01-1.01h30.37c.56 0 1.02.46 1.02 1.02v16.17Z" style="fill:#515962;stroke-width:0"/><path d="M31.58 17.66c.78-1.48.62-3.34-.55-4.87-.07-.09-.15-.17-.24-.24-2.23-1.69-4.62-1.09-5.9.19-1.56 1.56-1.64 3.99-.18 5.89.07.09.15.17.24.24.91.7 1.94 1.04 2.94 1.04.67 0 1.32-.18 1.92-.49l3.09 3.09c.24.24.56.37.88.37s.64-.12.88-.37c.49-.49.49-1.28 0-1.77l-3.09-3.09Zm-4.98-.68c-.72-1.05-.43-1.98.06-2.48.49-.49 1.42-.79 2.48-.07.72 1.05.43 1.99-.06 2.48s-1.42.79-2.48.06ZM11.11 11c-.69 0-1.25.56-1.25 1.25v9.89a1.25 1.25 0 0 0 2.5 0v-9.89c0-.69-.56-1.25-1.25-1.25Z" style="fill:#515962;stroke-width:0"/></svg>
    `,
    content: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" data-gjs-type="twig-component" twig-view="menu">Twig Template</ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`
});