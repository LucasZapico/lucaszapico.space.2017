const projectCarousel = document.querySelector('.carousel');
const el = document.querySelector('.tabs');
const HOMETOC = document.querySelector('.toc-wrapper');

var homeTOC = M.Pushpin.init(HOMETOC);

//tab component intanciation
var homeTabs = M.Tabs.init(el);

// Project CAROUSEL
var carousel = M.Carousel.init(projectCarousel, {
    fullWidth: true,
    indicators: true,
    duration: 1000,
    onCycleTo: function() {
        cycleSlide();
    }
});
// home carousel slide interval
function cycleSlide() {
    setTimeout(carTimer, 8000);

    function carTimer() {
        carousel.next();
    }
}
// SCROLLSPY
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var scrollspy = M.ScrollSpy.init(elems);
});


var elem = document.querySelector('.parallax');
var parallax = M.Parallax.init(elem);

//  WORKSHOP TAG SELECTIONS

handleSelection();
let tagArr = [];
let selectedTags = [];


// the selection action
function handleSelection() {
    const tags = document.querySelectorAll(".tag");
    Array.from(tags).forEach(tag => {
        tag.addEventListener("click", e => {
            let action = "";
            let tagName = tag.innerText;
            if (tag.classList.contains("sel")) {
                tag.classList.remove("sel");
                action = "remove";
            } else {
                tag.classList.add("sel");
                action = "add";
            }
            filtered(tagName, action);
        });
    });
}

// handle which elements are show or hidden

function filtered(tag, action) {
    let projects = document.querySelectorAll("[data-tags]");
    projects = Array.from(projects);
    if (action === "add") {
        selectedTags.push(tag);
    } else if (action === "remove") {
        console.log("remove");
        selectedTags = selectedTags.filter(t => {
            return t !== tag;
        });
    }
    console.log(selectedTags);
    if (selectedTags.length > 0) {
        projects.forEach(p => {
            let pTags = p.getAttribute("data-tags").split(",");
            console.log(pTags);
            pTags.forEach(t=>t.trim())
            console.log(pTags);
            if (
                pTags.some(t => {
                    t.trim
                    return selectedTags.includes(t);
                })
            ) {
                p.classList.remove("hide");
            } else {
                p.classList.add("hide");
            }
        });
    } else {
        console.log("test");
        projects.forEach(p => {
            p.classList.remove("hide");
        });
    }
}