const hambBanner = document.querySelector(".banner-hamburguer");
const hamburguer = document.querySelector(".hamburguer");
const close1 = document.querySelector(".close");
const close2 = document.querySelector("#close-icon");

//função de abertura do menu
function openMenu() {
  close1.style.display = "flex";
  close2.style.display = "flex";
  hamburguer.style.display = "none";
  hambBanner.style.display = "flex";
}

//função de fechamento do menu
function closeMenu() {
  close1.style.display = "none";
  close2.style.display = "none";
  hamburguer.style.display = "flex";
  hambBanner.style.display = "none";
}

//execução da abertura
hamburguer.addEventListener("click", openMenu);

//execução do fechamento
close1.addEventListener("click", closeMenu);
close2.addEventListener("click", closeMenu);
