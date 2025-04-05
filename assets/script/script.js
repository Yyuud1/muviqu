document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const itemsPerPage = 4;
  let currentPage = 1;

  function updateCards() {
    const movieCards = document.querySelectorAll(".movie-card");
    const totalPages = Math.ceil(movieCards.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    movieCards.forEach((card, index) => {
      if (index >= start && index < end) {
        card.style.display = "block"; // Explicitly set to block
      } else {
        card.style.display = "none"; // Explicitly set to none
      }
    });

    // Update button state
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage >= totalPages;
  }

  prevBtn?.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateCards();
    }
  });

  nextBtn?.addEventListener("click", () => {
    const movieCards = document.querySelectorAll(".movie-card");
    const totalPages = Math.ceil(movieCards.length / itemsPerPage);

    if (currentPage < totalPages) {
      currentPage++;
      updateCards();
    }
  });

  // Panggil updateCards di awal
  updateCards();
});

// Loader
document.body.classList.add("loading");

window.addEventListener("load", function () {
  setTimeout(() => {
    document.body.classList.add("loaded");
    document.body.classList.remove("loading");
  }, 1500);
});

// Trailer Modal
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

document.getElementById("trailerModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeTrailer();
  }
});
