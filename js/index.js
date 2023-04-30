class header extends HTMLElement {
        connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="header-container">
                <div class="header">
                <div class="name">
                <h1>Robert Foley</h1>
                        </div>
                <div class="header-about">
                        <a class="nav-item" href="index.html">About Me</a></div>        
                <div class="header-portfolio">
                        <a class="nav-item" href="portfolio.html">My Portfolio</a></div>
                <div class="header-tools">
                        <a class="nav-item" href="tools.html">Tools</a></div>
                <div class="header-photo">
                        <a class="nav-item" href="photo.html">Photography</a></div>
                <div class="header-contact">
                        <a class="nav-item" href="contact.html">Contact Me</a></div>
                </div>
                
        </div>
        </header>
        `
        }
}

customElements.define('page-header', header)

class footer extends HTMLElement {
        connectedCallback() {
        this.innerHTML = `
        <footer>
                <div class="footer">
                <div class="github">
                        <a href="https://github.com/apmanager001" class="footer-item" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>
                <div class="footer-instagram">
                        <a href="https://www.instagram.com/foleyautamatic/" class="footer-item" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
                <div class="linkin">       
                        <a href="https://www.linkedin.com/in/robertfoleyiii/" class="footer-item" target="_blank"><i class="fa fa-linkedin fa-beat" aria-hidden="true"></i></a></div>
                <div class="substack">       
                        <a href="https://robertfoley.substack.com/" class="footer-item" target="_blank"><img src="img/substack.PNG"></a></div>
                <div class="email">
                        <h4><p>Robert Foley</p>
                        <p>robertfoleyiii@gmail.com</p></h4></div>
        
                
                </div>
        </footer>
        `
        }
}

customElements.define('page-footer', footer)