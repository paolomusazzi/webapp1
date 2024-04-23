//Model

package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String LastName;
    private String FirstName;
    private String Address;
    private String Telephone;

    public Person() {

    }

    public Person(Long id, String lastName, String firstName, String address, String telephone) {
        this.id = id;
        LastName = lastName;
        FirstName = firstName;
        Address = address;
        Telephone = telephone;
    }


    public Person(String lastName, String firstName, String address, String telephone) {
        LastName = lastName;
        FirstName = firstName;
        Address = address;
        Telephone = telephone;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getTelephone() {
        return Telephone;
    }

    public void setTelephone(String telephone) {
        Telephone = telephone;
    }
}