import Background from "./components/Background";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />

      <IntroSection />
      <div className="relative w-full min-h-screen bg-[#030303] z-10">
        <div className="p-20 text-white">
          <h2 className="text-2xl mb-4">About Section</h2>
          <p>
            This section has the gray background and will scroll normally...
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
