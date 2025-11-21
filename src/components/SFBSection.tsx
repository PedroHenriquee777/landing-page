import Book from "@/assets/img/book.png";

export function SDBSection() {
  return (
    <section className="px-20 py-17 dark:bg-gray-900 transition-colors duration-500">
      <div className="flex items-center justify-between gap-20">
        <div className="flex-1">
          <h1 className="font-introrust text-background dark:text-white text-6xl py-10 tracking-normal leading-tight">
            O que é o sistema de ensino Farias Brito?
          </h1>
          <div className="font-montserrat text-background dark:text-gray-100 text-3xl font-bold mt-6 tracking-normal leading-tight">
            <h2>
              O Sistema de Ensino Farias Brito é uma estrutura educacional
              reconhecida pela excelência, que une material didático de
              qualidade, tecnologia e metodologia sólida para formar alunos
              completos. Focado em vestibulares e competições acadêmicas, o
              sistema desenvolve tanto o conhecimento quanto as habilidades
              práticas, estimulando o pensamento crítico, a disciplina e o alto
              desempenho.
            </h2>
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <img
            src={Book}
            alt="Livro Sistema Farias Brito"
            aria-label="Livro Sistema Farias Brito"
            className="w-170 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
