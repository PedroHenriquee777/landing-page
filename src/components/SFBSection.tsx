import Book from "../assets/img/book.png";
import trophy from "../assets/img/trophy.png";
import books from "../assets/img/books.png"
 
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
            className="w-170 h-auto"
          />
        </div>
      </div>
      <div className="w-full bg-background mt-14 rounded-xl p-8 flex justify-center  dark:bg-gray-800 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex items-center gap-32">
          <div className="flex items-center gap-4">
            <img
              src={trophy}
              alt="trophy"
              className="size-34 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold text-black  dark:text-gray-100">
                Excelência comprovada.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={books} 
              alt="books"
              className="size-34 object-contain"
            />
            <p className="font-montserrat text-2xl font-bold text-black  dark:text-gray-100">
              Metodologia moderna e eficaz.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
