
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imgContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    // ✅ Challenge 1: Fetch and Display Dog Images
    function fetchDogImages() {
      fetch(imgUrl)
        .then((response) => response.json())
        .then((data) => {
          data.message.forEach((imageUrl) => {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.style.width = "200px";
            img.style.margin = "10px";
            imgContainer.appendChild(img);
          });
        })
        .catch((error) => console.error("Error fetching dog images:", error));
    }
  
    // ✅ Challenge 2: Fetch and Display Dog Breeds
    function fetchDogBreeds() {
      fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => {
          const breeds = Object.keys(data.message);
          renderBreeds(breeds);
        })
        .catch((error) => console.error("Error fetching dog breeds:", error));
    }
  
    // Function to Render Breeds in the List
    function renderBreeds(breeds) {
      breedList.innerHTML = ""; // Clear previous breeds
      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        li.style.cursor = "pointer";
  
        // ✅ Challenge 3: Change Text Color on Click
        li.addEventListener("click", () => {
          li.style.color = "blue";
        });
  
        breedList.appendChild(li);
      });
    }
  
    // ✅ Challenge 4: Filter Breeds by First Letter
    function filterBreeds(letter) {
      fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => {
          const allBreeds = Object.keys(data.message);
          const filteredBreeds = allBreeds.filter((breed) =>
            breed.startsWith(letter)
          );
          renderBreeds(filteredBreeds);
        })
        .catch((error) => console.error("Error filtering dog breeds:", error));
    }
  
    // Event Listener for Dropdown Selection
    breedDropdown.addEventListener("change", (event) => {
      filterBreeds(event.target.value);
    });
  
    // ✅ Run Functions on Page Load
    fetchDogImages();
    fetchDogBreeds();
  });
  