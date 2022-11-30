import "./App.css";
import Blogs from "./components/Blog";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
    
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Blogs />
    </div>
  );
}

export default App;
