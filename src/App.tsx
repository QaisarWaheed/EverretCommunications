import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layout/Navbar.tsx";
import OurTalent from "./pages/OurTalent.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import BookTalent from "./pages/BookTalent.tsx";
import { UserProvider } from "./context/UserContext.tsx";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="our-talent" element={<OurTalent />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-talent" element={<BookTalent />} />
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default App;
