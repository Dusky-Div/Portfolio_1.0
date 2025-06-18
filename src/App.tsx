import Background from "./components/Background";
import BioSection from "./components/BioSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />

      <IntroSection />
      <BioSection />
      <TechStack />
    </div>
  );
}

export default App;
