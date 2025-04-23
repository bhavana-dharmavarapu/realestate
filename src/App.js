import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Parent/Header';
import Hero from './Components/Parent/Hero';
import Tab from './Components/Parent/Tab';
import Card from './Components/Parent/Card';
import Carousel from './Components/Parent/Carousel';
import Accordion from './Components/Parent/Accordion';
import Grid from './Components/Parent/Grid';
import Form from './Components/Parent/Form';
import Table from './Components/Parent/Table';
import CarouselTheme from './Components/Child/CarouselTheme';
import Search from './Components/Child/Search';
import Data from './data.json';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='App'>
            <Header />
            <Hero />
            <Tab />
            <Card />
            <Carousel />
            <Accordion />
            <Grid />
            <Form />
            <CarouselTheme />
            <Search />
          </div>
        } />
        
        
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
