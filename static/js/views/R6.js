import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("MIBR - R6");
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
                        <source src="./static/Videos/R6.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <video width>
        </section>

        <section id="team">
            <div class="container-fluid justify-content-center text-center pb-5">
                <h1 class="pb-5">Rainbow Six</h1>
                <div class="row">
                    <div class="col-md image-container fa-lg">
                        <img src="./static/Images/Players/MKING.png" width="100%" class="player zoom">
                        <h3>MKING</h3>
                        <a href="https://www.twitch.tv/mkingr6"><i class="fab fa-twitch"></i></a>
                        <a href="https://www.instagram.com/mkingr6/"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/MKingR6"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/c/MasterKingR6/videos"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="col-md image-container">
                        <img src="./static/Images/Players/BULLET1.png" width="100%" class="player zoom">
                        <h3>BULLET1</h3>
                        <a href="https://www.twitch.tv/bullet1v"><i class="fab fa-twitch"></i></a>
                        <a href="https://www.instagram.com/bullet1r6/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/Bullet1r6/"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/bullet1r6"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/c/Bullet1r6/videos"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="col-md image-container">
                        <img src="./static/Images/Players/CAMERAM4N.png" width="100%" class="player zoom">
                        <h3>CAMERAM4N</h3>
                        <a href="https://www.twitch.tv/cameram4n"><i class="fab fa-twitch"></i></a>
                        <a href="https://www.instagram.com/cameram4nr6/"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/cameram4n"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/channel/UCizQf4hZfJ4C2rtEwJnVHwg"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="col-md image-container">
                        <img src="./static/Images/Players/CYBERZERA.png" width="100%" class="player zoom">
                        <h3>CYBERZERA</h3>
                        <a href="https://www.twitch.tv/cyberzerar6"><i class="fab fa-twitch"></i></a>
                        <a href="https://www.instagram.com/cyberzerar6/"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/cyberzeraR6"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/user/CyberNetcoGamer"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="col-md image-container">
                        <img src="./static/Images/Players/SOULZ1.png" width="100%" class="player zoom">
                        <h3>SOULZ1</h3>
                        <a href="http://twitch.tv/souulz"><i class="fab fa-twitch"></i></a>
                        <a href="https://www.instagram.com/soulz.05/"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/soulz05"><i class="fab fa-twitter"></i></a>
                        <a href="http://youtube.com/soulz1"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="col-md image-container">
                        <img src="./static/Images/Players/GUILLE.png" width="100%" class="player zoom">
                        <h3>GUILLE</h3>
                        <a href="https://www.twitch.tv/guillescalfi"><i class="fab fa-twitch"></i></a>
                        <a href="https://www.instagram.com/guillescalfi"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/guillescalfi"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
              </div>
              </div>
        </section>
            `;
        }
}