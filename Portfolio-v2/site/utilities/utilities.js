"use strict"

// Footer
class Footer extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `
        <footer class="section footer-modern context-dark footer-modern-2">
            <div class="footer-modern-line-2">
                <div class="container">
                    <div class="row row-30 align-items-center">
                        <div class="col-sm-6 col-md-7 col-lg-4 col-xl-4">
                            <div class="row row-30 align-items-center text-lg-center">
                                <div class="col-md-7">
                                    <a class="brand" href="index.html"><h5>MULLER Léane</h5></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-8 col-xl-8 oh-desktop">
                            <div class="group-xmd group-sm-justify">
                                <!--<div class="footer-modern-contacts wow slideInUp">
                                    <div class="unit unit-spacing-sm align-items-center">
                                        <div class="unit-left"><span class="icon icon-24 mdi mdi-phone"></span></div>
                                        <div class="unit-body"><a class="phone" href="tel:#">+1 718-999-3939</a></div>
                                    </div>
                                </div>-->
                                <div class="footer-modern-contacts wow slideInDown">
                                    <div class="unit unit-spacing-sm align-items-center">
                                        <div class="unit-left"><span class="icon mdi mdi-email"></span></div>
                                        <div class="unit-body"><a class="mail" href="mailto:mullerleane13@gmail.com">mullerleane13@gmail.com</a></div>
                                    </div>
                                </div>
                                <div class="wow slideInRight">
                                    <ul class="list-inline footer-social-list footer-social-list-2 footer-social-list-3">
                                        <li>
                                            <a class="icon mdi mdi-linkedin" href="https://www.linkedin.com/in/leane-muller/" target="_blank"></a>
                                        </li>
                                        <li>
                                            <a class="icon mdi mdi-git" href="https://github.com/AyatoKirishima" target="_blank"></a>
                                        </li>
                                        <li>
                                            <a class="icon mdi mdi-instagram" href="https://www.instagram.com/blue_sakura_13/" target="_blank"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
            `;
    }

}

customElements.define('footer-component', Footer);

// Navbar
class Header extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `
        <header class="section page-header">
        <!-- RD Navbar-->
        <div class="rd-navbar-wrap">
            <nav class="rd-navbar rd-navbar-modern" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static"
                data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="56px" data-xl-stick-up-offset="56px" data-xxl-stick-up-offset="56px" data-lg-stick-up="true"
                data-xl-stick-up="true" data-xxl-stick-up="true">
                <div class="rd-navbar-inner-outer">
                    <div class="rd-navbar-inner">
                        <!-- RD Navbar Panel-->
                        <div class="rd-navbar-panel">
                            <!-- RD Navbar Toggle-->
                            <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                            <!-- RD Navbar Brand-->
                            <div class="rd-navbar-brand">
                                <a class="brand" href="index.html"><h5>Léane Muller</h5></a>
                            </div>
                        </div>
                        <div class="rd-navbar-right rd-navbar-nav-wrap">
                            <div class="rd-navbar-aside">
                                <ul class="rd-navbar-contacts-2">
                                    <li>
                                        <div class="unit unit-spacing-xs">
                                            <div class="unit-left"><span class="icon mdi mdi-map-marker"></span></div>
                                            <div class="unit-body"><a class="address" href="#">France</a></div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="list-share-2">
                                    <li>
                                        <a class="icon mdi mdi-linkedin" href="https://www.linkedin.com/in/leane-muller/" target="_blank"></a>
                                    </li>
                                    <li>
                                        <a class="icon mdi mdi-git" href="https://github.com/AyatoKirishima" target="_blank"></a>
                                    </li>
                                    <li>
                                        <a class="icon mdi mdi-instagram" href="https://www.instagram.com/blue_sakura_13/" target="_blank"></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="rd-navbar-main">
                                <!-- RD Navbar Nav-->
                                <ul class="rd-navbar-nav">
                                    <li id="accueil" class="rd-nav-item active"><a class="rd-nav-link" href="index.html">Accueil</a>
                                    </li>
                                    <li id="a-propos" class="rd-nav-item"><a class="rd-nav-link" href="about-us.html">A propos</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <!--<div class="rd-navbar-project-hamburger rd-navbar-project-hamburger-open rd-navbar-fixed-element-1" data-multitoggle=".rd-navbar-inner" data-multitoggle-blur=".rd-navbar-wrap" data-multitoggle-isolate="data-multitoggle-isolate">
                            <div class="project-hamburger"><span class="project-hamburger-arrow"></span><span class="project-hamburger-arrow"></span><span class="project-hamburger-arrow"></span>
                            </div>
                        </div>
                        <div class="rd-navbar-project">
                            <div class="rd-navbar-project-header">
                                <h5 class="rd-navbar-project-title">Gallery</h5>
                                <div class="rd-navbar-project-hamburger rd-navbar-project-hamburger-close" data-multitoggle=".rd-navbar-inner" data-multitoggle-blur=".rd-navbar-wrap" data-multitoggle-isolate="data-multitoggle-isolate">
                                    <div class="project-close"><span></span><span></span></div>
                                </div>
                            </div>
                            <div class="rd-navbar-project-content rd-navbar-content">
                                <div>
                                    <div class="row gutters-20" data-lightgallery="group">
                                        <div class="col-6">
                                            <article class="thumbnail thumbnail-creative">
                                                <a href="images/project-1-1200x800-original.jpg" data-lightgallery="item">
                                                    <div class="thumbnail-creative-figure"><img src="images/project-1-195x164.jpg" alt="" width="195" height="164" />
                                                    </div>
                                                    <div class="thumbnail-creative-caption"><span class="icon thumbnail-creative-icon linearicons-magnifier"></span></div>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="col-6">
                                            <article class="thumbnail thumbnail-creative">
                                                <a href="images/project-2-1200x800-original.jpg" data-lightgallery="item">
                                                    <div class="thumbnail-creative-figure"><img src="images/project-2-195x164.jpg" alt="" width="195" height="164" />
                                                    </div>
                                                    <div class="thumbnail-creative-caption"><span class="icon thumbnail-creative-icon linearicons-magnifier"></span></div>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="col-6">
                                            <article class="thumbnail thumbnail-creative">
                                                <a href="images/project-3-1200x800-original.jpg" data-lightgallery="item">
                                                    <div class="thumbnail-creative-figure"><img src="images/project-3-195x164.jpg" alt="" width="195" height="164" />
                                                    </div>
                                                    <div class="thumbnail-creative-caption"><span class="icon thumbnail-creative-icon linearicons-magnifier"></span></div>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="col-6">
                                            <article class="thumbnail thumbnail-creative">
                                                <a href="images/project-4-1200x800-original.jpg" data-lightgallery="item">
                                                    <div class="thumbnail-creative-figure"><img src="images/project-4-195x164.jpg" alt="" width="195" height="164" />
                                                    </div>
                                                    <div class="thumbnail-creative-caption"><span class="icon thumbnail-creative-icon linearicons-magnifier"></span></div>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="col-6">
                                            <article class="thumbnail thumbnail-creative">
                                                <a href="images/project-5-1200x800-original.jpg" data-lightgallery="item">
                                                    <div class="thumbnail-creative-figure"><img src="images/project-5-195x164.jpg" alt="" width="195" height="164" />
                                                    </div>
                                                    <div class="thumbnail-creative-caption"><span class="icon thumbnail-creative-icon linearicons-magnifier"></span></div>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="col-6">
                                            <article class="thumbnail thumbnail-creative">
                                                <a href="images/project-6-1200x800-original.jpg" data-lightgallery="item">
                                                    <div class="thumbnail-creative-figure"><img src="images/project-6-195x164.jpg" alt="" width="195" height="164" />
                                                    </div>
                                                    <div class="thumbnail-creative-caption"><span class="icon thumbnail-creative-icon linearicons-magnifier"></span></div>
                                                </a>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>-->
                </div>
            </nav>
        </div>
        </header>
            `;
    }

}

customElements.define('header-component', Header);


window.addEventListener("load", function(event) {
    var pathArray = window.location.pathname.split('/');
    // console.warn(pathArray.includes("about-us.html"));
    let about = document.getElementById("a-propos");
    let home = document.getElementById("accueil");
    if (pathArray.includes("about-us.html")) {
        about.classList.add("active");
        home.classList.remove("active");
    }
});