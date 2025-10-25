package ch.hakimdev.hakimdevbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.hakimdev.hakimdevbackend.model.Commentaire;
import ch.hakimdev.hakimdevbackend.model.Projet;
import ch.hakimdev.hakimdevbackend.model.User;
import ch.hakimdev.hakimdevbackend.repository.ProjetRepository;
import ch.hakimdev.hakimdevbackend.repository.UserRepository;
import ch.hakimdev.hakimdevbackend.service.CommentaireService;

@RestController
@RequestMapping("/api/commentaire")
public class CommentaireController {

    @Autowired
    private CommentaireService commentaireService;
    @Autowired
    private ProjetRepository projetRepository;  // <-- Ajouter
    @Autowired
    private UserRepository userRepository; 
    @PostMapping("/ajouter")
    public Commentaire ajouterCommentaire(@RequestParam Long projetId,
                                          @RequestParam Long userId,
                                          @RequestParam String contenu) {
        Projet projet = projetRepository.findById(projetId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();
        return commentaireService.ajouterCommentaire(projet, user, contenu);
    }

    @GetMapping("/projet/{projetId}")
    public List<Commentaire> getCommentaires(@PathVariable Long projetId) {
        return commentaireService.getCommentairesParProjet(projetId);
    }
}
