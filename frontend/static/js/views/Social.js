import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Social");
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
    
            <section id="gallery">
                <div class="container text-center p-5">
                    <h1 class="pb-5">Social</h1>
                    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                    <div class="elfsight-app-8b949d8c-abc4-49bd-b2d1-51cbbb74590b"></div>
                </div>
            </section>
            `;
        }
}