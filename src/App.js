import Hero from "./components/hero";
import Kite from "./components/kite";
import Trainer from "./components/trainer";
import Footer from "./components/footer";
import './App.css';
import Lesson from "./components/lesson";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
       <Hero/>
       <h4>Kiteboarding Instructors</h4>
       </section>
       <div className="flex">
       
       <Kite/>
       <Trainer/>
       <Lesson/>
       </div>
       
        <Footer/>
      </header>
    </div>
  );
}

export default App;
