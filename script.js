const menuPages = [
  {
    number: "01 / 04",
    leftTitle: "Signature Coffee",
    leftItems: [
      ["Luna Latte", "Espresso, steamed milk, caramel moon dust", "3.50"],
      ["Velvet Cappuccino", "Classic cappuccino with cocoa finish", "3.25"],
      ["Honey Moon Latte", "Honey, cinnamon, espresso, warm milk", "3.95"],
      ["Espresso Nocturne", "Double espresso with dark chocolate note", "2.50"]
    ],
    rightTitle: "Iced & Cold",
    rightItems: [
      ["Iced Luna", "Cold milk, espresso, vanilla cloud", "3.75"],
      ["Caramel Eclipse", "Iced caramel latte with cream top", "4.25"],
      ["Cold Brew Tonic", "Cold brew, citrus, sparkling tonic", "3.95"],
      ["Mocha on Ice", "Chocolate, espresso, milk, ice", "4.10"]
    ]
  },
  {
    number: "02 / 04",
    leftTitle: "Desserts",
    leftItems: [
      ["Moon Cake Slice", "Chocolate layers, cream, caramel shine", "4.25"],
      ["Berry Cheesecake", "Creamy cheesecake with berry topping", "4.50"],
      ["Almond Croissant", "Buttery pastry with almond cream", "3.25"],
      ["Tiramisu Cup", "Espresso-soaked layers and mascarpone", "3.95"]
    ],
    rightTitle: "Brunch",
    rightItems: [
      ["Luna Toast", "Sourdough, eggs, herbs, labneh", "5.50"],
      ["Avocado Plate", "Avocado, greens, sesame, lemon", "5.25"],
      ["Breakfast Board", "Cheese, jam, eggs, pastry, fruit", "7.75"],
      ["French Toast", "Brioche, berries, cream, maple", "5.95"]
    ]
  },
  {
    number: "03 / 04",
    leftTitle: "Tea & More",
    leftItems: [
      ["Night Jasmine Tea", "Soft floral green tea", "2.75"],
      ["Golden Chai", "Spiced milk tea with cinnamon", "3.25"],
      ["Mint Moon Tea", "Fresh mint and lemon warmth", "2.50"],
      ["Hot Chocolate", "Dark chocolate, milk, whipped cream", "3.50"]
    ],
    rightTitle: "Fresh Drinks",
    rightItems: [
      ["Berry Sparkle", "Mixed berries and sparkling water", "3.95"],
      ["Citrus Cooler", "Orange, lemon, mint, ice", "3.50"],
      ["Peach Iced Tea", "Black tea, peach, lemon", "3.25"],
      ["Water", "Still or sparkling", "1.25"]
    ]
  },
  {
    number: "04 / 04",
    leftTitle: "Seasonal Specials",
    leftItems: [
      ["Rose Moon Latte", "Rose, espresso, milk, soft cream", "4.50"],
      ["Pumpkin Cloud", "Pumpkin spice, espresso, vanilla foam", "4.25"],
      ["Pistachio Dream", "Pistachio cream, espresso, milk", "4.75"],
      ["Date Caramel Latte", "Date syrup, caramel, espresso", "4.40"]
    ],
    rightTitle: "For Sharing",
    rightItems: [
      ["Dessert Plate", "Three mini desserts for two", "8.50"],
      ["Croissant Box", "Four assorted croissants", "9.00"],
      ["Coffee Pair", "Two coffees + one dessert", "7.50"],
      ["Luna Gift Card", "A small moonlit coffee gift", "10+"]
    ]
  }
];

let pageIndex = 0;
const book = document.getElementById("book");
const leftTitle = document.getElementById("leftTitle");
const rightTitle = document.getElementById("rightTitle");
const leftItems = document.getElementById("leftItems");
const rightItems = document.getElementById("rightItems");
const pageNumber = document.getElementById("pageNumber");

function renderItems(container, items) {
  container.innerHTML = items.map(([name, desc, price]) => `
    <li>
      <span>
        <span class="item-name">${name}</span>
        <span class="item-desc">${desc}</span>
      </span>
      <span class="price">${price}</span>
    </li>
  `).join("");
}

function renderPage() {
  const page = menuPages[pageIndex];
  book.classList.add("turning");
  setTimeout(() => {
    leftTitle.textContent = page.leftTitle;
    rightTitle.textContent = page.rightTitle;
    pageNumber.textContent = page.number;
    renderItems(leftItems, page.leftItems);
    renderItems(rightItems, page.rightItems);
    book.classList.remove("turning");
  }, 220);
}

document.getElementById("nextPage").addEventListener("click", () => {
  pageIndex = (pageIndex + 1) % menuPages.length;
  renderPage();
});

document.getElementById("prevPage").addEventListener("click", () => {
  pageIndex = (pageIndex - 1 + menuPages.length) % menuPages.length;
  renderPage();
});

renderPage();
