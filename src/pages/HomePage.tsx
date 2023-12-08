import Categories from "../assets/Sections/Categories/Categories";
import Creators from "../assets/Sections/Creators/Creators";
import Discover from "../assets/Sections/Discover/Discover";
import Hero from "../assets/Sections/Hero/Hero";
import HowItWorks from "../assets/Sections/HowItWorks/HowItWorks";
import MagicMashroom from "../assets/Sections/MagicMashroom/MagicMashroom";
import Subscribe from "../assets/Sections/Subscribe/Subscribe";
import Trending from "../assets/Sections/Trending/Trending";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trending />
      <Creators />
      <Categories />
      <Discover />
      <MagicMashroom />
      <HowItWorks />
      <Subscribe />
    </>
  );
}
