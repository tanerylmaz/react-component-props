import './App.css';
import Banner from './components/global/Banner';
import Header from './components/head/Header';
import Brands from './components/global/Brands';
import Testimonial from './components/global/Testimonial';
import StateExam from './components/global/StateExam';

function App() {
  return (
    <div >
      <Header />
      <Banner
        title="WE MAKE CLOUD COMPUTING MORE EASIER"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, natus unde? Deserunt nam eligendi aut sint libero provident odit, consequatur at odio modi. Tempora, voluptatum."
        link="https://www.google.com"
        text="EXPLORE OUR FEATURES"/>
        <Brands/>
        <Testimonial name="MARK WIENS"
        title="Microsoft Inc."
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, natus unde? Deserunt nam eligendi aut sint libero provident odit, consequatur at odio modi. Tempora, voluptatum."/>

    </div>
  );
}

export default App;
