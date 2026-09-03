import { filterATags, findAncestor } from "./utils/utils";
import { unlink } from "fs";

function addAttributes(
  element: HTMLElement,
  atts: object = {},
  content: string | null = null
) {
  for (let [key, value] of Object.entries(atts)) {
    element.setAttribute(key, value);
  }
  if (null !== content) {
    element.innerHTML = content;
  }
}

function createTestDom() {
  const parent: HTMLElement = document.createElement("ul");
  const li: HTMLElement = document.createElement("li");
  const atag: HTMLElement = document.createElement("a");

  addAttributes(atag, { href: "https://gov.bc.ca", aria: "" }, "Test Link");
  addAttributes(li, { class: "li-class", id: "li-id" });
  addAttributes(parent, { class: "ul-class", active: "" });
  li.appendChild(atag);
  parent.appendChild(li);
  parent.appendChild(li.cloneNode(true));
  return {
    parent: parent,
    li: li,
    atag: atag
  };
}

describe("function findAncestor", () => {
  const domObject = createTestDom();
  const parent = findAncestor(domObject.atag, "ul");
  test("Find parent element from a tag using 'ul' selector", () => {
    expect(parent).toBe(domObject.parent);
  });
  test("Make sure parent element from a tag is not li", () => {
    expect(parent).not.toBe(domObject.li);
  });

  const parent2 = findAncestor(domObject.atag, 'ul[class="ul-class"]');
  test("Find parent element from a tag using 'ul[class=\"ul-class\"]' selector", () => {
    expect(parent2).toBe(domObject.parent);
  });

  const parent3 = findAncestor(domObject.atag, ".ul-class");
  test("Find parent element from a tag using '.ul-class selector", () => {
    expect(parent3).toBe(domObject.parent);
  });
});

describe("function filterATags", () => {
  const element1: HTMLElement = document.createElement("a");
  const span: HTMLElement = document.createElement("span");
  const text: string = "BCGov Web Components";
  const href: string = "https://gov.bc.ca";

  span.innerHTML = text;

  addAttributes(element1, { href: href }, text);
  filterATags(element1);
  test("No aria should return null for aria-label", () => {
    expect(element1.getAttribute("aria-label")).toBe(null);
  });
  test("Inner HTML Text only", () => {
    expect(element1.innerHTML).toBe(text);
  });

  const element2: HTMLElement = document.createElement("a");

  addAttributes(element2, { href: href, aria: "" });
  element2.appendChild(span);
  filterATags(element2);
  test("Have aria label", () => {
    expect(element2.getAttribute("aria-label")).toBe(text);
  });
  test("Inner HTML with HTML", () => {
    expect(element2.innerHTML).toBe("<span>" + text + "</span>");
  });
});
