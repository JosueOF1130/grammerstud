
//creating custom elements
class NavTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="../images/leaf.png" alt="Logo" width="35" class="d-inline-block align-text-top">
        grammerstud
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav-underline ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="resources.html">Resources</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Syllabus</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link">Bio</a></li>
        </ul>
      </div>
    </div>
  </nav>
        `;
        this.highlightActiveLink();
    }

    highlightActiveLink() {
        const currentPage = window.location.pathname.split("/").pop(); // Get the current filename
        const links = this.querySelectorAll(".nav-link");

        links.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
}

// Define the custom HTML tag
customElements.define("nav-tag", NavTag);





class FooterTag extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
      <footer class="navbar sticky-bottom py-3 mt-4">
          <div class="container d-flex flex-column align-items-center">
              <p class="mb-1">&copy; 2025 Professor Goodwin. All rights reserved.</p>
              <ul class="nav nav-underline d-flex gap-3">
                <li class="nav-item"><a class="nav-link text-secondary" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link text-secondary" href="resources.html">Resources</a></li>
                <li class="nav-item"><a class="nav-link text-secondary" href="#">Syllabus</a></li>
                <li class="nav-item"><a class="nav-link text-secondary" href="#">Bio</a></li>
            </ul>
          </div>
      </footer>
      `;
      this.highlightActiveLink();
  }

  highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current filename
    const links = this.querySelectorAll(".nav-link");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
}

// Define the custom HTML tag
customElements.define("footer-tag", FooterTag);





