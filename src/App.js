import "./App.css";
import travel_03 from "./assets/travel-03.jpg";
import travel_04 from "./assets/travel-04.jpg";
import travel_05 from "./assets/travel-5.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Destinations" },
    { url: "#", title: "Travel Tips" },
    { url: "#", title: "About" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_04} />
      <Slider
        imageSrc={travel_05}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default App;
