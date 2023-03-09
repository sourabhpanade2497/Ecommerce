/* eslint-disable default-case */
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import BasicDetails from "./components/Basic_Details/BasicDetails";
import Categories from "./components/Categories/Catagories";
import Cart from "./components/Cart/Cart";
import DeliveryAddress from "./components/Delivery_Address/DeliveryAddress";
import EmptyOrder from "./components/Empty_Order/EmptyOrder";
import ExchangeReturn from "./components/Exchange_Return/ExchangeReturn";
import FilledCART from "./components/Filled_Cart/FilledCart";
import ManageAddress from "./components/Manage_Address/ManageAddress";
import MyCoupan from "./components/My-Coupan/MyCoupan";
import MyOrder from "./components/MyOrder/MyOrder";
import MyRating from "./components/MyRating/MyRating";
import NewAddress from "./components/New_Address/NewAddress";
import NoWishList from "./components/No_Wishlist/NoWishList";
import Payment from "./components/Payment/Payment";
import ProductPage from "./components/Product_Page/ProductPage";
import Support from "./components/Support/Support";
import Wishlist from "./components/Wishlist/Wishlist";
import { useEffect } from "react";
import Profle from "./components/profile/Profile";
import HeadingTagLandingPage from "./components/HeadingTagLandingPage/HeadingTagLandingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/basic-details":
        title = "";
        metaDescription = "";
        break;
      case "/delivery-address":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/filled-cart":
        title = "";
        metaDescription = "";
        break;
      case "/new-address":
        title = "";
        metaDescription = "";
        break;
      case "/no-wiah-list":
        title = "";
        metaDescription = "";
        break;
      case "/my-coupan":
        title = "";
        metaDescription = "";
        break;
      case "/exchange-return":
        title = "";
        metaDescription = "";
        break;
      case "/support-exchange-submit":
        title = "";
        metaDescription = "";
        break;
      case "/support":
        title = "";
        metaDescription = "";
        break;
      case "/my-rating":
        title = "";
        metaDescription = "";
        break;
      case "/wishlist":
        title = "";
        metaDescription = "";
        break;
      case "/manage-address":
        title = "";
        metaDescription = "";
        break;
      case "/emoty-order":
        title = "";
        metaDescription = "";
        break;
      case "/my-order":
        title = "";
        metaDescription = "";
        break;
      case "/profle":
        title = "";
        metaDescription = "";
        break;
      case "/product-page":
        title = "";
        metaDescription = "";
        break;
      case "/categories":
        title = "";
        metaDescription = "";
        break;
      case "/LandingPage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HeadingTagLandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BasicDetails" element={<BasicDetails />} />
        <Route path="/Catagories" element={<Categories />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/DeliveryAddress" element={<DeliveryAddress />} />
        <Route path="/EmptyOrder" element={<EmptyOrder />} />
        <Route path="/ExchangeReturn" element={<ExchangeReturn />} />
        <Route path="/FilledCart" element={<FilledCART />} />
        <Route path="/ManageAddress" element={<ManageAddress />} />
        <Route path="/MyCoupan" element={<MyCoupan />} />
        <Route path="/MyOrder" element={<MyOrder />} />
        <Route path="/MyRating" element={<MyRating />} />
        <Route path="/NewAddress" element={<NewAddress />} />
        <Route path="/NoWishList" element={<NoWishList />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Profile" element={<Profle />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
