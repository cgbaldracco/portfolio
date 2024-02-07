import { ThemeProvider } from './context/theme';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Featured } from './components/Featured';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { lazyLoading } from './utils/lazy-loading';
import { useEffect } from 'react';

function App() {

  const theme = localStorage.getItem('theme');
  theme && document.body.classList.add(theme);

  useEffect(() => {
    lazyLoading();
  });
  
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <About />
      <Featured />
      <Work />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
