import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let carousel_div = document.getElementById("carousel");

function carousel() {
  let images = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6529/1316529-h-2497d83b81c1",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4835/1374835-h-b4b9bc8dfef6",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3055/1393055-h-83b300e23001",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7075/1387075-h-298ccbcccfc1",
  ];
  let img = document.createElement("img");
  img.src = images[0];
  carousel_div.append(img);
  let i = 1;
  setInterval(function () {
    img.src = images[i];
    carousel_div.append(img);
    i++;
    if (i === images.length) {
      i = 0;
    }
  }, 3000);
}
carousel();

// oninput="debounce(searchMovies,1000)"
let inputbox = document.getElementById("movie_name");
inputbox.addEventListener("input", function () {
  debounce(searchMovies, 1000);
});

let search_div = document.getElementById("search");
search_div.style.display = "none";
// Fetch from API
async function searchMovies() {
  let loader = document.getElementById("loader");
  loader.style.display = "block";

  let movie_name = document.getElementById("movie_name").value;

  try {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=67379c73&s=${movie_name}&page=1`
    );
    let data = await response.json();
    let actual_data = data.Search;

    // console.log(actual_data);
    append_data(actual_data);
  } catch (err) {
    console.log("error:", err);
  }
}

//append the moive
function append_data(data) {
  let loader = document.getElementById("loader");
  loader.style.display = "none";

  let movie_div = document.getElementById("movies");
  movie_div.innerHTML = null;

  data.forEach(function (el) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.Poster;

    let h4 = document.createElement("h3");
    h4.innerText = el.Title;

    let p = document.createElement("p");
    p.innerText = el.Year;

    div.append(img, h4, p);

    document.getElementById("movies").append(div);
  });
}

let id;
//search with input functionality
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}
