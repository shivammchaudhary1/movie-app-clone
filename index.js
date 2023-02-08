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

let movie_data = [
  {
    name: "Black Panther",
    release_date: "2018",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5184/875184-v",
    IMdb_rating: 7.3,
  },
  {
    name: "Rain or Shine",
    release_date: "2010",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1780/1291780-v-d20f8d106d78",
    IMdb_rating: 6.2,
  },
  {
    name: "She & He",
    release_date: "2022",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5581/1395581-v-f0c1a7d02b91",
    IMdb_rating: 3.2,
  },
  {
    name: "Baaghi 3",
    release_date: "2020",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
    IMdb_rating: "7.1",
  },
  {
    name: "Bahubali 2",
    release_date: "2017",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5085/635085-v",
    IMdb_rating: 9.2,
  },
  {
    name: "Bhoot Police",
    release_date: "2021",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4052/1054052-v-fadd525f4abd",
    IMdb_rating: 5,
  },
  {
    name: "2 AM",
    release_date: "2017",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2456/1282456-v-d59f2acafedc",
    IMdb_rating: 8.4,
  },
  {
    name: "October 10",
    release_date: "2017",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5578/1395578-v-110adb18b4b5",
    IMdb_rating: 3.9,
  },
  {
    name: "Chhichhore",
    release_date: "2019",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
    IMdb_rating: 7.8,
  },
];
localStorage.setItem("movies", JSON.stringify(movie_data));

let movie_div = document.getElementById("movie");

//Appendning the data
function storingdata() {
  document.getElementById("movie").innerHTML = "";

  // loader added start
  let loader_div = document.getElementById("loader");
  loader_div.style.display = "none";
  // loader added end
  for (let i = 0; i < movie_data.length; i++) {
    let card = document.createElement("div");
    let n = document.createElement("h1");
    n.innerText = movie_data[i].name;
    let d = document.createElement("p");
    d.innerText = movie_data[i].release_date;
    let p = document.createElement("img");
    p.src = movie_data[i].poster;
    let r = document.createElement("h5");
    r.innerText = `IMDb Rating : ${movie_data[i].IMdb_rating} / 10`;

    // console.log(n, d, p, r);
    card.append(n, p, d, r);
    document.querySelector("#movie").append(card);
  }
}
// storingdata();   Before Loader

// Sorting Part Start

document.getElementById("sort-lh").addEventListener("click", LowtoHigh);
function LowtoHigh() {
  movie_data.sort(function (a, b) {
    return a.IMdb_rating - b.IMdb_rating;
  });

  storingdata(movie_div);
}

document.getElementById("sort-hl").addEventListener("click", HightoLow);
function HightoLow() {
  movie_data.sort(function (a, b) {
    return b.IMdb_rating - a.IMdb_rating;
  });

  storingdata(movie_div);
}

// Sorting Part End

//Loader Part Start

let getData = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let data = movie_data;

    if (data != null) {
      resolve(data);
    } else {
      reject("Error : Server could not get the data");
    }
  }, 3000);
});

getData.then(function (success) {
  storingdata(success);
});

getData.catch(function (error) {
  console.log(error);
});
