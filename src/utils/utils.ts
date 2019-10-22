const filterATags = element => {
  let href: string = element.getAttribute("href");
  if ("accessibility" === element.getAttribute("href")) {
    href = "https://www2.gov.bc.ca/gov/content/home/accessibility";
    element.setAttribute("href", href);
  }
  if (element.hasAttribute("aria")) {
    element.setAttribute("aria-label", element.textContent);
  }
};

export const moveElement = (element, parent) => {
  const nName: string = element.nodeName.toLowerCase();
  if ("a" === nName) {
    filterATags(element);
  }
  parent.appendChild(element);
};

export const menuElement = element => {
  const nName: string = element.nodeName.toLowerCase();
  if ("a" === nName && "li" !== element.parentNode.nodeName.toLowerCase()) {
    filterATags(element);
    const liTag: HTMLElement = document.createElement("li");
    liTag.setAttribute("role", "menuitem");
    liTag.appendChild(element.cloneNode(true));

    element.parentNode.replaceChild(liTag, element);
  } else {
  }
};
