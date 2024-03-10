import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Chat from "../pages/Chat";
import Categories from "../pages/Category/Categories";
import FAQ from "../components/FAQ";
import Pregnantwomen from "../pages/Category/Pregnantwomen";
import Childhood from "../pages/Category/Childhood";
import Adulthood from "../pages/Category/Adulthood";
import Middleage from "../pages/Category/Middleage";
import Senioryears from "../pages/Category/Senioryears";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutUs from "../components/AboutUs/AboutUs";
import HeaderFAQ from "../components/FAQ/HeaderFAQ";
import GenAIComponent from "../pages/Chat/Chat1";

const AppRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/chat1" element={<GenAIComponent/>}/>
            <Route path="/FAQ" element={<FAQ/>}></Route>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/childhood" element={<Childhood/>}/>
            <Route path="/adulthood" element={<Adulthood/>}/>
            <Route path="/pregnantwomen" element={<Pregnantwomen/>}/>
            <Route path="/middleage" element={<Middleage/>}/>
            <Route path="/senioryears" element={<Senioryears/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/headerFAQ" element={<HeaderFAQ/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoute