import React, { useState } from 'react';
import '../src/app.css';
import Header from './components/header';
import Footer from './components/footer';

import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';


function App() {
  const [page, setPage] = useState('about')

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
        return <About />
    }
  }

  return (
    <div className='font-rem flex flex-col min-h-screen'>
      <div className="header-app">
        <Header handlePage={handlePage} page={page}/>
      </div>
      <div className="content flex-grow bg-black text-white">{renderPage()}</div>
      <div className="footer-app">
        <Footer />
      </div>
    </div>
  );
}

export default App;