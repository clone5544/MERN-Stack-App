import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div className="m-4">
          <Card />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

// VIDEO NO: 4   from start
