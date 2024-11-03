import { useState, useEffect } from 'react';
import getDate from '../../../utils/getDate';
import speaker from '../../../assets/images/speaker.png';

export default function Clock() {

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit'
  };

  const [clock, setClock] = useState(getDate(options));

  useEffect(() => {
    const objetInterval = setInterval(() => {
      setClock(getDate(options));
    }, 60000);

    return () => clearInterval(objetInterval);
  }, []);

  return (
    <div className="h-full w-full p-1 border-2 border-t-[#808080] border-r-[#fff] border-b-[#fff] border-l-[#808080] flex justify-between items-center">
      <div className="h-full w-25">
        <img
          src={speaker}
          alt="speaker"
          className="h-full w-25"
        />
      </div>
      <span className="h-full text-base font-base px-3 flex justify-center items-center">
        {clock}
      </span>
    </div>
  );
}
