import React, { useState, useEffect } from 'react';
import PetFormModal from './components/PetFormModal';
import PetTable from './components/PetTable';
import { getPets, addPet, deletePet, updatePet } from './services/petService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  const loadPets = async () => {
    try {
      const data = await getPets();
      setPets(data);
      if (data.length === 0) toast.info("No data");
    } catch {
      toast.error("Failed to load pets");
    }
  };

  useEffect(() => {
    loadPets();
  }, []);

  const handleAddPet = async (pet) => {
    try {
      await addPet(pet);
      loadPets();
      toast.success("Pet successfully added");
    } catch {
      toast.error("Failed to add pet");
    }
  };

  const handleDeletePet = async (id) => {
    try {
      await deletePet(id);
      loadPets();
      toast.success("Pet successfully deleted");
    } catch {
      toast.error("Failed to delete pet");
    }
  };

  const handleUpdatePet = async (pet) => {
    try {
      await updatePet(pet);
      loadPets();
      toast.success("Pet successfully updated");
      setSelectedPet(null); // Clear after editing
    } catch {
      toast.error("Failed to update pet");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Pet Store 🐾</h1>

      <PetFormModal
        onAddPet={handleAddPet}
        selectedPet={selectedPet}
        onUpdatePet={handleUpdatePet}
      />

      <PetTable
        pets={pets}
        onDelete={handleDeletePet}
        onEdit={(pet) => setSelectedPet(pet)}
      />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
