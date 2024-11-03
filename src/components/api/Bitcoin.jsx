import React, { useState, useEffect } from "react";
import { fetchBitcoinApi } from "../../services/BitcoinService";

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
    <div className="relative w-96 min-h-10 bg-[#D7D0C8] flex items-center animate-slideIn after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
      <div className="p-px">
        <div className="w-full h-full flex flex-col items-center p-4">
        <h2 className="text-lg font-bold text-center">Valeur du bitcoin:</h2>
          <h3 className="text-lg font-bold">En EUR :</h3>
          <p>1 Bitcoin = {bitcoinData && bitcoinData.EUR.rate} €</p>
          <h3 className="text-lg font-bold">En USD :</h3>
          <p>1 Bitcoin = {bitcoinData && bitcoinData.USD.rate} $</p>
        </div>
      </div>
    </div>
  );
};

export default BitcoinPrice;
