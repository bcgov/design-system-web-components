var filterATags = function (element) {
    var href = element.getAttribute("href");
    if ("accessibility" === element.getAttribute("href")) {
        href = "https://www2.gov.bc.ca/gov/content/home/accessibility";
        element.setAttribute("href", href);
    }
    if (element.hasAttribute("aria")) {
        element.setAttribute("aria-label", element.textContent);
    }
};
var moveElement = function (element, parent) {
    var nName = element.nodeName.toLowerCase();
    if ("a" === nName) {
        filterATags(element);
    }
    parent.appendChild(element);
};
var menuElement = function (element) {
    var nName = element.nodeName.toLowerCase();
    if ("a" === nName && "li" !== element.parentNode.nodeName.toLowerCase()) {
        filterATags(element);
        var liTag = document.createElement("li");
        liTag.setAttribute("role", "menuitem");
        liTag.appendChild(element.cloneNode(true));
        element.parentNode.replaceChild(liTag, element);
    }
};
export { menuElement as a, moveElement as m };
