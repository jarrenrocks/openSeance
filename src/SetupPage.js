import React from 'react';

function SetupPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <p className="text-lg text-white mb-4">
        To begin, please add an Open AI API key. You can get one from <a href="https://openai.com/api/" className="text-blue-500">here</a>.
      </p>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Open AI API Key"
          className="text-black mb-4 p-2"
        />
        <button type="submit" className="bg-white bg-opacity-10 rounded-xl border border-white border-opacity-10 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded backdrop-blur-[50px]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SetupPage;