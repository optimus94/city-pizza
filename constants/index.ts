import arrowLeft from "../assets/images/arrow_left.png";
import arrowNext from "../assets/images/arrow_next.png";
import bgImage from "../assets/images/background_image.png";
import caretDown from "../assets/images/caret_down.png";
import caretNext from "../assets/images/caret_next.png";
import cartIcon from "../assets/images/cart_icon.png";
import brand from "../assets/images/city_pizza.png";
import brandLogoAlt from "../assets/images/city_pizza_alt.png";
import brandLogo from "../assets/images/city_pizza_logo.png";
import deal_1 from "../assets/images/deal_1.png";
import deal_2 from "../assets/images/deal_2.png";
import trash from "../assets/images/delete.png";
import emptyCart from "../assets/images/empty_cart.png";
import googleIcon from "../assets/images/google_icon.png";
import homeIcon from "../assets/images/home_icon.png";
import mapIcon from "../assets/images/map_icon.png";
import minus from "../assets/images/minus.png";
import navBar from "../assets/images/navigation_bar.png";
import offerBanner from "../assets/images/offer_deal.png";
import pizza1 from "../assets/images/pizza_1.png";
import pizza2 from "../assets/images/pizza_2.png";
import pizza3 from "../assets/images/pizza_3.png";
import pizzaSlice from "../assets/images/pizza_slice.png";
import plus from "../assets/images/plus.png";
import profileIcon from "../assets/images/profile_icon.png";
import secured from "../assets/images/secured.png";

export const images = {
  bgImage,
  brand,
  brandLogo,
  brandLogoAlt,
  offerBanner,
  deal_1,
  deal_2,
  navBar,
  pizza1,
  pizza2,
  pizza3,
  emptyCart
};

export const icons = {
    arrowNext,
    secured,
    googleIcon,
    homeIcon,
    mapIcon,
    cartIcon,
    profileIcon,
    caretNext,
    caretDown,
    pizzaSlice,
    minus,
    plus,
    trash,
    arrowLeft,
}

export const categories = [
  { id: "deals", name: "Deals" },
  { id: "pizza", name: "Pizza" },
  { id: "combo", name: "Combos" },
  { id: "chicken", name: "Chicken" },
];

export const CATEGORY_TITLES: Record<string,string> = {
  deals: "Featured Deals",
  pizza: "Popular Pizza",
  combo: "Best Combo",
  chicken: "Chicken Special"
}

export const deals = [
  {
    id: 1,
    title: "50% Off Weekends",
    description: "50% Off Regular Priced Handcrafted or Pan pizzas, Friday-Sunday. Limited time only! Additions and substitutions extra. Not combinable with any other offers. *Limit 4 pizzas per order.",
    image: deal_1,
    price: "$24.99"
  },
  {
    id: 2,
    title: "Two Medium Pizzas Deal!",
    description: "2 medium pizzas (3-Topping or Select Recipes) for one great price! Online only deal. Upgrade to Signature Recipes for $1 and Premium Recipes for $2.",
    image: deal_2,
    price: "$27.99"
  }
];

export const pizza = [
  {
    id: 1,
    title: "Meat Lover's",
    description: "Pepperoni, sausage, beef, ham, bacon & mozzarella.",
    image: pizza1,
    price: "11.99",
    category: "pizza",
    defaultToppings: ["Pepperoni", "Bacon", "Italian Sausage"],
    sizes: [
      {
        label: '10" Small',
        price: "9.99",
        calories: "170-270 kcal"
      },
      {
        label: '12" Medium',
        price: "11.99",
        calories: "280-330 kcal",
      },
      {
        label: '14" Large',
        price: "13.49",
        calories: "330-470 kcal",
      },
      {
        label: '16" Extra Large',
        price: "14.99",
        calories: "~480+ kcal"
      }
    ]
  },
  {
    id: 2,
    title: "Spicy Veggie Deluxe",
    description: "Single Pizza with Green Peppers, Onions, Tomatoes & Hot Peppers",
    image: pizza2,
    price: "11.99",
    category: "pizza",
    defaultToppings: ["Green Peppers", "Onions", "Tomatoes", "Hot Peppers"],
    sizes: [
      {
        label: '10" Small',
        price: "9.99",
        calories: "190-210 kcal"
      },
      {
        label: '12" Medium',
        price: "11.99",
        calories: "175-220 kcal"
      },
      {
        label: '14" Large',
        price: "13.49",
        calories: "220-260 kcal"
      },
      {
        label: '16" Extra Large',
        price: "14.99",
        calories: "240-280 kcal"
      },
    ]
  },
  {
    id: 3,
    title: "Garden Veggie Pizza",
    description: "Green Peppers, Onions, Tomatoes & Green Olives",
    image: pizza3,
    price: "11.99",
    category: "pizza",
    defaultToppings: ["Green Peppers", "Onions", "Tomatoes", "Green Olives"],
    sizes: [
      {
        label: '10" Small',
        price: "9.99",
        calories: "140-190 kcal"
      },
      {
        label: '12" Medium',
        price: "11.99",
        calories: "180-200 kcal"
      },
      {
        label: '14" Large',
        price: "13.49",
        calories: "210-290 kcal"
      },
      {
        label: '16" Extra Large',
        price: "14.99",
        calories: "300-330 kcal"
      }
    ]
  },
];

export const combo = [
  {
    id: 4,
    title: "Family Combo",
    description: "2 pizzas + garlic bread + drink",
    image: deal_2,
    price: "34.99",
    category: "combo",
  },
];

export const chicken = [
  {
    id: 5,
    title: "Crispy Chicken Wings",
    description: "8 pcs spicy wings",
    image: deal_1,
    price: "12.99",
    category: "chicken",
  },
];

export const categoryDataMap : Record<string, any[]> = {
  deals: deals,
  pizza: pizza,
  combo: combo,
  chicken: chicken
}

export const TOPPINGS = [
  "Pepperoni",
  "Italian Sausage",
  "Bacon",
  "Mushrooms",
  "Onions",
  "Green Peppers",
  "Green Olives",
  "Tomatoes",
  "Hot Peppers"
];

export const CRUSTS = [
  "Regular",
  "Thin",
  "Thick",
  "Stuffed",
  "Whole Wheat",
];

export const CHEESE = [
  "Regular",
  "Extra Cheese",
  "Light",
  "No Cheese",
];

export const SAUCE_OPTIONS = [
  "Easy on Sauce",
  "Extra Sauce",
  "No Sauce",
  "Well Done",
];