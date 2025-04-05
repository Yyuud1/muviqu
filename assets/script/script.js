document.body.classList.add("loading");

window.addEventListener("load", function () {
  setTimeout(() => {
    document.body.classList.add("loaded");
    document.body.classList.remove("loading");
  }, 1500);
});

function openTrailer(videoUrl) {
  const modal = document.getElementById("trailerModal");
  const iframe = document.getElementById("trailerVideo");
  modal.classList.add("active");
  iframe.src = videoUrl + "?autoplay=1";
}

function closeTrailer() {
  const modal = document.getElementById("trailerModal");
  const iframe = document.getElementById("trailerVideo");
  modal.classList.remove("active");
  iframe.src = "";
}
