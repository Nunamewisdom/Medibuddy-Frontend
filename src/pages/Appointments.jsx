import { useState } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: ""
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.date || !form.location) return;

    if (editingId) {
      setAppointments(
        appointments.map((a) =>
          a.id === editingId ? { ...a, ...form } : a
        )
      );
      setEditingId(null);
    } else {
      setAppointments([
        ...appointments,
        { id: Date.now(), ...form }
      ]);
    }

    setForm({ title: "", date: "", location: "" });
  };

  const handleEdit = (appt) => {
    setForm({
      title: appt.title,
      date: appt.date,
      location: appt.location
    });
    setEditingId(appt.id);
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h1>Appointments</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          name="title"
          placeholder="Appointment Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.title} - {appt.date} - {appt.location}
            <button onClick={() => handleEdit(appt)}>
              Edit
            </button>
            <button onClick={() => handleDelete(appt.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
