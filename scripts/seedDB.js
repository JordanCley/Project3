const mongoose = require("mongoose");
const db = require("../models");

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/serviceAppDB",
    dbOptions
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

// SEEDING FOR PRODUCTS --------------------------------
const productSeed = [
  {
    imageURL:
      "https://bbimenus.blob.core.windows.net/items/03500/ccapp-03500-2x.png",
    productName: "Bloomin' Onion",
    description:
      "An Outback original! Our special onion is hand-carved, cooked until golden and ready to dip into our spicy signature bloom sauce.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "https://bbimenus.blob.core.windows.net/items/03501/ccapp-03501-2x.png",
    productName: "Cheese Fries",
    description:
      "Topped with melted Monterey Jack, Cheddar and chopped bacon with house-made ranch dressing.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "https://bbimenus.blob.core.windows.net/items/03502/ccapp-03502-2x.png",
    productName: "Kookaburra Wings",
    description:
      "Chicken wings tossed in our secret spices served with our Blue Cheese dressing and celery. Choose mild, medium or hot.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "https://bbimenus.blob.core.windows.net/items/03832/ccapp-03832-2x.png",
    productName: "Alice Springs Chicken Quesadilla",
    description:
      "Stuffed with fresh grilled chicken breast, sautéed mushrooms, bacon, melted cheeses and honey mustard sauce.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "https://bbimenus.blob.core.windows.net/items/03503/ccapp-03503-2x.png",
    productName: "Wood-Fire Grilled Shrimp On The Barbie",
    description:
      "Sprinkled with a special blend of seasonings and wood-fire grilled. Served with grilled artisan bread, garlic herb butter and fresh tomato basil.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "https://bbimenus.blob.core.windows.net/items/03505/ccapp-03505-2x.png",
    productName: "Gold Coast Coconut Shrimp",
    description:
      "Hand-dipped in batter, rolled in coconut and fried golden. Paired with Creole marmalade.",
    price: 8.99,
    menuId: null
  },
  {
    imageURL:
      "https://bbimenus.blob.core.windows.net/items/03539/ccapp-03539-2x.png",
    productName: "Seared Peppered Ahi",
    description:
      "Sashimi-style Tuna seared rare and placed atop an Asian slaw. Served with a creamy ginger-soy sauce.",
    price: 8.99,
    menuId: null
  }
];

// SEEDING FOR ORDERS --------------------------------
const orderSeed = [
  {
    total: 8.50,
    gratuity: 15,
    items: [{
      quantity: 3,
      product: "5e21fedddef4929fbb9c59f8"
    }],
    tax: 9.9,
    grandTotal: 10.61,
    tableNum: "R52J",
    isPaid: false
  },
  {
    total: 10,
    gratuity: 15,
    items: [{
      quantity: 1,
      product: "5e21fedddef4929fbb9c59f9"
    }],
    tax: 9.9,
    grandTotal: 12.49,
    tableNum: "PI94",
    isPaid: false
  },
  {
    total: 9,
    gratuity: 15,
    items: [{
      quantity: 1,
      product: "5e21fedddef4929fbb9c59f9"
    }],
    tax: 9.9,
    grandTotal: 11.24,
    tableNum: "17MR",
    isPaid: false
  }
];

//CODE TO SEED PRODUCTS -------------------------------
db.Product.deleteMany({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " product records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//CODE TO SEED ORDERS -------------------------------
db.Order
  .remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " order records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });