import icon1 from "./Images/icon.jpg";
import icon2 from "./Images/icon2.jpg";
import icon3 from "./Images/icon3.jpg";
import icon4 from "./Images/icon4.jpg";
import Boxes from "./components/Boxes";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <section className="top">
        <div className="top-text">
          <h1>Welcome to Brahmos</h1>
          <p>
            Your all Solution at one place.To help you to achieve your target
            with max potential{" "}
          </p>
        </div>
        <div className="top-img">
          <img src={icon1} alt="Loading" />
        </div>
      </section>
      <section className="mid-app">
        <div className="mid-text">
          <h1>Favourites of Student</h1>
        </div>
        <Boxes
          img2={icon2}
          img3={icon3}
          img4={icon4}
          link1={"/me"}
          name1={"Mechanical Engineering"}
          link2={"/ice"}
          name2={"Intrumental And Control Engineering"}
          link3={"/ee"}
          name3={"Electrical Engineering"}
        />
      </section>
      <Footer/>
    </>
  );
}

export default App;
