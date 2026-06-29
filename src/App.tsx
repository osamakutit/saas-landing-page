import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
