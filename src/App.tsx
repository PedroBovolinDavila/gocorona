import Navbar from './components/Navbar/Navbar';
import Retangle from './components/Retangle/Retangle';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Navbar />
      <Retangle />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Services />
      </main>

      <GlobalStyles />
    </>
  );
}

export default App;
