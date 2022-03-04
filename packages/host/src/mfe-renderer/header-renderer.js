const headerRenderer = async () => {
  const slot = document.getElementById("header-slot");

  try {
    const { mountHeader } = await import("shared_components/Header");

    if (mountHeader) {
      mountHeader("Home", slot);
    }
  } catch (error) {
    const textNode = document.createElement("span");
    textNode.innerText = "Error ocurred when rendering Header";
    textNode.style.color = "red";
    slot.appendChild(textNode);
  }
};

export default headerRenderer;
