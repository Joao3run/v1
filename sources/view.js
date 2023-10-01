export default class View {
    #container = document.querySelector('#container')
    #splash = document.querySelector('#splash')
    #homeLink = document.querySelector('[data-page="expertise"]')
    #links = document.querySelectorAll('[data-page]');

    initPage(fn) {
        document.addEventListener("DOMContentLoaded", fn());

        this.#links.forEach( (link) => {
            link.addEventListener("click",  (event) => {
                event.preventDefault();
                const page = link.getAttribute("data-page");
                history.pushState({page}, null, `/${page}`);
                console.log('==> page ==> ', page);
                this.#links.forEach(function (otherLink) {
                    otherLink.classList.remove("underline");
                });
                link.classList.add("underline");
                this.hideAllSections();

                const section = document.getElementById(page + "_section");
                if (section) {
                    section.style.display = "flex";
                }
            });
        });

        window.addEventListener("popstate", function (event) {
            const state = event.state;
            if (state && state.page) {
                this.hideAllSections();
                const section = document.getElementById(state.page + "_section");
                if (section) {
                    section.style.display = "block";
                }
            }
        });
    }

     hideAllSections() {
        const sections = document.querySelectorAll('section');
        sections.forEach(function (section) {
            section.style.display = "none";
        });
    }

    configureBackgroundCanvas(fn) {
        fn(this.#container);
    }

    removeSplashScreen() {
        this.#splash.style.display = "none";
    }

    addUnderlineHomeLink() {
        this.#homeLink.classList.add("underline");
    }

    showExpertiseSection() {
        document.getElementById("expertise_section").style.display = "flex";
    }

}
