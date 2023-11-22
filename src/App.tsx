import Categories from "./assets/Sections/Categories/Categories";
import Creators from "./assets/Sections/Creators/Creators";
import Hero from "./assets/Sections/Hero/Hero";
import Trending from "./assets/Sections/Trending/Trending";
import Navigation from "./assets/components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Hero />
        <Trending />
        <Creators />
        <Categories />
      </div>
    </>
  );
}

export default App;
