import Home from "./views/Home.js";
import CSGO from "./views/CSGO.js";
import R6 from "./views/R6.js";
import Social from "./views/Social.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/home", view: Home },
        { path: "/csgo", view: CSGO },
        { path: "/r6", view: R6 },
        { path: "/social", view: Social },
    ];

    //Test each route for potentioal match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = {
        route: routes[0],
        isMatch: true
    };
}
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches( "[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});