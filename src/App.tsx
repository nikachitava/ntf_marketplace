import Categories from "./assets/Sections/Categories/Categories";
import Creators from "./assets/Sections/Creators/Creators";
import Discover from "./assets/Sections/Discover/Discover";
import Hero from "./assets/Sections/Hero/Hero";
import MagicMashroom from "./assets/Sections/MagicMashroom/MagicMashroom";
import Trending from "./assets/Sections/Trending/Trending";
import Navigation from "./assets/components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Hero />
      <Trending />
      <Creators />
      <Categories />
      <Discover />
      <MagicMashroom />
    </>
  );
}

export default App;
