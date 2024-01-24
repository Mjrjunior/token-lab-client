import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/login.page"
import {useAuth} from "./services/authentication.service"
import { HomePage } from "./pages/home/home.page";
import EventRegisterPage from "./pages/event/event.page";



function App() {
    const auth = useAuth();
  
  return (
    <BrowserRouter>
        <Routes>
          {auth.isAuthenticated ? <Route path="/" element={<HomePage />} /> : <Route path="/" element={<LoginPage />} />}
          <Route path="/event" element={<EventRegisterPage/>}></Route>
        </Routes>     
    </BrowserRouter>
  )
}

export default App