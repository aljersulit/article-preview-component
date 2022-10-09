const popupBtn = document.querySelector("#show-popup");
const popup = document.querySelector("#popup");
const share = document.querySelector(".share-icon");

popupBtn.onclick = () => {
  popup.classList.toggle("show");
  popupBtn.classList.toggle("show");
  share.classList.toggle("show");
};

const link = encodeURI(window.location.href);
const msg = encodeURIComponent(
  "Hey everyone! I've just completed the article preview component project"
);

const fb = document.querySelector(".facebook");
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector(".twitter");
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const pinterest = document.querySelector(".pinterest");
pinterest.href = `http://pinterest.com/pin/create/link/?url=${link}`;
