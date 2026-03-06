import { motion } from "framer-motion";

export default function HowWeStarted() {
  return (
    <section id="nossa-historia"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f5f7fc 50%, #ffffff 100%)",
      }}
    >
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/historia-crescix.jpg"
              alt="Como surgiu a CrescIX"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#09636B]/10 text-[#09636B] text-sm font-semibold mb-4">
              Nossa História
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#172A3A] mb-6">
              Como a <span className="text-[#09636B]">CrescIX</span> surgiu
            </h2>

            <p className="text-[#172A3A]/70 leading-relaxed mb-4">
              A CrescIX surgiu a partir da iniciativa de estudantes do
              Inatel e da Unifei, que identificaram um problema comum em muitas empresas: informações importantes ficavam presas em áudios e mensagens
              de Telegram ou WhatsApp, dificultando a organização e o uso estratégico desses dados.
            </p>

            <p className="text-[#172A3A]/70 leading-relaxed mb-4">
              Observando essa dificuldade no dia a dia de equipes comerciais e de
              atendimento, nasceu a ideia de criar uma solução capaz de transformar
              áudios e mensagens em dados estruturados automaticamente, facilitando o acesso,
              a organização e a análise dessas informações.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
