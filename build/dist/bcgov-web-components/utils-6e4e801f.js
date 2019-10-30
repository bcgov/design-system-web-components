const filterATags = element => {
    let href = element.getAttribute("href");
    if ("accessibility" === element.getAttribute("href")) {
        href = "https://www2.gov.bc.ca/gov/content/home/accessibility";
        element.setAttribute("href", href);
    }
    if (element.hasAttribute("aria")) {
        element.setAttribute("aria-label", element.textContent);
        element.removeAttribute("aria");
    }
};
const moveElement = (element, parent) => {
    const nName = element.nodeName.toLowerCase();
    if ("a" === nName) {
        filterATags(element);
    }
    parent.appendChild(element);
};
const menuElement = element => {
    const nName = element.nodeName.toLowerCase();
    if ("a" === nName && "li" !== element.parentNode.nodeName.toLowerCase()) {
        filterATags(element);
        element.setAttribute("tabindex", "-1");
        element.setAttribute("aria-hidden", "true");
        const liTag = document.createElement("li");
        liTag.setAttribute("role", "menuitem");
        liTag.setAttribute("tabindex", "-1");
        liTag.setAttribute("aria-label", element.textContent);
        liTag.appendChild(element.cloneNode(true));
        element.parentNode.replaceChild(liTag, element);
    }
    else {
    }
};
const findAncestor = (el, sel) => {
    while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel))
        ;
    return el;
};
const keys = {
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40
};

export { findAncestor as a, filterATags as f, keys as k, menuElement as m };
