import { MapaGoogle } from "../components/MapaGoogle";
import phone from "../assets/img/phone.png";
import gmail from "../assets/img/gmail.png";
import gps from "../assets/img/gps.png";
import school from "../assets/img/school.jpg"

export function ContactSection() {
  return (
    <section className="relative w-full  bg-cover bg-center pt-16 pb-10"
    style={{backgroundImage: `url(${school})` }}>
      <div className="absolute inset-0 bg-white/80"/>
      
      <div className="relative z-10">
      
      <h1 className="text-center text-4xl font-extrabold text-[#1A1A1A]">
        ENTRE EM CONTATO CONOSCO.
      </h1>

      <div className="flex justify-center gap-12 mt-14 flex-wrap px-6">

        <div className="w-[330px] h-[140px] bg-[#2E7C45] rounded-3xl shadow-md flex flex-col items-center justify-center text-white">
          <img src={phone} className="w-22 mb-2" />
          <p className="text-xl font-bold">+55 (88) 3672-1933</p>
        </div>

        <div className="w-[330px] h-[140px] bg-[#3AA85E] rounded-3xl shadow-md flex flex-col items-center justify-center text-white">
          <img src={gmail} className="w-22 mb-2" />
          <p className="text-xl font-bold">email@gmail.com</p>
        </div>
        
        <div className="w-[330px] h-[140px] bg-[#C4F2C1] rounded-3xl shadow-md flex flex-col items-center justify-center text-black text-center px-4">
          <img src={gps} className="w-22 mb-2" />
          <p className="text-lg font-semibold leading-tight">
            Rua Quintino Bocaiúva, 855 – Nova Russas – CE
          </p>
        </div>

        </div>

      <div className="w-full flex justify-center mt-16 px-6">
        <MapaGoogle />
      </div>

      <footer className="w-full text-center text-white bg-[#0F6B38] py-6 mt-16 text-sm">
        © 2025 Educandário João de La Salle - All Rights Reserved
      </footer>
    </div>    
    </section>
  );
}
