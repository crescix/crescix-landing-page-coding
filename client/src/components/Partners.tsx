import { motion } from "framer-motion";

/**
 * Seção "Parceiros" — destaca o vínculo institucional do CrescIX
 * com o programa de incubação INATEL Startups.
 *
 * Logo PNG mora em /client/public/parceiros/. Por enquanto, só
 * Inatel — UNIFEI entra depois (planejado, sem logo ainda).
 */
export default function Partners() {
  return (
    <section
      id="parceiros"
      className="py-20 lg:py-24 relative overflow-hidden bg-[#0B1622] border-y border-white/5"
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6">
            Parceiros
          </p>

          <div className="flex items-center justify-center mb-8">
            <img
              src={`${import.meta.env.BASE_URL}parceiros/inatel-startups.png`}
              alt="Inatel Startups"
              className="h-12 md:h-16 w-auto"
              loading="lazy"
            />
          </div>

          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Fazemos parte do{" "}
            <strong className="text-white">INATEL Startups</strong>, programa
            de incubação do Instituto Nacional de Telecomunicações
            (INATEL), referência em inovação e tecnologia no Brasil.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
