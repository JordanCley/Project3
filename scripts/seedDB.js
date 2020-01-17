const mongoose = require("mongoose");
const db = require("../models");

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/serviceAppDB", dbOptions)
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

const productSeed = [
  {
    imageURL: "../client/public/productImages/Bloom.png",
    productName: "Bloomin' Onion",
    description:
      "An Outback original! Our special onion is hand-carved, cooked until golden and ready to dip into our spicy signature bloom sauce.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL: "../client/public/productImages/Cheese-Fries.png",
    productName: "Cheese Fries",
    description:
      "Topped with melted Monterey Jack, Cheddar and chopped bacon with house-made ranch dressing.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL: "../client/public/productImages/Kookabura-Wings(Traditional).png",
    productName: "Kookaburra Wings",
    description:
      "Chicken wings tossed in our secret spices served with our Blue Cheese dressing and celery. Choose mild, medium or hot.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "../client/public/productImages/Alice-Springs-Chicken_Quesadilla.png",
    productName: "Alice Springs Chicken Quesadilla",
    description:
      "Stuffed with fresh grilled chicken breast, sautéed mushrooms, bacon, melted cheeses and honey mustard sauce.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "../client/public/productImages/Wood-Fire-Grilled-Shrimp-On-The-Barbie.png",
    productName: "Wood-Fire Grilled Shrimp On The Barbie",
    description:
      "Sprinkled with a special blend of seasonings and wood-fire grilled. Served with grilled artisan bread, garlic herb butter and fresh tomato basil.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "../client/public/productImages/Gold-Coast-Coconut-Shrimp.png",
    productName: "Gold Coast Coconut Shrimp",
    description:
      "Hand-dipped in batter, rolled in coconut and fried golden. Paired with Creole marmalade.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "../client/public/productImages/Seared-Peppered-Ahi.png",
    productName: "Seared Peppered Ahi",
    description:
      "Sashimi-style Tuna seared rare and placed atop an Asian slaw. Served with a creamy ginger-soy sauce.",
    price: 8.99,
    menuId: null
  }
];

db.Product.deleteMany({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
