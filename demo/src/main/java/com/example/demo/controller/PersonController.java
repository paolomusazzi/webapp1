package com.example.demo.controller;

import com.example.demo.Model.Person;
import com.example.demo.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
    public class PersonController {
        @Autowired
        private PersonRepository personRepository;
        @GetMapping("/users")
        public List<Person> prova() {
            List<Person> persons=personRepository.findAll();
            return persons;
        }
        @PostMapping("/addUsers" )
        public void addUsers(@RequestParam Map<String,String> requestParams){
            String firstName = requestParams.get("firstName");
            String lastName = requestParams.get("lastName");
            String address = requestParams.get("address");
            String telephone = requestParams.get("telephone");
            Person person = new Person(lastName,firstName,address,telephone);
            System.out.println(person);
            personRepository.save(person);
            //return "user added";

        }

        @DeleteMapping("/removeUsers" )
        public void deleteUsers(@RequestParam (name = "id") Long id){

            personRepository.deleteById(id);
    }
    @PostMapping("/updateUsers" )
    public void updateUsers(@RequestParam Map<String,String> requestParams){
        Long id =Long.parseLong( requestParams.get("id"));
        String firstName = requestParams.get("firstName");
        String lastName = requestParams.get("lastName");
        String address = requestParams.get("address");
        String telephone = requestParams.get("telephone");
        Person person = new Person(id, lastName,firstName,address,telephone);
        System.out.println(person);
        personRepository.save(person);
        //return "user added";

    }

}


