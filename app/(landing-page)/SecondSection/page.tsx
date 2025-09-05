'use client'

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const tabs = [
  {
    name: "Cadastro",
    title: "Espaço para Cadastro de Novas Empresas",
    feature1: "Formulário se encontra disponível em PDF. Saiba Mais",
    feature2: "Preencher o formulário e enviá-lo para o e-mail. Saiba Mais",
    feature3: "Para iniciar o procedimento descrito. Saiba Mais",
    image: "/images/tab-4.webp",
  },
  {
    name: "Homologações",
    title: "Normas para Homologações",
    feature1: "Documentos necessários para efetuar homologações TRCT. Saiba Mais",
    feature2: "Carta de Preposto ou Procuração. Saiba Mais",
    feature3: "Aviso Prévio ou pedido discriminando. Saiba Mais",
    image: "/images/tab-4.webp",
  },
  {
    name: "Profissionais",
    title: "Banco de Profissionais",
    feature1: "Acesso em tempo real a profissionais. Saiba Mais",
    feature2: "Administrativos, Ajudantes, Apontadores. Saiba Mais",
    feature3: "Acesse a tabela contendo todo o conteúdo de informações. Saiba Mais",
    image: "/images/tab-4.webp",
  },
  {
    name: "Dúvidas",
    title: "Perguntas Mais Frequentes",
    feature1: "Onde cadastro minha empresa. Saiba Mais",
    feature2: "Como tratar de homologações. Saiba Mais",
    feature3: "Como acesso o Banco de Profissionais. Saiba Mais",
    image: "/images/tab-4.webp",
  },
];

const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section
      ref={ref}
      aria-labelledby="convenios-title"
      className="flex flex-col justify-center items-center bg-white p-6 md:py-20"
    >
      {/* Cabeçalho */}
      <div
        style={{
          transform: `translateY(${isInView ? 0 : 100}px)`,
          opacity: isInView ? 1 : 0,
          transition:
            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="w-full border-b pb-10 md:flex md:space-x-20"
      >
        <div className="space-y-6 md:space-y-10 text-center md:text-left">
          <h2
            id="convenios-title"
            className="text-2xl md:text-3xl font-semibold"
          >
            Convênios do Sindicato: Serviços e Benefícios Oferecidos.
          </h2>

          <div
            className="flex items-center justify-center md:justify-start 
            text-lg md:text-xl transition-colors duration-300 
            cursor-pointer hover:text-red-400"
          >
            Empresas Parceiras Sintraconsmonpes
            <ArrowRight className="h-6 w-6 ml-4" />
          </div>
        </div>

        {/* Logos de Empresas */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 md:flex md:space-x-10 items-center justify-center mt-10 md:mt-0"
        >
          {["Estacio", "Fasf", "ICT", "Sesi"].map((logo) => (
            <Image
              key={logo}
              src={`/images/logo/${logo}.png`}
              width={150}
              height={150}
              alt={`Logo ${logo}`}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>

      {/* Título Secundário */}
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-6xl font-bold text-center pt-10 md:py-20 hidden md:block"
      >
        Empresas
      </motion.h3>

      {/* Tabs */}
      <div className="hidden md:flex items-center justify-center flex-wrap gap-6">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            onClick={() => setActiveTab(tab)}
            className={`flex justify-center items-center px-6 py-3 
              transition-all duration-300 cursor-pointer 
              ${
                activeTab === tab
                  ? "border-b-4 border-gray-700 text-gray-900 font-semibold"
                  : "text-gray-500 hover:text-red-400"
              }`}
          >
            <span className="text-xl">{tab.name}</span>
          </div>
        ))}
      </div>

      {/* Conteúdo da Tab */}
      <div className="pt-10 hidden md:block w-full max-w-6xl">
        {activeTab && (
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Caixa de Texto */}
            <div className="flex-1 bg-gray-100 p-8 rounded-md shadow-sm">
              <p className="text-2xl font-semibold py-6 border-b underline">
                {activeTab.title}
              </p>
              <div className="space-y-6 mt-6">
                {[activeTab.feature1, activeTab.feature2, activeTab.feature3].map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-red-400 flex-shrink-0" />
                      <p>{feature}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Caixa de Imagem */}
            <div
              className="flex-1 bg-gradient-to-r from-gray-300 to-gray-100 
              flex items-center justify-center rounded-md shadow-sm p-4"
            >
              <Image
                src={activeTab.image}
                width={500}
                height={500}
                alt={`Imagem relacionada a ${activeTab.name}`}
                className="rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecondSection;
