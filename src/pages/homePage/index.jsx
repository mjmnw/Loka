import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer";
import SearchCard from "../../components/SearchCard/SearchCard";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
        <div className="h-60 bg-sky-500"></div>
        <SearchCard />
      </nav>
    </>
  );
}
