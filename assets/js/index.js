const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("menu-slide-in")) {
        mobileMenu.classList.remove("menu-slide-out");
        mobileMenu.classList.add("menu-slide-in");
        menuButton.src = "./assets/images/close-menu.png";
    } else {
        menuButton.src = "./assets/images/hamburger-menu.svg";
        mobileMenu.classList.remove("menu-slide-in");
        mobileMenu.classList.add("menu-slide-out");
    };
});

//Trigger CSS animations when elements scroll into view
//uses Intersection Observer API to determine if an object is in the viewport and adds in-view class to elements as they enter, and can remove class when the element leaves
//use this to add keyframes and transition animations to any elements with the .animate class
//to use add the .animate class to any element you want animated

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                return;
            }
            //uncomment this section if you want to have the animation reset every time the element leaves the viewport
            // entry.target.classList.remove("in-view");
        });
    });

    const allAnimatedElements = document.querySelectorAll(".animate");

    allAnimatedElements.forEach((element) => observer.observe(element));

})