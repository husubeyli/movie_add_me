function addMovieInfo() {
  let title = document.querySelector("#movie-name").value.trim();
  let thumbnail = document.querySelector("#thumbnail").value.trim();
  let category = document.querySelector("#category").value;
  let checked = document.querySelector(".checked:checked").value;
  let actors = document.querySelector("#actors").value.trim();
  let rating = document.querySelector("#rating").value;
  let about = document.querySelector("#about").value.trim();

  const movieJson = {
    title,
    thumbnail,
    category,
    checked,
    actors,
    rating,
    about
  };
  setStorage(movieJson);
  toggleModal();
  renderDOM(movies);


  document.querySelector("#movie-name").value =''
  document.querySelector("#thumbnail").value =''
  document.querySelector("#category").value =''
  document.querySelector("#actors").value =''
  document.querySelector("#rating").value =''
  document.querySelector("#about").value =''

}

let movies = getStorage();

function getStorage() {
  let arr = [];
  let storage = window.localStorage.getItem("movies");
  if (storage !== null) {
    arr = JSON.parse(storage);
  }
  return arr;
}

function renderDOM() {
  document.querySelector("#movie-body").innerHTML = "";
  movies.forEach(item => {
    document.querySelector("#movie-body").innerHTML += `
        <div class="col-xs-4 col-sm-2">
          <div class="movie-card m-t-15">
            <div class="image"
              style="background-image: url(${item.thumbnail});">
            </div>
            <div class="content">
              <strong class="dblock text-500 text-normal m-b-5">${item.title}</strong>
              <ul class="ratings">
                <li class="fill"><i class="fas fa-star"></i></li>
                <li class="fill"><i class="fas fa-star"></i></li>
                <li class="fill"><i class="fas fa-star"></i></li>
                <li class="fill"><i class="fas fa-star"></i></li>
                <li class="fill"><i class="fas fa-star"></i></li>
              </ul>
            </div>
          </div>
        </div>
        `;
  document.querySelector('#loader').firstElementChild.remove()
        
  });
}

renderDOM(movies);

function setStorage(value) {
  movies.push(value);
  window.localStorage.setItem("movies", JSON.stringify(movies));
}

function toggleModal() {
  document.querySelector("#new-movie-modal").classList.toggle("active");
}
