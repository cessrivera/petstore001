import React, { useEffect, useState } from 'react';

const initialFormState = {
  id: null,
  name: '',
  species: '',
  breed: '',
  price: '',
  description: '',
  image: ''
};

function PetFormModal({ onAddPet, onUpdatePet, selectedPet }) {
  const [formData, setFormData] = useState(initialFormState);

  // Load selected pet data into form when editing
  useEffect(() => {
    if (selectedPet) {
      setFormData(selectedPet);
    } else {
      setFormData(initialFormState);
    }
  }, [selectedPet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.id) {
      onUpdatePet(formData);
    } else {
      onAddPet(formData);
    }

    setFormData(initialFormState); // Clear form after submit
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      {/* Removed <h2>{formData.id ? 'Edit Pet' : 'Add Pet'}</h2> */}

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="species"
        value={formData.species}
        onChange={handleChange}
        placeholder="Species"
        required
      />
      <input
        type="text"
        name="breed"
        value={formData.breed}
        onChange={handleChange}
        placeholder="Breed"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />

<button
  type="submit"
  style={{
    display: 'block',
    margin: '10px auto 0',  // top = 10px, horizontal = auto (centers), bottom = 0
  }}
>
  {formData.id ? 'Update Pet' : 'Add Pet'}
</button>
    </form>
  );
}

export default PetFormModal;
