import Logo from "@/assets/img/logo.png";
import { Moon } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex justify-between items-center py-6 px-20 dark:bg-gray-900 transition-colors duration-500">
      <img
        src={Logo}
        alt="Educandário Logo"
        aria-label="Logo"
        className="w-50"
      />
      <div className="flex items-center justify-end gap-20 px-5">
        {["Início", "Sobre", "Contato"].map((text) => (
          <h2
            key={text}
            className="text-3xl font-bold font-poppins cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 text-gray-900 dark:text-white hover:text-emerald-400"
          >
            {text}
          </h2>
        ))}
        <Moon
          onClick={toggleDarkMode}
          className="size-18 text-gray-900 dark:text-white p-3 bg-[#2e7d32] rounded-full cursor-pointer hover:bg-emerald-600 transition-colors duration-300"
        />
      </div>
    </header>
  );
}
