import Counter from "./Counter.jsx";
import Todos from "./Todos.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <Counter />
      </header>
      <main>
        <Todos />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
