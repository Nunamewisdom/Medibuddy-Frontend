import { useState } from "react";

export default function Medications() {
  const [medications, setMedications] = useState([]);
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    time: ""
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.dosage || !form.time) return;

    if (editingId) {
      setMedications(
        medications.map((m) =>
          m.id === editingId ? { ...m, ...form } : m
        )
      );
      setEditingId(null);
    } else {
      setMedications([
        ...medications,
        { id: Date.now(), ...form }
      ]);
    }

    setForm({ name: "", dosage: "", time: "" });
  };

  const handleEdit = (med) => {
    setForm({
      name: med.name,
      dosage: med.dosage,
      time: med.time
    });
    setEditingId(med.id);
  };

  const handleDelete = (id) => {
    setMedications(medications.filter((m) => m.id !== id));
  };

  return (
    <div>
      <h1>Medications</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Medication Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="dosage"
          placeholder="Dosage"
          value={form.dosage}
          onChange={handleChange}
        />
        <input
          name="time"
          placeholder="Time (e.g. 08:00)"
          value={form.time}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {medications.map((med) => (
          <li key={med.id}>
            {med.name} - {med.dosage} - {med.time}
            <button onClick={() => handleEdit(med)}>
              Edit
            </button>
            <button onClick={() => handleDelete(med.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
