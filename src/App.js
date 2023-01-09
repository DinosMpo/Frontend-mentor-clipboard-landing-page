import React from 'react';
import './App.css';
import './Mobile.css';
import FirstSection from './component/FirstSection/FirstSection';
import SecondSection from './component/SecondSection/SecondSection';
import ThirdSection from './component/ThirdSection/ThirdSection';
import FourthSection from './component/FourthSection/FourthSection';
import FifthSection from './component/FifthSection/FifthSection';
import Footer from './component/Footer/Footer';

export default function App() {
  return (
    <main className="App">
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Footer/>
    </main>
  )
}