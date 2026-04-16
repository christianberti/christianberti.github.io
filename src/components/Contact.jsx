import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [toast, setToast] = useState({ isOpen: false, type: "", message: "" });
  const [isSending, setIsSending] = useState(false);
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
    setIsSending(true);

    emailjs.send(
      "service_s3kgyi8",
      "template_iikba9e",
      formData,
      { publicKey: "7pRIhwIWwWCOZZc4p" }
    ).then(
      () => {
        setIsSending(false);
        setToast({ isOpen: true, type: 'success', message: '¡Mensaje enviado con éxito!' });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setToast({ isOpen: false, type: '', message: '' });
        }, 4000);
      },
      (error) => {
        setIsSending(false);
        console.error("EmailJS Error:", error);
        if (error.text) console.error("Error Text:", error.text);
        setToast({ isOpen: true, type: 'error', message: 'Error de conexión. Intenta nuevamente.' });
        setTimeout(() => {
          setToast({ isOpen: false, type: '', message: '' });
        }, 4000);
      }
    );
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-xl mx-auto text-center mb-12 animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6" style={{ color: 'var(--color-brand-text)' }}>
          Hablemos
        </h2>
        <p className="font-medium text-lg" style={{ color: 'var(--color-brand-text-dim)' }}>
          ¿Interesado en trabajar juntos? Completa el formulario y te responderé lo más pronto posible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto glass-effect p-8 md:p-10 rounded-3xl animate-on-scroll delay-150 relative z-10">

        <div className="flex flex-col gap-6">
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 peer placeholder-transparent"
              placeholder="Nombre"
              id="name"
              required
            />
            <label htmlFor="name" className="absolute left-5 -top-2.5 text-xs font-semibold px-1 rounded-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs" style={{ backgroundColor: 'var(--color-brand-surface)', color: 'var(--color-brand-text-dim)' }}>
              Nombre
            </label>
          </div>

          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 peer placeholder-transparent"
              placeholder="Email"
              id="email"
              required
            />
            <label htmlFor="email" className="absolute left-5 -top-2.5 text-xs font-semibold px-1 rounded-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs" style={{ backgroundColor: 'var(--color-brand-surface)', color: 'var(--color-brand-text-dim)' }}>
              Email
            </label>
          </div>

          <div className="relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-40 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none peer placeholder-transparent"
              placeholder="Mensaje"
              id="message"
              required
            ></textarea>
            <label htmlFor="message" className="absolute left-5 -top-2.5 text-xs font-semibold px-1 rounded-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs" style={{ backgroundColor: 'var(--color-brand-surface)', color: 'var(--color-brand-text-dim)' }}>
              Mensaje
            </label>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`flex justify-center items-center gap-3 w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all duration-300 ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]'}`}
            style={{ backgroundColor: 'var(--color-brand-accent)' }}
          >
            {isSending ? 'Enviando...' : 'Enviar Mensaje'}
            {!isSending && <FiSend />}
          </button>
        </div>
      </form>

      {/* Modern Toast Notification */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 glass-effect px-6 py-4 rounded-full shadow-2xl transition-all duration-500 z-50 ${toast.isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
        {toast.type === 'success' ? (
          <FiCheckCircle className="text-2xl text-green-400" />
        ) : (
          <div className="flex justify-center items-center w-6 h-6 rounded-full bg-red-500/20 border border-red-500 text-red-400 font-bold text-sm">!</div>
        )}
        <span className="font-semibold text-white">{toast.message}</span>
      </div>

    </section>
  );
};

export default Contact;