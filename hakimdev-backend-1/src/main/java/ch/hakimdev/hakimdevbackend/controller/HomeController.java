package ch.hakimdev.hakimdevbackend.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:52130", "https://hakimdev.ch"})
public class HomeController {
    @GetMapping("/")
    public Map<String, String> home() {
        return Map.of("message", "Backend HakimDev actif ✅");
    }
}