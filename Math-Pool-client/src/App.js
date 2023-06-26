import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UserContextProvider } from "./contexts/UserContext";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </div>
  );
}
export default App;
