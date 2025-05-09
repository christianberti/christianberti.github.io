import React from 'react'

const About = () => {
  return (
    <section id="about" className="px-10 min-h-[90vh] flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 border-b-2 border-blue-500 inline-block">
          Sobre mí
        </h2>
        <p className="mb-4 md:text-lg text-m leading-relaxed">
          Soy <span className="font-semibold">desarrollador web frontend</span> principalmente autodidacta, y actualmente
          estudiando la carrera de <span className="font-semibold">"Analista Programador Universitario"</span> en la
          Universidad Nacional de La Plata.
        </p>
        <p className="mb-4 md:text-lg text-m leading-relaxed">
          Desde que descubrí la programación me enfoqué en aprender a crear interfaces modernas usando tecnologías como
          <span className="font-semibold"> React</span>, y combinando lo técnico con conocimientos en diseño
          para crear experiencias atractivas y funcionales.
        </p>
        <p className="md:text-lg text-m leading-relaxed">
          Me considero una persona <span className="font-semibold">en continuo aprendizaje</span>, siempre
          buscando mejorar mis habilidades y mantenerme al día con las tendencias del desarrollo web.
        </p>
      </div>
    </section>
  )
}

export default About