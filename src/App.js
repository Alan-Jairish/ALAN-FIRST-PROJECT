import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Programs from './Component/Programs/Programs';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testimonials from './Component/Testimonials/Testimonials';

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <div className='container'>
      <Title subTitle='Our Program' title='What-We-Offer'/>
    <Programs />
    <About />
    <Title subTitle='Gallery' title='Campus Photos'/>
    <Campus />
    <Title subTitle='TESTIMONIALS' title='What Students Says '/>
    <Testimonials />
    </div>
  
    </div>
  );
}

export default App;
