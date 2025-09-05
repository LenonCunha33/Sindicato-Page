"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EighthSection = () => {
  return (
    <footer className="bg-black text-white py-20">
      {/* Topo do Rodapé */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center flex flex-col items-center justify-center pb-20"
      >
        <Image
          src="/images/logo/Sintra2.png"
          alt="Logo da empresa"
          width={120}
          height={120}
          className="w-40 h-auto mx-auto"
        />

        <h2 className="text-3xl md:text-6xl mt-10 md:mt-20 font-semibold leading-snug w-4/5 md:w-2/3">
          Acesse a Experiência do Nosso Banco de Memória
        </h2>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-lg md:text-xl bg-white text-black mt-10 p-4 rounded-lg w-44 items-center justify-center flex cursor-pointer transition hover:bg-red-300"
        >
          Saiba Mais
        </motion.div>
      </motion.div>

      {/* Colunas */}
      <div className="hidden md:grid md:grid-cols-6 gap-16 border-t border-gray-700 pt-20 px-20">
        {/* Logo Extra */}
        <div>
          <Image
            src="/images/logo/Sintra3.png"
            alt="Logo adicional"
            width={70}
            height={70}
            className="cursor-pointer hover:opacity-80 transition"
          />
        </div>

        {/* Coluna 1 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-medium pb-4">Sintraconsmonpes</h3>
          {["Início", "Sindicato", "Diretoria", "Convênios", "Contato"].map(
            (item, i) => (
              <span
                key={i}
                className="text-gray-300 cursor-pointer hover:text-red-400 transition"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-medium pb-4">Sobre Nós</h3>
          {["Empresa", "Liderança", "Clientes", "Diversidade"].map(
            (item, i) => (
              <span
                key={i}
                className="text-gray-300 cursor-pointer hover:text-red-400 transition"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Coluna 3 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-medium pb-4">Serviços</h3>
          {["Associados", "Associados", "Associados", "Associados", "Associados"].map(
            (item, i) => (
              <span
                key={i}
                className="text-gray-300 cursor-pointer hover:text-red-400 transition"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Coluna 4 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-medium pb-4">Recursos</h3>
          {["Central de Ajuda", "Fórum", "Suporte", "Diretoria"].map(
            (item, i) => (
              <span
                key={i}
                className="text-gray-300 cursor-pointer hover:text-red-400 transition"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Coluna 5 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-medium pb-4">Aprender</h3>
          {["Banco de Memória", "História"].map((item, i) => (
            <span
              key={i}
              className="text-gray-300 cursor-pointer hover:text-red-400 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default EighthSection;
