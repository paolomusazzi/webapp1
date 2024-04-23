package com.example.demo;

import com.example.demo.Model.Person;

import java.util.List;

public interface userservice {

    List<Person> findall();
    Person save(Person person);
    void delete (Long id);
}
