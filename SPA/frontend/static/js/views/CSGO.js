import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("MIBR - CSGO");
    }
        async getHtml() {
            return `
            <body id="page-top">
            <section id="sponsors">
            <div class="container-fluid pt-3 row d-flex mx-auto bg-secondary justify-content-center">
                <div>
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
                </div>
              </div>
            </section>
    
            <section id="Hero">
                <div class="container-fluid pt-2">
                    <div class="jumbotron-fluid">
                        <video width="100%" height="100%" autoplay>
                            <source src="./static/Videos/header.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </section>
    
            <section id="team">
                <div class="container-fluid justify-content-center text-center pb-5">
                    <h1 class="pb-5">Counter Strike</h1>
                    <div class="row">
                        <div class="col-md image-container fa-lg">
                            <img src="./static/Images/Players/kNgV-.png" width="100%" class="player zoom">
                            <h4>Vito "kNgV-" Giuseppe</h4>
                            <i class="fab fa-twitch"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="col-md image-container">
                            <img src="./static/Images/Players/LUCAS1.png" width="100%" class="player zoom">
                            <h4>Lucas "LUCAS1" Teles</h4>
                            <i class="fab fa-twitch"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="col-md image-container">
                            <img src="./static/Images/Players/trk.png" width="100%" class="player zoom">
                            <h4>Alencar "trk" Rossato</h4>
                            <i class="fab fa-twitch"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="col-md image-container">
                            <img src="./static/Images/Players/leo_drk.png" width="100%" class="player zoom">
                            <h4>Leonardo "leo_drk" Oliveira</h4>
                            <i class="fab fa-twitch"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="col-md image-container">
                            <img src="./static/Images/Players/vsm.png" width="100%" class="player zoom">
                            <h4>Vinicius "vsm" Moreira</h4>
                            <i class="fab fa-twitch"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                  </div>
                  </div>
            </section>
            `;
        }
}