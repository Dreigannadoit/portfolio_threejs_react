import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Home, About, Projects, Contact, Vlog } from "./pages"
import Navbar from "./components/Navbar"
import { Scroll } from "./test"
import FooterLong from "./components/FooterLong"

const App = () => {
  return (
    <main className="bg-[#E9F1F9] h-full overflow-y-auto overflow-x-hidden">
        <Router>
            
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/vlog" element={<Vlog/>} />
            </Routes>

            <FooterLong/>
        </Router>
    </main>
  )
}

export default App