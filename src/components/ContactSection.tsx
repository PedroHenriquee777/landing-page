import { MapaGoogle } from "../components/MapaGoogle";
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import school from "../assets/img/school.jpg"
import { Footer } from "./footer";

export function ContactSection() {
  return (
    <section className="relative w-full  bg-cover bg-center pt-16 pb-10"
    style={{backgroundImage: `url(${school})` }}>
      <div className="absolute inset-0 bg-border/80 dark:bg-white/80"/>
      
      <div className="relative z-10">
      
      <h1 className="font-introrust text-center text-4xl font-extrabold text-[#1A1A1A]">
        ENTRE EM CONTATO CONOSCO.
      </h1>

      <div className="flex justify-center gap-12 mt-14 flex-wrap px-6">

        <div className="w-83 h-35 bg-[#2E7C45] rounded-3xl shadow-md flex flex-col items-center justify-center text-border  dark:text-white">
          <Phone className="w-27 mb-2" />
          <p className="text-xl font-bold">+55 (88) 3672-1933</p>
        </div>

        <div className="w-83 h-35 bg-[#3AA85E] rounded-3xl shadow-md flex flex-col items-center justify-center text-border dark:text-white">
          <Mail className="w-27 mb-2" />
          <p className="text-xl font-bold">Email@gmail.com</p>
        </div>
        
        <div className="w-83 h-35 bg-[#C4F2C1] rounded-3xl shadow-md flex flex-col items-center justify-center text-black text-center px-4">
          <MapPin className="w-27 mb-2" />
          <p className="text-lg font-semibold leading-tight">
            Rua Quintino Bocaiúva, 855 – Nova Russas – CE
          </p>
        </div>

        </div>

      <div className="w-full flex justify-center mt-16 px-20">
        <MapaGoogle />
      </div>
      <Footer/>
    </div>    
    </section>
  );
}
