import Background from "./components/Background";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Background />
      <Navbar />

      {/* First section - full viewport height with transparent bg to show animated background */}
      <div className="relative h-screen w-full bg-transparent z-10">
        {/* Your hero content goes here */}
        <div className="flex items-center justify-center h-full text-white text-4xl">
          Hero Section Content
        </div>
      </div>

      {/* Subsequent sections - with gray background */}
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
