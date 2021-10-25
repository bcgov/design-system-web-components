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
  return element;
};
const moveElement = (element, parent) => {
  const nName = element.nodeName.toLowerCase();
  if ("a" === nName) {
    filterATags(element);
  }
  parent.appendChild(element);
};
const breadCrumbElement = element => {
  const nName = element.nodeName.toLowerCase();
  if (("a" === nName || "span" === nName) &&
    "li" !== element.parentNode.nodeName.toLowerCase()) {
    filterATags(element);
    element.setAttribute("itemprop", "item");
    if ("a" === nName) {
      const spanTag = document.createElement("span");
      spanTag.setAttribute("itemprop", "name");
      spanTag.textContent = element.textContent;
      element.innerHTML = "";
      element.appendChild(spanTag);
    }
    else if ("span" === nName) {
      element.setAttribute("itemprop", "name");
      element.setAttribute("aria-current", "page");
      element.setAttribute("tabindex", 0);
    }
    const liTag = document.createElement("li");
    liTag.setAttribute("aria-label", element.textContent);
    liTag.setAttribute("itemscope", "");
    liTag.setAttribute("itemprop", "itemListElement");
    liTag.setAttribute("itemtype", "http://schema.org/ListItem");
    liTag.appendChild(element.cloneNode(true));
    element.parentNode.replaceChild(liTag, element);
  }
};
const menuElement = element => {
  const nName = element.nodeName.toLowerCase();
  if ("a" === nName && "li" !== element.parentNode.nodeName.toLowerCase()) {
    filterATags(element);
    element.setAttribute("tabindex", "-1");
    element.setAttribute("aria-hidden", "true");
    const liTag = document.createElement("li");
    if (element.hasAttribute("active")) {
      liTag.classList.add("active");
    }
    liTag.setAttribute("role", "menuitem");
    liTag.setAttribute("tabindex", "-1");
    liTag.setAttribute("aria-label", element.textContent);
    liTag.appendChild(element.cloneNode(true));
    element.parentNode.replaceChild(liTag, element);
  }
};
const findAncestor = (el, sel) => {
  while ((el = el.parentElement) &&
    !(el.matches || el.matchesSelector).call(el, sel))
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

export { findAncestor as a, breadCrumbElement as b, filterATags as f, keys as k, menuElement as m };
