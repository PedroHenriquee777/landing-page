import { Calendar, UsersRound, GraduationCap, CircleStar } from "lucide-react";

const icons = [
  { label: "Calendar", icon: Calendar, text: "Tradição e compromisso desde 1963." },
  { label: "Users-round", icon: UsersRound, text: "Professores qualificados." },
  { label: "GraduationCap", icon: GraduationCap, text: "Ensino infantil, fundamental e integral." },
  { label: "CircleStar", icon: CircleStar, text: "Parceria com o Sistema de Ensino Farias Brito." },
];

export function AboutSection() {
  return (
    <section className="px-20 py-17 dark:bg-gray-900 transition-colors duration-500">
      <h1 className="font-introrust text-6xl text-[#ffa726] py-10 tracking-normal leading-tight dark:text-amber-400">
        sobre a escola
      </h1>
      <div className="font-montserrat font-bold text-3xl text-black mt-6 tracking-normal leading-tight dark:text-gray-100">
        <h2>
          O Educandário João de La Salle, localizado em Nova Russas, Ceará, foi
          fundado em 2 de fevereiro de 1963 pelo professor José Odete
          Albuquerque. Inspirado nos ideais de São João Batista de La Salle,
          pedagogo e sacerdote francês dedicado à educação de jovens. Ao longo
          dos anos, o Educandário contou com apoio de professores, benfeitores e
          ex-alunos que contribuíram para a continuidade e relevância na
          educação local.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-10 mt-10">
        {icons.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-x-6 py-10 px-11 rounded-3xl bg-[#e9e9e9] dark:bg-gray-800 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
            >
              <IconComponent size={65} className="text-[#0d4f25] dark:text-emerald-400" />
              <span className="font-montserrat text-3xl font-bold text-center flex-1 dark:text-gray-100">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
