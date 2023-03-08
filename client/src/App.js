import { Main } from "./MainRoutes";
import Navbar from "./components/util/Navbar/Navbar.jsx";
import Footer from "./components/util/Footer/Footer.jsx";

import Disclaimer from "./components/util/Banner/Disclaimer";

function App() {
  return (
    <div>
      <Disclaimer />
      <Navbar />

      <main id='main'>
        <Main />
      </main>

      <Footer copyright={"© 2023 WarfameLeeter.com. All rights reserved."} />
    </div>
  );
}

export default App;
