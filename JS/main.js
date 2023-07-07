document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".welcome");
  const str = el.innerHTML.trim().split("");

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
  }, "");

  const chars = document.querySelectorAll(".char");

  window.addEventListener("load", () => {
    chars.forEach((char, index) => {
      setTimeout(() => {
        char.classList.add("is-animated");
      }, 50 * index);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".page-title-en");
  const str = el.innerHTML.trim().split("");

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
  }, "");

  window.addEventListener("load", () => {
    el.innerHTML.classList.add("is-animated");
  });

  Array.from(el.children).forEach((char, index) => {
    window.setTimeout(function () {
      char.classList.add("is-animated");
    }, 50 * index);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".page-title-ja");
  const str = el.innerHTML.trim().split("");

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
  }, "");

  window.addEventListener("load", () => {
    el.innerHTML.classList.add("is-animated");
  });

  Array.from(el.children).forEach((char, index) => {
    window.setTimeout(function () {
      char.classList.add("is-animated");
    }, 50 * index);
  });
});

{
  const fadeIn = document.querySelectorAll(".fadeIn");
  const slideIn = document.querySelectorAll(".slideIn");

  const options = {
    rootMargin: "0px",
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(showElement, options);

  fadeIn.forEach((fadeIn) => {
    observer.observe(fadeIn);
  });

  function showElement(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }
}

{
    {
        const open = document.querySelector(".openbtn1");
        const nav = document.querySelector(".nav");
        const overlay = document.querySelector(".overlay");
      
        open.addEventListener("click", () => {
          open.classList.toggle("active");
          nav.classList.toggle("active");
          overlay.classList.toggle("active");
        });
      }
}