const hideRightMenu = (value) => {
  if (value) {
    document.querySelector("#leftSide").classList.add("d-none");
  } else {
    if (document.querySelector("#leftSide").classList.contains("d-none"))
      document.querySelector("#leftSide").classList.remove("d-none");
  }
};

export default hideRightMenu;
