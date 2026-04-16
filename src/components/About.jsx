import React from 'react'

const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8 md:p-16 lg:p-20 relative z-10 animate-on-scroll">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 pb-6 border-b border-white/10" style={{ color: 'var(--color-brand-text)' }}>
          Sobre mí
        </h2>

        <div className="space-y-8 text-lg leading-relaxed font-medium" style={{ color: 'var(--color-brand-text-dim)' }}>
          <p>
            Soy <span className="font-bold text-white">desarrollador web frontend</span> principalmente autodidacta, y actualmente
            estudiando la <span className="italic text-white">Licenciatura en Informática</span> en la
            Universidad Nacional de La Plata.
          </p>

          <p>
            Desde que descubrí la programación me enfoqué en aprender a crear interfaces modernas usando tecnologías como
            <span className="font-bold" style={{ color: 'var(--color-brand-accent)' }}> React</span>, combinando lo técnico con sólidos conocimientos en diseño
            para crear experiencias atractivas, fluidas y funcionales.
          </p>

          <p>
            Soy un persona <span className="font-bold text-white border-b border-white/20 pb-0.5">en continuo aprendizaje</span>, siempre
            buscando perfeccionar mis habilidades, reducir la fricción visual y mantenerme al día con las exigencias del desarrollo web moderno.
          </p>
        </div>
      </div>

      {/* Decorative large text behind */}
      <h2 className="absolute -bottom-10 left-0 text-[15vw] font-extrabold text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none">
        FRONTEND
      </h2>
    </section>
  )
}

export default About