
//creating custom elements
class NavTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar container navbar-expand-md">
    <div class="container-fluid">
        <a class="navbar-brand d-flex flex-row justify-content-center gap-2" href="#">
            <svg height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 504.125 504.125" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#3A7F0D;" d="M339.772,0c0,0,44.536,108.954-146.337,182.138C89.719,221.893,10.059,323.789,105.173,481.193 c7.877-70.357,41.653-225.485,186.888-260.884c0,0-135.176,50.546-147.117,279.347c69.459,9.752,232.361,16.305,280.726-125.062 C489.536,187.817,339.772,0,339.772,0z"></path> <path style="fill:#49A010;" d="M145.007,498.704c147.456-58.849,254.748-196.71,269.556-361.283C384.418,56.107,339.772,0,339.772,0 s44.536,108.954-146.337,182.138C89.719,221.893,10.059,323.789,105.173,481.193c7.877-70.357,41.653-225.485,186.888-260.884 C292.053,220.31,157.279,270.73,145.007,498.704z"></path> <circle style="fill:#3A7F0D;" cx="90.459" cy="171.985" r="13.785"></circle> <g> <circle style="fill:#49A010;" cx="133.782" cy="158.2" r="9.846"></circle> <circle style="fill:#49A010;" cx="124.921" cy="64.662" r="24.615"></circle> <circle style="fill:#49A010;" cx="200.736" cy="120.785" r="7.877"></circle> <circle style="fill:#49A010;" cx="266.713" cy="76.477" r="22.646"></circle> </g> </g></svg>
            <p>Professor Goodwin</p>
        </a>
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="resources.html">Resources</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Syllabus</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Bio</a>
              </li>
            </ul>
          </div>
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
      <footer class="container-fluid bg-dark text-light py-3 mt-4">
          <div class="container d-flex flex-column align-items-center">
              <p class="mb-1">&copy; 2025 Professor Goodwin. All rights reserved.</p>
              <ul class="list-unstyled d-flex gap-3">
                  <li><a class="text-light text-decoration-none" href="index.html">Home</a></li>
                  <li><a class="text-light text-decoration-none" href="resources.html">Resources</a></li>
                  <li><a class="text-light text-decoration-none" href="#">Syllabus</a></li>
                  <li><a class="text-light text-decoration-none" href="#">Bio</a></li>
              </ul>
          </div>
      </footer>
      `;
  }
}

// Define the custom HTML tag
customElements.define("footer-tag", FooterTag);





