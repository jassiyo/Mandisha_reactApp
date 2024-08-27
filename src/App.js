import Title from './components/title/Title';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Programs from './components/programs/Programs';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testimoials from './components/Testimonials/Testimoials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Mission from './components/Mission/Mission';
import Donation from './components/donation/Donation';
import WhyDonation from './components/whyDonation/WhyDonation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <div className='container'>
        <Title subtitle={"Our Programs"} title={"What we Offer"} />
      <Programs />
      <About />
        <Title subtitle={"Our Mission"} title={"Empowering Communities"} />
      <Mission/>
      <Title subtitle={"Our galary"} title={"Campus Photos"} />
        <Campus/>
      <Title subtitle={"Support Our Cause"} title={"Be a Part of Our Journey"} />
        <Donation/>
      <Title subtitle={"For better cause"} title={"Why Donation?"} />
      <WhyDonation/>
      <Title subtitle={"TESTIMONIALS"} title={"What People Are Saying"} />
      <Testimoials/>
      <Title subtitle={"Contact Us"} title={"Get in Touch"} />
      <Contact />
      <Footer/>
      </div>
    </div>
  );
}

export default App;
