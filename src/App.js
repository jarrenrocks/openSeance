import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import SetupPage from './SetupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-black flex flex-col justify-center items-center">
          <header className="text-center flex flex-col items-center">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="text-4xl font-bold text-white mb-4">Open Seance</h1>
            <p className="text-lg text-white mb-20">
              Commune with spirits using AI.
            </p>
            <div className="flex justify-center space-x-10">
              <Link to="https://chat.openai.com/g/g-zQwAKuOHi-open-seance-gpt" className="bg-white bg-opacity-10 rounded-xl border border-white border-opacity-10 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded backdrop-blur-[50px]">
                Get Started ➝
              </Link>
              <Link to="https://github.com/jarrenrocks/openSeance" className="bg-white bg-opacity-10 rounded-xl border border-white border-opacity-10 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded backdrop-blur-[50px]">
                View on Github
              </Link>
            </div>
          </header>
        </div>
      }/>
      <Route path="/setup" element={<SetupPage />} />
    </Routes>
  );
}

export default App;
