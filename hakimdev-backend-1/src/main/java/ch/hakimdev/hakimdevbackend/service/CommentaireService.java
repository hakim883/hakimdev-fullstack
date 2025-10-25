package ch.hakimdev.hakimdevbackend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.hakimdev.hakimdevbackend.model.Commentaire;
import ch.hakimdev.hakimdevbackend.model.Projet;
import ch.hakimdev.hakimdevbackend.model.User;
import ch.hakimdev.hakimdevbackend.repository.CommentaireRepository;

@Service
public class CommentaireService {

    @Autowired
    private CommentaireRepository commentaireRepository;

    public Commentaire ajouterCommentaire(Projet projet, User user, String contenu) {
        Commentaire commentaire = new Commentaire();
        commentaire.setProjet(projet);
        commentaire.setUtilisateur(user);
        commentaire.setContenu(contenu);
        commentaire.setDateCreation(LocalDateTime.now());
        return commentaireRepository.save(commentaire);
    }

    public List<Commentaire> getCommentairesParProjet(Long projetId) {
        return commentaireRepository.findByProjetIdOrderByDateCreationDesc(projetId);
    }
}

