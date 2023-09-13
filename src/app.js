import React, { useState } from 'react';
import './app.css';
import Header from './components/header';
import Footer from './components/footer';

import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';
import Home from './components/home'
import img from './images/manager.png'


function App() {
  const [page, setPage] = useState('')

  const handlePage = (name) => {
    setPage(name)
}


  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />
    }
  }

  return (
    <div className='flex flex-col'>
      <div>
        <Header handlePage={handlePage} page={page} />
      </div>
      {page !== '' ? (
        <div className="pageRender">{renderPage()}</div>
      ) : null}
      <img src={img} alt='sleepyLucy' className='imgBanner' />
      <div className="footer-app">
        <Footer />
      </div>
    </div>
  );
}

export default App;