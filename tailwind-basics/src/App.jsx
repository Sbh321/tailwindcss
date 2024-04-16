import LandingNav from "./components/LandingNav";
import MobLandingNav from "./components/MobLandingNav";
import Hero from "./components/Hero";
import Category from "./components/Category";

const App = () => {
  return (
    <main>
      <LandingNav />
      <MobLandingNav />
      <Hero />
      <Category />
    </main>
  );
};

export default App;
