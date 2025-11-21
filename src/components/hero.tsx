import Student from "@/assets/img/student.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <main className="flex items-center justify-between px-20 dark:bg-gray-900 transition-colors duration-500">
      <div>
        <h1 className="font-introrust text-7xl tracking-normal leading-tight text-[#0d4f25] dark:text-emerald-300">
          conhecimentos <br /> e valores que <br /> conectam vidas
        </h1>
        <Button className="w-80 h-17 rounded-full font-poppins font-bold text-4xl mt-5 bg-linear-to-r from-[#3ab34a] to-[#81c341] shadow-xl/35 hover:shadow-xl/50 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 dark:bg-gradient-to-r dark:from-emerald-600 dark:to-emerald-400">
          Matrículas
        </Button>
      </div>
      <div className="px-30">
        <img
          src={Student}
          alt="Estudante do Educandário"
          aria-label="Estudante"
          className="w-113 h-full"
        />
      </div>
    </main>
  );
}
