document.addEventListener("DOMContentLoaded", function () {
  const movieContainer = document.getElementById("movieContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const itemsPerPage = 4;
  let currentPage = 1;

  function renderMovies() {
    movieContainer.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentMovies = movies.slice(start, end);

    currentMovies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "col-md-3 movie-card";
      card.innerHTML = `
        <div class="card mt-3">
          <img height="300" src="${movie.image}" class="card-img-top" alt="${movie.title}" />
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <a href="#" class="btn text-white btn-warning" onclick="openTrailer('${movie.trailer}')">Details</a>
          </div>
        </div>
      `;
      movieContainer.appendChild(card);
    });

    updateButtons();
  }

  function updateButtons() {
    const totalPages = Math.ceil(movies.length / itemsPerPage);
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderMovies();
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(movies.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderMovies();
    }
  });

  renderMovies();
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
