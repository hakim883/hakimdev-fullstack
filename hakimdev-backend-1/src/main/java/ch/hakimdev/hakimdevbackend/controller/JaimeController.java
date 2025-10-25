package ch.hakimdev.hakimdevbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.hakimdev.hakimdevbackend.model.Jaime;
import ch.hakimdev.hakimdevbackend.model.Projet;
import ch.hakimdev.hakimdevbackend.model.User;
import ch.hakimdev.hakimdevbackend.repository.ProjetRepository;
import ch.hakimdev.hakimdevbackend.repository.UserRepository;
import ch.hakimdev.hakimdevbackend.service.JaimeService;

@RestController
@RequestMapping("/api/jaime")
public class JaimeController {

    @Autowired
    private JaimeService jaimeService;
    @Autowired
    private ProjetRepository projetRepository;  // <-- Ajouter
    @Autowired
    private UserRepository userRepository;  
    @PostMapping("/ajouter")
    public Jaime ajouterLike(@RequestParam Long projetId, @RequestParam Long userId) {
        // tu devras récupérer Projet et User depuis leur repository
        Projet projet = projetRepository.findById(projetId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();
        return jaimeService.ajouterLike(projet, user);
    }

    @DeleteMapping("/retirer")
    public void retirerLike(@RequestParam Long projetId, @RequestParam Long userId) {
        jaimeService.retirerLike(projetId, userId);
    }

    @GetMapping("/compter")
    public int compterLikes(@RequestParam Long projetId) {
        return jaimeService.compterLikes(projetId);
    }
}

