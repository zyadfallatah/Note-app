const links = document.querySelectorAll("a");

console.log("hello");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.currentTarget.classList.value == "active") return;

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = link.href;
    }, 500);
  });
});
