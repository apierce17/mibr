import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Home");
    }
        async getHtml() {
            return `
            <body id="page-top">
            <section id="sponsors">
            <div class="container-fluid pt-3 row d-flex mx-auto bg-secondary justify-content-center">
                <ul style="list-style-type: none;">
                    <li class="pr-3">
                        <img src="./static/Images/Sponsers/GamersClub.webp" width="20%">
                    </li>
                    <li class="pr-3">
                        <img src="./static/Images/Sponsers/betway white logo.webp" width="20%">
                    </li>
                    <li class="pr-3">
                        <img src="./static/Images/Sponsers/ironclad.webp" width="20%">
                    </li>
                    <li>
                        <img src="./static/Images/Sponsers/ALL33.webp" width="20%">
                    </li>
                </ul>
              </div>
            </section>
    
            <section id="Hero">
                <div class="container-fluid pt-2">
                    <div class="jumbotron-fluid">
                        <img src="./static/Images/Images/home-hero.png" width="100%" height="100%">
                    </div>
                </div>
            </section>
    
            <section id="games">
                <div class="container-fluid py-5 pt-3 row d-flex mx-auto justify-content-center">
                    <ul style="list-style-type: none;">
                        <li class="pr-5">
                            <a href="/r6" data-link><img src="./static/Images/Images/R6.png" width="40%" class="zoom"></a>
                        </li>
                        <li>
                            <a href="/csgo" data-link><img src="./static/Images/Images/CS.png" width="40%" class="zoom"></a>
                        </li>
                    </ul>
                  </div>
                </section>   
            `;
        }
}