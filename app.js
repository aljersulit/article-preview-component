const popupBtn = document.querySelector("#show-popup");
const popup = document.querySelector("#popup");
const share = document.querySelector(".share-icon");

popupBtn.onclick = () => {
    popup.classList.toggle("show");
    popupBtn.classList.toggle("show");
    share.classList.toggle("show");
}