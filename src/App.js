import logo from './cryptosight-logo.png';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');

  const [selectedCrypto, setSelectedCrypto] = useState('');

  const handleAlgorithmChange = (event) => {
    setSelectedAlgorithm(event.target.textContent);
    console.log(event.target.textContent);
  }
  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.textContent);
    console.log(event.target.textContent);
  }
  

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div class="dropdown">
        <button class = "algotxt">Select an algorithm</button>
        <div class="dropdown-content">
          <button onClick={handleAlgorithmChange} class = "algorithm">first</button>
          <button onClick={handleAlgorithmChange} class = "algorithm">second</button>
          <button onClick={handleAlgorithmChange} class = "algorithm">third</button>
          <button onClick={handleAlgorithmChange} class = "algorithm" >fourth</button>
          <button onClick={handleAlgorithmChange} class = "algorithm" >fifth</button>
        </div>
      </div>
      



    <div class="dropdown">
      <button class="cryptotxt">Crypto Currency</button>
      <div class="dropdown-content">
        <button onClick={handleCryptoChange} class = "btc">Bitcoin</button>
        <button onClick={handleCryptoChange} class = "eth">Ethereum</button>
        <button onClick={handleCryptoChange} class = "tet">Tether</button>
        <button onClick={handleCryptoChange} class = "xrp">XRP</button>
        <button onClick={handleCryptoChange} class = "bnb" >BNB</button>
      </div>
    </div>

    {/* Display insights based on the selected algorithm */}
    {selectedAlgorithm && (
      <div className="insights">
        {selectedAlgorithm === "first" ? (
          <>
            <h2>Insights for {selectedAlgorithm}</h2>
            <p>Correct choice, you will get rich EDIT</p>
          </>
        ) : selectedAlgorithm === "second" ? (
          <>
            <h2>Insights for {selectedAlgorithm}</h2>
            <p>wrong choice EDIT</p>
          </>
        ) : selectedAlgorithm === "third" ? (
          <>
            <h2>Insights for {selectedAlgorithm}</h2>
            <p>wrong choiceEDIT</p>
          </>
        ) : selectedAlgorithm === "fourth" ? (
          <>
            <h2>Insights for {selectedAlgorithm}</h2>
            <p>wrong choiceEDIT</p>
          </>
        ) : selectedAlgorithm === "fifth" ? (
          <>
            <h2>Insights for {selectedAlgorithm}</h2>
            <p>wrong choiceEDIT</p>
          </>
        ) : (
          <>
            <h2>Insights for {selectedAlgorithm}</h2>
            <p>WrongEDIT</p>
          </>
        )}
      </div>
    )}

    {/* Display insights based on the selected crypto */}
    {selectedCrypto && (
      <div className="insights">
        {selectedCrypto === "Bitcoin" ? (
          <>
            <h2>Insights for {selectedCrypto}</h2>
            <p>Correct choice, you will get rich EDIT</p>
          </>
        ) : selectedCrypto === "Ethereum" ? (
          <>
            <h2>Insights for {selectedCrypto}</h2>
            <p>wrong choice EDIT</p>
          </>
        ) : selectedCrypto === "Tether" ? (
          <>
            <h2>Insights for {selectedCrypto}</h2>
            <p>wrong choiceEDIT</p>
          </>
        ) : selectedCrypto === "XRP" ? (
          <>
            <h2>Insights for {selectedCrypto}</h2>
            <p>wrong choiceEDIT</p>
          </>
        ) : selectedCrypto === "BNB" ? (
          <>
            <h2>Insights for {selectedCrypto}</h2>
            <p>wrong choiceEDIT</p>
          </>
        ) : (
          <>
            <h2>Insights for {selectedCrypto}</h2>
            <p>WrongEDIT</p>
          </>
        )}
      </div>
    )}


  </div>
  );
}

export default App;
