const appContainer = document.getElementById("app");
const btnAddIsland = document.getElementById("btnAddIsland");
const btnSave = document.getElementById("btnSave");
const btnLoad = document.getElementById("btnLoad");

const items = [];

function addRandomItem() {
  const itemTypes = ["🏝️", "🛸", "🌴", "👾", "😃"]; // Add more types as needed
  const randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)];

  const itemElement = document.createElement("div");
  itemElement.className = "item";
  itemElement.innerHTML = randomType;

  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  itemElement.style.left = `${randomX}px`;
  itemElement.style.top = `${randomY}px`;

  itemElement.addEventListener("click", () => removeItem(itemElement));

  appContainer.appendChild(itemElement);
  items.push(itemElement);
}


btnAddIsland.addEventListener("click", addRandomItem);

//function to save items

btnSave.addEventListener("click", () => {
  const savedItemsData = items.map((item) => ({
    left: item.style.left,
    top: item.style.top,
    innerHTML: item.innerHTML,
  }));

  localStorage.setItem("savedItems", JSON.stringify(savedItemsData));

  // Clear the canvas and the items array
  items.forEach(item => appContainer.removeChild(item));
  items.length = 0;
});

btnSave.addEventListener("click", btnSave);

    btnLoad.addEventListener("click", loadItems);


    function loadItems() {
        const savedItems = localStorage.getItem("savedItems");
        console.log("Saved items from localStorage:", savedItems); // Log savedItems for debugging
      
        if (savedItems) {
          try {
            const parsedItems = JSON.parse(savedItems);
      
            // Clear existing items
            items.forEach(item => appContainer.removeChild(item));
            items.length = 0;
      
            // Add loaded items
            parsedItems.forEach((itemData) => {
              console.log("Loaded item data:", itemData); // Log loaded item data for debugging
      
              const newItem = document.createElement("div");
              newItem.className = "item";
      
              // Check if the loaded item has the necessary properties
              if (itemData && itemData.left && itemData.top && itemData.innerHTML) {
                newItem.style.left = itemData.left;
                newItem.style.top = itemData.top;
                newItem.innerHTML = itemData.innerHTML;
      
                newItem.addEventListener("click", () => removeItem(newItem));
      
                appContainer.appendChild(newItem);
                items.push(newItem);
              } else {
                console.error("Loaded item data is missing required properties:", itemData);
              }
            });
          } catch (error) {
            console.error("Error parsing or loading items:", error);
          }
        }
      }
      
  
  
