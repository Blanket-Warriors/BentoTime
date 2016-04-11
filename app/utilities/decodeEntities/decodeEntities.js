const decodeEntities = (function () {

  //create a new html document (doesn't execute script tags in child elements)
  const doc = document.implementation.createHTMLDocument("");
  const element = doc.createElement("div");

  function decodeHTMLEntities(str) {
    if(str && typeof str === "string") {
      element.innerHTML = str;
      const text = element.textContent;
      element.textContent = "";
      return text;
    }

    return str;
  }

  return decodeHTMLEntities;
})();

export default decodeEntities;
