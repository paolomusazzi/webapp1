package com.example.demo.Model;

import com.example.demo.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Person createPerson(Long id, String lastName, String firstName, String address, String telephone) {
        // Create a new user entity
        Person person = new Person(lastName, firstName, address, telephone);

        // Save the user entity to the database using the UserRepository
        return personRepository.save(person);
    }

    /*public Person getUserByUsername(Long id) {
        // Retrieve a user by their username using the UserRepository
        return personRepository.findAllById(id);
    }
*/
    // You can define additional methods for user management here

}



/*
import com.example.demo.Model.Person;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;




@Service
public class userserviceimpl implements userservice {
    @Autowired
    private PersonRepository personRepository;
    @Override
    public List<Person> findall() {
        return personRepository.findAll();
    }
    @Override
    @Transactional
    public Person save(Person person){
        return personRepository.save(person);

    }

    @Override
    public void delete(Long id) {
        personRepository.deleteById(id);
    }
}
*/