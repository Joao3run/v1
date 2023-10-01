import {Sketch} from "./sketch";

export default class Controller {
    #view

    constructor({view}) {
        this.#view = view
    }

    static init(deps) {
        const controller = new Controller(deps)
        controller.init()
        return controller
    }

    init() {
        this.#view.initPage(
            this.#initPage.bind(this)
        )


        this.#view.configureBackgroundCanvas(
            this.#configureBackgroundCanvas.bind(this)
        )
    }


    #initPage() {
        const view = this.#view
        view.addUnderlineHomeLink();
        view.showExpertiseSection();

        setTimeout(function () {
            view.removeSplashScreen();
        }, 3000);
    }

    #configureBackgroundCanvas(container) {
        console.log('==> container ==> ', container);
        new Sketch({
            container: container
        });
    }


}
