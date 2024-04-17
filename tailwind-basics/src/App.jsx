import LandingNav from "./components/LandingNav";
import MobLandingNav from "./components/MobLandingNav";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import FeatureSectionFoods from "./components/FeatureSectionFoods";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import NewsRow from "./components/NewsRow";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/cartContext";
import { useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartContextProvider>
      <main>
        <LandingNav setShowCart={setShowCart} />
        <MobLandingNav setShowCart={setShowCart} />
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <FeatureSectionFoods />
        <Banner />
        <Blogs />
        <NewsRow />
        <Feature />
        <Footer />
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </main>
    </CartContextProvider>
  );
};

export default App;
