let icons = document.querySelectorAll(".ico");
let length = icons.length;
const docItems = document.querySelectorAll(".doc-item");

icons.forEach((item, index) => {
  item.addEventListener("mouseover", (e) => {
    focus(e.target, index);
  });
  item.addEventListener("mouseleave", (e) => {
    icons.forEach((item) => {
      item.style.transform = "scale(1)  translateY(0px)";
    });
  });
});

const focus = (elem, index) => {
  let previous = index - 1;
  let previous1 = index - 2;
  let next = index + 1;
  let next2 = index + 2;

  if (previous == -1) {
    if (elem.style) {
      elem.style.transform = "scale(1.5)  translateY(-8.2px)";
    }
  } else if (next == icons.length) {
    if (elem.style) {
      elem.style.transform = "scale(1.5)  translateY(-8.2px)";
    }
  } else {
    if (elem.style) {
      elem.style.transform = "scale(1.5)  translateY(-8.2px)";
    }

    if (icons[previous]) {
      icons[previous].style.transform = "scale(1.3) translateY(-4.5px)";
    }

    if (icons[previous1]) {
      icons[previous1].style.transform = "scale(1.2)";
    }
    if (icons[next]) {
      icons[next].style.transform = "scale(1.3) translateY(-4.5px)";
    }
    if (icons[next2]) {
      icons[next2].style.transform = "scale(1.2)";
    }
  }
};

docItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    docItems.forEach((it) => it.classList.remove("active"));
    this.classList.add("active");
  });
});
