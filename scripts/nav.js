const nav = ({
    textContent = "Nav",
    customClass = "",
    event = "click",
    onClick = null,
    stopPropagate = false,
  }) => {
    const element = document.createElement("nav");
    element.textContent = textContent;
    element.classList.add("nav");
    if (customClass) element.classList.add(customClass);
    onClick &&
      element.addEventListener(event, (event) => {
        if (stopPropagate) e.stopPropagation();
        onClick(event);
      });
    return element;
  };
  
  // Append Nav bar to header
  header.appendChild(nav({ textContent: "Drag n Drop vanila JS - P0" }));