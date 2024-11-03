import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="z-50 fixed top-0 left-0 w-full min-h-screen bg-[#010080] gras">
      <p className="text-white">Un problème a été détecté et Windows a été arrêté afin de prévenir des dommages à votre ordinateur.</p>
      <p className="text-white">*** STOP: 0x000000ED 0x81A5D8B0, 0x0000006, 0x00000000, 0x00000000</p>
      <p className="text-white">Information technique :</p>
      <p className="text-white">*** disk.sys - adresse de base 81A5D8B0, date de l&apos;horodatage 3d6d6f60 </p>
      <Link to={"/"} className="text-white hover:underline">Comeback to home &apos;click&apos;</Link>
    </div>
  );
}
