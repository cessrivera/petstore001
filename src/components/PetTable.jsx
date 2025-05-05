import React from 'react';

function PetTable({ pets, onDelete, onEdit }) {
  return (
    <div>
      <h2 style={{ color: '#716555' }}>Pet List</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {pets.map((pet) => (
          <div
            key={pet.id}
            style={{
              backgroundColor: '#c6c7c1',   // Light gray-green bg
              border: '1px solid #ccc',
              padding: '10px',
              width: '250px',
              borderRadius: '10px',
              color: '#716555'              // Text color for all inside
            }}
          >
            <p style={{ fontWeight: 'bold' }}>{pet.name}</p>
            <p>{pet.species} • {pet.breed} • ${pet.price}</p>
            <img
              src={pet.image}
              alt={pet.name}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '6px',
                marginBottom: '10px'
              }}
            />
            <p><strong>Description:</strong> {pet.description}</p>
            <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <button
                onClick={() => onEdit(pet)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '25px',
                  border: '1px solid #706554',
                  backgroundColor: '#716655',
                  color: 'white',           // override inherited text color
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, transform 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(pet.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '25px',
                  border: '1px solid #716655',
                  backgroundColor: '#716655',
                  color: 'white',           // override inherited text color
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, transform 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetTable;
