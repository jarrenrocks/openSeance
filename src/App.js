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
            <p className="text-lg text-white">
              Commune with spirits using AI.

            </p>
            <p className="text-sm text-white opacity-60 mb-20">
              Building Open Source Grief Tech tools for public use. 
              <br />
              Now in alpha.
            </p>
            <div className="flex items-top space-x-10 h-38">
              <div className='mt-2'>
                <Link to="https://chat.openai.com/g/g-zQwAKuOHi-open-seance-gpt" className="h-fit bg-white bg-opacity-10 rounded-xl border border-white border-opacity-10 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded backdrop-blur-[50px]">
                  Get Started ➝
                </Link>
                <p className="text-xs text-white opacity-60 mt-2">Must have ChatGPT Subscription</p>
              </div>
              <Link to="https://github.com/jarrenrocks/openSeance" className="h-fit bg-white bg-opacity-10 rounded-xl border border-white border-opacity-10 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded backdrop-blur-[50px]">
                View on Github
              </Link>
            </div>
          </header>
          <div className="fixed bottom-0 right-0 m-4 p-4 bg-black bg-opacity-50 rounded-lg text-white flex items-center justify-auto">
          Jarren Rocks. &nbsp;
             Previous Seance AI work featured in &nbsp;
              <Link to="https://www.vox.com/culture/23965584/grief-tech-ghostbots-ai-startups-replika-ethics" className="underline">
                Vox News
              </Link> &nbsp; - &nbsp; <Link to="https://futurism.com/ai-seance" className="underline">
                Futurism
              </Link>
        
      </div>
        </div>
     
      }/>
      <Route path="/setup" element={<SetupPage />} />
    </Routes>
  );
}

export default App;
