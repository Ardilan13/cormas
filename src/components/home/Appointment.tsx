import { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({ name: "", email: "", date: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Nueva reserva de cita");
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo: ${form.email}\nFecha de la cita: ${form.date}`
    );
    window.location.href = `mailto:gerencia@cormassas.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-secondary-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Reserva una Cita</h2>
        <p className="mb-8 text-secondary-500">
          Agenda una consulta con nuestro equipo para conocer cómo podemos
          ayudarte.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white text-gray-800 rounded-xl p-8 grid md:grid-cols-3 gap-6 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="md:col-span-3 bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Reservar Cita
          </button>
        </form>
      </div>
    </section>
  );
}
