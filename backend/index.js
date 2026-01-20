const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Fake product data
const items = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 1200,
    image: "https://smartbd.com/wp-content/uploads/2024/07/HP-14-ep0204TU-Laptop.jpg"
  },
  {
    id: 2,
    name: "Phone",
    description: "Smartphone with great camera",
    price: 700,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FyhKFiRoCdmrxbS5CDkACBhuak_CQjnhKg&s"
  },
  {
    id: 3,
    name: "Headphone",
    description: "Noise cancelling headphone",
    price: 200,
    image: "https://rukminim2.flixcart.com/fk-p-flap/824/586/image/cc12b8a4642a606f.jpg?q=90"
  }
];

// Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Get single item
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
});
