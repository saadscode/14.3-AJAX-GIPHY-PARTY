console.log("Let's get this party started!");

document
  .querySelector(".gif-form")
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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  });
