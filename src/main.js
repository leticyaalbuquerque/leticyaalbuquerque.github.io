/* Radial Progress Bar */
let progressBarAnimated = false;

function animateProgressBar() {
  if (progressBarAnimated) {
    return;
  }
  let boxProgressBar = document.querySelectorAll(".progress-bar");
  Array.from(boxProgressBar).forEach((box) => {
    var bar = new ProgressBar.Circle(box, {
      color: "#57047a",
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: "easeInOut",
      duration: 1400,
      text: {
        autoStyleContainer: false,
      },
      from: { color: "#aaa", width: 1 },
      to: { color: "#02b6c4", width: 4 },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);
        circle.path.setAttribute("stroke-width", state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText("");
        } else {
          circle.setText(value + "%");
        }
      },
    });
    bar.text.style.fontFamily = "Poppins, sans-serif";
    bar.text.style.fontWeight = 500;
    bar.text.style.fontSize = "1.5rem";
    const porcentagem = Number(box.dataset.progress) / 100;
    bar.animate(porcentagem);
    progressBarAnimated = true;
  });
}

/* Scroll */
const home = document.querySelector("#home");
const sobre = document.querySelector("#sobre");
const portfolio = document.querySelector("#portfolio");
/* const contato = document.querySelector("#contato"); */

document.addEventListener("scroll", (e) => {
  const scrollY = Math.round(window.scrollY);
  if (scrollY >= 770) {
    animateProgressBar();
  }
  
  if (scrollY >= 0 && scrollY <= home.offsetHeight - 64)
    document.querySelector("#link-home").classList.add("ativo");
  else document.querySelector("#link-home").classList.remove("ativo");

  if (scrollY > home.offsetHeight - 64 && scrollY <= portfolio.offsetTop - 64)
    document.querySelector("#link-sobre").classList.add("ativo");
  else document.querySelector("#link-sobre").classList.remove("ativo");

  if (scrollY > portfolio.offsetTop - 64)
    document.querySelector("#link-portfolio").classList.add("ativo");
  else document.querySelector("#link-portfolio").classList.remove("ativo");

  /* if (scrollY > contato.offsetTop - 400)
    document.querySelector("#link-contato").classList.add("ativo");
  else document.querySelector("#link-contato").classList.remove("ativo"); */
});
