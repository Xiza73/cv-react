import "./App.scss";
import ThemeProvider from "./context/ThemeProvider";
import { MainPage } from "./pages/MainPage";
import ThemeChanger from "./components/ThemeChanger";

function App() {
  return (
    <ThemeProvider>
      <ThemeChanger />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
