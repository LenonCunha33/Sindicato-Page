"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ThirdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-[#097969]">
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col space-y-10"
      >
        {/* Título */}
        <div className="py-16 md:py-20 flex flex-col items-center space-y-10 text-center">
          <h2 className="text-white text-3xl md:text-6xl font-semibold leading-snug px-6">
            Nossos Horários de Atendimento
          </h2>

          {/* Lista de horários */}
          <div className="md:w-3/4 w-full px-6 md:px-0 space-y-6">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-white/30 py-6 md:py-10 gap-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-red-400 md:h-16 md:w-16 h-10 w-10 flex-shrink-0" />
                <p className="text-white md:text-2xl text-lg font-medium">
                  Sede Sindical de Volta Redonda
                </p>
              </div>
              <p className="text-white md:text-xl text-base md:w-1/2 text-center md:text-left">
                De segunda a sexta-feira de 13 horas às 18 horas
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-white/30 py-6 md:py-10 gap-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-red-400 md:h-16 md:w-16 h-10 w-10 flex-shrink-0" />
                <p className="text-white md:text-2xl text-lg font-medium">
                  Sede Sindical de Resende
                </p>
              </div>
              <p className="text-white md:text-xl text-base md:w-1/2 text-center md:text-left">
                Somente às quintas-feiras de 14 horas às 18 horas
              </p>
            </div>
          </div>

          {/* Botão Saiba Mais */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#000] text-white px-8 py-3 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Saiba Mais
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ThirdSection;
