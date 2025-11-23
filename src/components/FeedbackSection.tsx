import Ph from "../assets/img/ph.png";
import Kaio from "../assets/img/kaio.png";

export function FeedbackSection() {
  return (
    <section className="w-full py-20 dark:bg-linear-to-b dark:from-gray-900 dark:to-gray-900 transition-colors duration-500  bg-linear-to-b from-[#0F6B38] to-[#66B97A] px-10">
      
      <h1 className="font-introrust text-border text-5xl font-extrabold text-center  dark:text-emerald-300">
        FEEDBACK
      </h1>

      <p className="text-border text-xl font-medium text-center mt-4  dark:text-gray-100">
        Confira os comentários de pessoas que confiam no nosso propósito.
      </p>

      <div className="bg-border dark:bg-white w-full max-w-5xl mx-auto mt-14 rounded-3xl shadow-2xl p-10 border border-gray-300">

        <div className="flex items-start gap-6">
        <img 
            src={Ph} 
            alt="Ph" 
            className="size-20 rounded-full border border-gray-300 object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2  dark:text-emerald-500">
              Pedro Henrique
              <span className="text-orange-400 text-xl">★★★★★</span>
            </h2>

            <p className="text-gray-700 text-lg mt-3 leading-relaxed">
              Como ex-aluno do Educandário João de La Salle, só tenho a agradecer por tudo que vivi nessa escola.
              Foram anos de muito aprendizado, crescimento e boas lembranças. A dedicação dos professores, o cuidado
              com os alunos e o ambiente acolhedor fizeram toda a diferença na minha formação, tanto acadêmica quanto 
              pessoal. Levo comigo todo o conhecimento e os valores que aprendi aqui. Tenho muito orgulho de ter feito 
              parte dessa história!
            </p>
          </div>
        </div>


        <div className="w-full border-t border-gray-300 my-10"></div>

        <div className="flex items-start gap-6">
          <img 
            src={Kaio} 
            alt="kaio" 
            className="size-20 rounded-full border border-gray-300 object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold  dark:text-emerald-500 flex items-center gap-2">
              Kaio Pereira
              <span className="text-orange-400 text-xl">★★★★★</span>
            </h2>

            <p className="text-gray-700 text-lg mt-3 leading-relaxed">
              Estudar no Educandário João de La Salle foi uma das melhores experiências da minha vida. A escola
              sempre me acolheu com muito carinho e me ofereceu uma educação de qualidade, com professores 
              dedicados e uma equipe sempre disposta a ajudar. Aprendi muito, fiz grandes amizades e vivi momentos 
              que guardarei para sempre. Tenho enorme gratidão por tudo o que essa escola representou na minha 
              trajetória.
            </p>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center mt-10 gap-6">
        <button className="text-border text-3xl font-bold hover:opacity-80 dark:text-white">‹</button>

        <span className="text-border text-2xl font-bold  dark:text-white">1</span>

        <button className="text-border text-3xl font-bold hover:opacity-80  dark:text-white">›</button>
      </div>

    </section>
  );
}
