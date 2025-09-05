"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const FourthSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full bg-white px-6 md:px-20 py-16 flex flex-col items-center justify-center">
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-6 text-center max-w-3xl"
      >
        <p className="text-gray-800 text-lg md:text-xl">
          Confira os Serviços e Benefícios Oferecidos Para Você e sua Família.
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Associados
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Veja os documentos necessários para retirar a carteirinha e ter acesso
          aos convênios oferecidos a você e sua família.
        </p>
      </motion.div>

      {/* Bloco 1 */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:flex md:items-center md:justify-between md:space-x-16 mt-16 w-full max-w-6xl"
      >
        <div className="flex-shrink-0">
          <Image
            src="/images/tab-4.webp"
            alt="Atendimento Sindicato"
            width={700}
            height={700}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6 border-b border-gray-200 py-6 mt-6 md:mt-0">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Atendimento
          </h3>
          <p className="text-gray-600 text-base md:text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quae quasi repellendus, magnam reiciendis soluta laboriosam alias
            mollitia.
          </p>
          <div className="flex items-center text-black cursor-pointer transition-colors hover:text-red-400">
            <span className="text-lg font-medium">Leia Mais</span>
            <ArrowRight className="h-6 w-6 ml-3" />
          </div>
        </div>
      </motion.div>

      {/* Bloco 2 */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:flex md:items-center md:justify-between md:space-x-16 mt-16 w-full max-w-6xl"
      >
        <div className="flex-shrink-0">
          <Image
            src="/images/tab-4.webp"
            alt="Carteirinha do Sindicato"
            width={700}
            height={700}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6 border-b border-gray-200 py-6 mt-6 md:mt-0">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Carteirinha do Sindicato
          </h3>
          <p className="text-gray-600 text-base md:text-lg max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quae quasi repellendus, magnam reiciendis soluta laboriosam alias
            mollitia.
          </p>
          <div className="flex items-center text-black cursor-pointer transition-colors hover:text-red-400">
            <span className="text-lg font-medium">Leia Mais</span>
            <ArrowRight className="h-6 w-6 ml-3" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FourthSection;
