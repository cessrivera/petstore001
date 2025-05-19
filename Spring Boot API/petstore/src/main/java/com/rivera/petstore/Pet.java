package com.rivera.petstore;


import jakarta.persistence.*;


@Entity
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;
    private String species;
    private String breed;
    private Double price;
    private String image;
    private String description;


    // Constructors
    public Pet() {}


    public Pet(String name, String species, String breed, Double price, String image, String description) {
        this.name = name;
        this.species = species;
        this.breed = breed;
        this.price = price;
        this.image = image;
        this.description = description;
    }


    // Getters
    public Long getId() {
        return id;
    }


    public String getName() {
        return name;
    }


    public String getSpecies() {
        return species;
    }


    public String getBreed() {
        return breed;
    }


    public Double getPrice() {
        return price;
    }


    public String getImage() {
        return image;
    }


    public String getDescription() {
        return description;
    }


    // Setters
    public void setId(Long id) {
        this.id = id;
    }


    public void setName(String name) {
        this.name = name;
    }


    public void setSpecies(String species) {
        this.species = species;
    }


    public void setBreed(String breed) {
        this.breed = breed;
    }


    public void setPrice(Double price) {
        this.price = price;
    }


    public void setImage(String image) {
        this.image = image;
    }


    public void setDescription(String description) {
        this.description = description;
    }
}
