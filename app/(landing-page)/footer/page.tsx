import { Facebook, Globe, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Seção para desktop e tablets */}
      <section className="hidden md:flex flex-col py-20 justify-between bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-32 lg:px-80 space-y-4 md:space-y-0 text-black">
          
          {/* Direitos autorais */}
          <div className="text-center md:text-left text-sm md:text-base">
            ©2025 Sindicato dos Trabalhadores da Indústria, SINTRA. Todos os Direitos Reservados.
          </div>
          
          {/* Ícone de site */}
          <div className="flex items-center justify-center">
            <Globe className="h-6 w-6 text-red-400 transition-transform duration-300 hover:scale-110 cursor-pointer" />
          </div>
          
          {/* Termos e Condições */}
          <div className="text-red-400 text-sm md:text-base hover:text-red-300 transition-colors duration-300 cursor-pointer">
            Termos & Condições
          </div>
          
          {/* Redes sociais */}
          <div className="flex space-x-3">
            <div className="bg-black p-2 rounded-full hover:bg-red-100 transition-colors duration-300 cursor-pointer">
              <Twitter className="h-6 w-6 text-white" />
            </div>
            <div className="bg-black p-2 rounded-full hover:bg-red-100 transition-colors duration-300 cursor-pointer">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div className="bg-black p-2 rounded-full hover:bg-red-100 transition-colors duration-300 cursor-pointer">
              <Facebook className="h-6 w-6 text-white" />
            </div>
          </div>

        </div>
      </section>

      {/* Seção para mobile */}
      <section className="md:hidden flex flex-col py-12 px-6 space-y-6 bg-white text-center text-black">
        <div className="text-sm">
          ©2025 Sindicato dos Trabalhadores da Indústria, SINTRA. Todos os Direitos Reservados.
        </div>
        <div className="flex justify-center space-x-4">
          <Globe className="h-6 w-6 text-red-400 transition-transform duration-300 hover:scale-110 cursor-pointer" />
          <div className="text-red-400 text-sm hover:text-red-300 transition-colors duration-300 cursor-pointer">
            Termos & Condições
          </div>
        </div>
        <div className="flex justify-center space-x-3">
          <div className="bg-black p-2 rounded-full hover:bg-red-100 transition-colors duration-300 cursor-pointer">
            <Twitter className="h-6 w-6 text-white" />
          </div>
          <div className="bg-black p-2 rounded-full hover:bg-red-100 transition-colors duration-300 cursor-pointer">
            <Instagram className="h-6 w-6 text-white" />
          </div>
          <div className="bg-black p-2 rounded-full hover:bg-red-100 transition-colors duration-300 cursor-pointer">
            <Facebook className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
