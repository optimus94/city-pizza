import arrowNext from "../assets/images/arrow_next.png";
import bgImage from "../assets/images/background_image.png";
import caretNext from "../assets/images/caret_next.png";
import cartIcon from "../assets/images/cart_icon.png";
import brand from "../assets/images/city_pizza.png";
import brandLogoAlt from "../assets/images/city_pizza_alt.png";
import brandLogo from "../assets/images/city_pizza_logo.png";
import deal_1 from "../assets/images/deal_1.png";
import deal_2 from "../assets/images/deal_2.png";
import googleIcon from "../assets/images/google_icon.png";
import homeIcon from "../assets/images/home_icon.png";
import mapIcon from "../assets/images/map_icon.png";
import navBar from "../assets/images/navigation_bar.png";
import offerBanner from "../assets/images/offer_deal.png";
import pizzaSlice from "../assets/images/pizza_slice.png";
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
  navBar
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
    pizzaSlice
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
]
