import React, { useEffect } from 'react';
import AOS from 'aos';

import Home from './Home';
import Footer from './Footer';
import Header from './Header';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
