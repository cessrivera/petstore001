package com.rivera.petstore;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/rivera/pets")
@CrossOrigin(origins = "*")
public class PetController {


    @Autowired
    private PetRepository petRepository;


    @GetMapping
    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }


    @PostMapping
    public Pet addPet(@RequestBody Pet pet) {
        return petRepository.save(pet);
    }


    @PutMapping("/{id}")
    public Pet updatePet(@PathVariable Long id, @RequestBody Pet updatedPet) {
        Optional<Pet> optionalPet = petRepository.findById(id);


        if (optionalPet.isPresent()) {
            Pet pet = optionalPet.get();
            pet.setName(updatedPet.getName());
            pet.setSpecies(updatedPet.getSpecies());
            pet.setBreed(updatedPet.getBreed());
            pet.setPrice(updatedPet.getPrice());
            pet.setImage(updatedPet.getImage());
            pet.setDescription(updatedPet.getDescription());


            return petRepository.save(pet);
        } else {
            throw new RuntimeException("Pet not found with id " + id);
        }
    }


    @DeleteMapping("/{id}")
    public void deletePet(@PathVariable Long id) {
        petRepository.deleteById(id);
    }
}
