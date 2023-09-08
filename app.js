console.log("Let's get this party started!");

document
  .querySelector("#gifForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const searchTerm = document.querySelector("#searchInput").value;

    const apiKey = "Zm9AN1ivi6ZgmX0uzwW7V8XsdbVYsqeH";
    const apiUrl = "https://api.giphy.com/v1/gifs/search";

    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: searchTerm,
          api_key: apiKey,
        },
      });
      const gifUrl = response.data.data[0].images.fixed_height.url;
      const gifElement = document.createElement("img");
      gifElement.src = gifUrl;
      document.querySelector(".container").appendChild(gifElement);
    } catch (error) {
      console.log(error);
    }
  });

document.querySelector("#removeButton").addEventListener("click", function () {
  const gifs = document.querySelectorAll(".container img");
  gifs.forEach(function (gif) {
    gif.remove();
  });
  document.querySelector("searchButton").addEventListener("click", function () {
    const searchInput = document.querySelector("#searchInput");
    searchInput.value = "";
  });
});
