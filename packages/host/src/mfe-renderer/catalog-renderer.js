const catalogRenderer = async () => {
  const slot = document.getElementById("content-slot");

  try {
    const { mountCatalog } = await import("catalog_mf/Main");

    if (mountCatalog) {
      mountCatalog(slot);
    }
  } catch (error) {
    const textNode = document.createElement("span");
    textNode.innerText = "Error ocurred when rendering Catalog";
    textNode.style.color = "red";
    slot.appendChild(textNode);
  }
};

export default catalogRenderer;
