// *************change year************
let date = document.querySelector(".date").innerHTML = new Date().getFullYear();

// *************toggle btn************
// grab elements
let toggleBtn = document.getElementById("nav-toggle");
let links = document.querySelector(".nav-links");

// add event listener
toggleBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});

// *************smooth scrolling************
let scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {

        e.preventDefault();
        links.classList.remove("show-links");

        let id = e.target.getAttribute("href").slice(1);
        let element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo(
            {
                left: 0,
                top: position,
                behaviour: "smooth"
            }
        );


    });
});
