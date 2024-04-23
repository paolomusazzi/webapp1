package com.example.demo.controller;

import com.example.demo.Model.Greeting;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class Greetings {

    private String base = "Hello, ";
    private int counter=0;

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String pippo, Model model) {
        model.addAttribute("prova", pippo);
        return "prova";
    }
    @GetMapping("/")
    public String home (){
        return "index";
    }

}

