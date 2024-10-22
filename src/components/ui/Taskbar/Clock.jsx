import { useState, useEffect } from 'react';
import getDate from '../../../utils/getDate';
import speaker from '../../../assets/images/speaker.png';

export default function Clock() {

  const [clock, setClock] = useState(getDate());

  useEffect(() => {
    const objetInterval = setInterval(() => {
      setClock(getDate());
    }, 1000);

    return () => clearInterval(objetInterval);
  }, []);

  return (
    <div className="h-full p-1 border-[3px] border-t-[#808080] border-r-[#fff] border-b-[#fff] border-l-[#808080] flex justify-between items-center">
      <div className="h-full ">
        <img
          src={speaker}
          alt="speaker"
          className="h-full"
        />
      </div>
      <span className="h-full text-base font-base px-3 flex justify-center items-center">
        {clock}
      </span>
    </div>
  );
}
