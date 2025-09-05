"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section
      className="bg-white py-10 md:py-20 space-y-10"
      aria-labelledby="intro-section"
    >
      <div className="container mx-auto text-center max-w-4xl">
        {/* Título Principal */}
        <h1
          id="intro-section"
          className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6"
        >
          Há 79 Anos Construindo o Progresso da Nossa Região!
        </h1>

        {/* Texto informativo */}
        <p className="text-base md:text-lg text-gray-700 mb-10">
          Sindicato dos Trabalhadores nas Indústrias da Construção Civil,
          Imobiliário, Montagens Industriais, Construção Pesada, Mármores,
          entre outros.
        </p>

        {/* Botões */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="bg-black text-white px-6 py-3 rounded-sm transition-all duration-300 cursor-pointer hover:bg-red-400"
            aria-label="Emitir Boleto Sindical"
          >
            Boleto Sindical
          </button>

          <Link href="/Contact">
            <button
              className="bg-gray-600 text-white px-6 py-3 rounded-sm transition-all duration-300 cursor-pointer hover:bg-red-400"
              aria-label="Acesse os Informativos do Sindicato"
            >
              Acesse Informativos
            </button>
          </Link>
        </div>
      </div>

      {/* Galeria de imagens com animações */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:pt-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-6 md:px-0"
        >
          <Image
            src="/images/tab-1.png"
            alt="Registro histórico do Sindicato - Primeiras Décadas"
            width={500}
            height={500}
            className="rounded-md shadow-sm"
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="px-6 md:px-0"
        >
          <Image
            src="/images/tab-2.png"
            alt="Assembleia de trabalhadores realizada pelo Sindicato"
            width={500}
            height={500}
            className="rounded-md shadow-sm"
          />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-6 md:px-0"
        >
          <Image
            src="/images/tab-3.png"
            alt="Depoimento sobre as lutas sindicais"
            width={500}
            height={500}
            className="rounded-md shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
