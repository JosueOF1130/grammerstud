
//creating custom elements
class NavTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="index.html">
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
          <li class="nav-item"><a href="bio.html" class="nav-link">Bio</a></li>
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
                link.classList.remove("text-secondary-emphasis");
            } else {
                link.classList.remove("active");
                link.classList.add("text-secondary-emphasis");
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
      
      <div class="navbar sticky-bottom py-3 mt-4">
        <div class="container d-flex flex-column align-items-center">

          <!-- Copyright -->
          <p class="mb-2 text-center">&copy; 2025 Professor Goodwin. All rights reserved.</p>

          <!-- Contact Information -->
          <div class="footer-contact text-center mb-2">
            <a href="mailto:nicholas.goodwin@sjcc.edu" class="text-secondary">nicholas.goodwin@sjcc.edu</a> |
            <a href="mailto:ngoodwin@ohlone.edu" class="text-secondary">ngoodwin@ohlone.edu</a> |
            <a href="tel:16692442399" class="text-secondary">(669) 244-2399</a> |
            <a href="https://linkedin.com/in/poetemaudit" target="_blank" class="text-secondary">linkedin</a>
          </div>
          <!-- Social Media Links -->
          <div class="footer-socials text-center mb-2">
            <a href="https://x.com/grammarstud" target="_blank" class="text-secondary">Twitter</a> |
            <a href="https://x.com/grammarstud" target="_blank" class="text-secondary">Instagram</a>
          </div>
          
          <div class="footer-coffee text-center mb-2">
          <p>Buy me a coffee?</p>
            <img src="../images/coffee-qr.png" alt="Buy me a coffee" width="200">
          </div>

          <!-- Navigation Links -->
          <ul class="nav nav-underline d-flex gap-3">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="resources.html">Resources</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Syllabus</a></li>
            <li class="nav-item"><a class="nav-link" href="bio.html">Bio</a></li>
          </ul>
        </div>
      </div>
      `;
      this.highlightActiveLink();
  }

  highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current filename
    const links = this.querySelectorAll(".nav-link");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
            link.classList.remove("text-secondary-emphasis");
        } else {
            link.classList.remove("active");
            link.classList.add("text-secondary-emphasis");
        }
    });
}
}

// Define the custom HTML tag
customElements.define("footer-tag", FooterTag);





