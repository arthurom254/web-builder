import Logo from '../../logo.svg';
const AppName = 'Builder';
const navBar1Block = [
    
    {
    id: 'navbar1',
    label:`Nav Bar 1`,
    category: 'NavBar',
    content: `
    <nav class="navbar navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src=${Logo} alt="" width="60px" height="60px">
      </a>
    </div>
  </nav>
    `,
    style: `
    `,
  },
    {
    id: 'navbar2',
    label:`Nav Bar 2 `,
    category: 'NavBar',
    content: `
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src=${Logo} alt="" width="60px" height="60px" class="d-inline-block align-text-top">
      ${AppName}
    </a>
  </div>
</nav>
    `,
    style: `
    `,
  },
    {
    id: 'navbar3',
    label:`Nab Bar 3
  `,
    category: 'NavBar',
    content: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    `,
    style: `
    `,
  },
    {
    id: 'Bootstrap5cdn',
    label:`Bootstrap 5  `,
    category: 'CDN',
    content: `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    `,
    style: `
    `,
  },
    {
    id: 'carousel',
    label:`carousel  `,
    category: 'carousel',
    content: `<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://picsum.photos/500/300" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/700/300" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/600/300" class="d-block w-100" alt="...">
      </div>
    </div>
  </div>`,
    style: `
    .carousel-item{
      width:100%;
    }

    `,
  },
];
  export {navBar1Block}