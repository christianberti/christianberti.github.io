import React from 'react'

export const projects = [
  {
    title: "Estudiar en Informática",
    subtitle: "Plataforma de gestión universitaria",
    description: "Sistema integral para estudiantes de la Facultad de Informática (UNLP) con autenticación, seguimiento de materias, métricas de progreso y gestión de materiales de estudio mediante Supabase.",
    image: "/images/EstudiarEnInformatica.png",
    techs: ["React", "Supabase", "Vanilla CSS", "Lucide React"],
    demoLink: "https://estudiareninformatica.vercel.app/",
    repoLink: "https://github.com/christianberti/dashboard-academico"
  },
  {
    title: "Kanban-Tareas",
    subtitle: "Gestión de flujos y productividad",
    description: "Aplicación de gestión de flujos de trabajo orientada a la productividad. Implementa una lógica de estados para el movimiento de tareas, manipulación dinámica de arreglos y renderizado condicional, logrando una interfaz intuitiva y eficiente.",
    image: "/images/Kanban-Tareas.png",
    techs: ["React", "Tailwind CSS", "LocalStorage"],
    demoLink: "https://kanban-tareas.vercel.app/",
    repoLink: "https://github.com/christianberti/kanban-tareas"
  },
  {
    title: "Movie Verse",
    subtitle: "Catálogo de cine y favoritos",
    description: "Explorador de cine interactivo integrado con la API de TMDB. Incluye paginación dinámica, sistema de filtrado y búsqueda, y una sección de favoritos con persistencia de datos para una navegación fluida por el catálogo cinematográfico.",
    image: "/images/MovieVerse.png",
    techs: ["React", "React Router", "REST API", "Context API"],
    demoLink: "https://movie-verse-teal.vercel.app/",
    repoLink: "https://github.com/christianberti/movie-verse"
  },
  // Agrega más proyectos acá...
];