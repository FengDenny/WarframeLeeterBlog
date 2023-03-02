import { Main } from "./MainRoutes";
import Navbar from "./components/util/Navbar/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
