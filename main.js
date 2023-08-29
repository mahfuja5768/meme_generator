const generatorBtn = document.querySelector(".meme_generator .generator_btn");
const memeImage = document.querySelector(".meme_generator img");
const memeTitle = document.querySelector(".meme_generator .meme_title");

const updateDetails = (url, title) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      updateDetails(data.url, data.title);
    });
};

generatorBtn.addEventListener("click", generateMeme);
