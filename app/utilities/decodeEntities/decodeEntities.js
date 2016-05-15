//create a new html document (doesn't execute script tags in child elements)
const doc = document.implementation.createHTMLDocument("");
const element = doc.createElement("div");

export default function decodeHTMLEntities(str) {
  if(str && typeof str === "string") {
    element.innerHTML = str;
    const text = element.textContent;
    element.textContent = "";
    return text;
  }

  return str;
}
