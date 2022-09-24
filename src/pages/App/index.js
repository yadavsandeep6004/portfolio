
import './style.css';
import Header from '../../components/Header'
import Poster from '../../components/Poster';
import About from '../../components/About';
import Resume from '../../components/Resume';
import Servics from '../../components/Services';
import Gallerypage from '../../components/Gallerypage';
import Blog from '../../components/Blog';
import PricingPlan from '../../components/PricingPlan';
import Testimonial from '../../components/Testimonial';
import HireMe from '../../components/HireMe';
import Footer from '../../components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {





  return (
    <div className="App">

      <Router>
        <Header />
        {/* <Poster />
        <About />
        <Resume />
        <Servics />
        <Gallerypage />
        <PricingPlan />
        <PricingPlan />
        <Blog />
        <HireMe /> */}
       
       
      <Routes>

        <Route path='/about'  element={<About />}/>
         <Route path='/resume' element={<Resume />}/> 
        <Route path='/ourWork' element={<Servics />}/>
        <Route path='/portfolio' element={<Gallerypage />}/>
        <Route path='/pricing' element={<PricingPlan />}/>
        <Route path='/clients' element={<Testimonial />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<HireMe />}/>
        <Route path='/' element={<Poster />}/> 
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
