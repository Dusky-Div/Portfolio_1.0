import Background from "./components/Background";
import BioSection from "./components/BioSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />
      <IntroSection />
      <BioSection />
      <TechStack />
      <ProjectSection />
    </div>
  );
}

export default App;
