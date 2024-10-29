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
    <div className="relative w-96 bg-[#D7D0C8] border border-red-500 animate-slideIn after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
      <div className="p-px">
        <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
          <p className="text-white text-base">Valeur du Bitcoin</p>
          <button onClick={fetchBitcoin} className="text-white">x</button>
        </div>
        <div className="w-full h-full flex flex-col items-center p-4">
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
