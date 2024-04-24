import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { SingUpPage } from "./pages/SingUpPage/SingUpPage";
import { LogInPage } from "./pages/LogInPage/LogInPage";
import { FindSailors } from "./pages/FindSeilors/FindSailors";
import { WizardForm } from "./pages/WizardForm/WizardForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<WelcomePage />} />
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/projects" element={<MainPage />} />
        <Route path="/projects/:id" element={<div>Ptoject</div>} />
        <Route path="/sailors" element={<FindSailors />} />
        <Route path="/sailors/:id" element={<div>Sailor</div>} />
        <Route path="/wizard" element={<WizardForm />} />
      </Routes>
    </div>
  );
}

export default App;
