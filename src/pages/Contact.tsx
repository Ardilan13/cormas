import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Nuevo mensaje desde la web");
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo: ${form.email}\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:gerencia@cormassas.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Contáctanos
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-8 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          ></textarea>

          <button
            type="submit"
            className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition w-full"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
