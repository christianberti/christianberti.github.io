import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_tb3uvgo",  
      "template_iikba9e", 
      formData,
      "nbyfW9wZhVqyN0kUC"   
    ).then(
      () => {
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
        }, 2500);
      },
      (error) => {
        alert("Error al enviar el mensaje", error);
      }
    );
  };

  return (
    <section id="contact" className="min-h-screen p-10 text-center content-center bg-neutral-950 pt-16">
      <h2 className="text-3xl font-bold mb-6">¡Contactame!</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-neutral-900 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-300 text-left">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-800 text-white border border-gray-800"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-left">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-800 text-white border border-gray-800"
            placeholder="tuemail@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-left">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-44 p-3 rounded bg-neutral-800 resize-none text-white border border-gray-800"
            placeholder="Escribe tu mensaje aquí..."
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-900 hover:scale-105 transition"
        >
          Enviar Mensaje
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-neutral-700 w-[250px] sm:w-[300px] h-auto p-3 rounded-lg shadow-lg
    sm:top-2/8 sm:right-6 sm:-translate-y-1/2 sm:left-auto sm:translate-x-0 text-white">
          <div className="p-6 bg-neutral-600 rounded-lg text-center shadow-lg">
            <h2 className="text-lg font-semibold">Mensaje enviado ✅</h2>
            <p className="mt-2 text-sm">Gracias por contactarme, responderé lo antes posible.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;