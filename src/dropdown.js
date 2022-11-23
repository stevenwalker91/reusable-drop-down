const initaliseDropdown = () => {
  // first step is to dynamically create the css styling and then add it to the page
  // this means a user does not need to add styles to their sheet for it to work
  const createStyle = () => {
    const style = document.createElement("style");
    style.innerHTML =
      ".dropdown-container { display:none } .showDropdown { display: flex; flex-direction: column; }";
    document.getElementsByTagName("head")[0].appendChild(style);
  };

  const showDropdown = (event) => {
    // get the sibling of thr button (which should be the container)
    const siblingContainer = event.target.nextElementSibling;
    siblingContainer.classList.toggle("showDropdown");
  };

  // to hide drop down, look for any open drop downs and remove class
  const hideDropdown = () => {
    const dropdowns = document.querySelectorAll(".dropdown-container");
    dropdowns.forEach((element) => {
      if (element.classList.contains("showDropdown")) {
        element.classList.toggle("showDropdown");
      }
    });
  };

  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  dropdownBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      showDropdown(event);
    })
  );

  // listen for clicks on the window and hide dropdown if so
  window.addEventListener("click", hideDropdown);

  createStyle();
};

export default initaliseDropdown;
