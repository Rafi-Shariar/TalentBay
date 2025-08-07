import Banner from "./components/Banner";
import FeaturedTaskContainer from "./components/featuredTask/FeaturedTaskContainer";

export default function Home() {
  return (
    <div className="p-2">
      <Banner/>
      <FeaturedTaskContainer/>

    </div>
  );
}
