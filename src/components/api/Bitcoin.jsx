import React, { useState, useEffect } from "react";
import { fetchBitcoinApi } from '../../services/BitcoinService';

const BitcoinPrice = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  const fetchBitcoin = async () => {
    const data = await fetchBitcoinApi(); 
    setBitcoinData(data.bpi);
    
  };

  useEffect(() => {
    fetchBitcoin();
  }, []);

  return (
    <div>
      <h2>Valeur du Bitcoin :</h2>
      {bitcoinData && (
        <div>
        <h3>En EUR :</h3>
          <p>1 Bitcoin = {bitcoinData.EUR.rate} €</p>
        <h3>En USD :</h3>
          <p>1 Bitcoin = {bitcoinData.USD.rate} $</p>
        </div>
      )}
    </div>
  );
};

export default BitcoinPrice;
