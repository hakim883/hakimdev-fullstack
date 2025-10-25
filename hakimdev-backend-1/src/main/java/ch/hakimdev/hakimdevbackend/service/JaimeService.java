package ch.hakimdev.hakimdevbackend.service;

import ch.hakimdev.hakimdevbackend.model.Jaime;
import ch.hakimdev.hakimdevbackend.model.Projet;
import ch.hakimdev.hakimdevbackend.model.User;
import ch.hakimdev.hakimdevbackend.repository.JaimeRepository;
import ch.hakimdev.hakimdevbackend.repository.ProjetRepository;
import ch.hakimdev.hakimdevbackend.repository.UserRepository;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//@Service
//public class JaimeService {
//
//    @Autowired
//    private JaimeRepository jaimeRepository;
//
//    @Autowired
//    private ProjetRepository projetRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Transactional
//    public void toggleJaime(Long projetId, Long userId) {
//        Projet projet = projetRepository.findById(projetId)
//                .orElseThrow(() -> new RuntimeException("Projet non trouvé"));
//        User user = userRepository.findById(userId)
//                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
//
//        // Vérifie si l'utilisateur a déjà liké le projet
//        Jaime existing = jaimeRepository.findByProjetAndUtilisateur(projet, user);
//
//        if (existing != null) {
//            jaimeRepository.delete(existing); // supprime le like
//        } else {
//            Jaime nouveau = new Jaime();
//            nouveau.setProjet(projet);
//            nouveau.setUtilisateur(user);
//            jaimeRepository.save(nouveau); // ajoute le like
//        }
//    }
//}



@Service
public class JaimeService {

    @Autowired
    private JaimeRepository jaimeRepository;

    public Jaime ajouterLike(Projet projet, User utilisateur) {
        if (!jaimeRepository.existsByProjetIdAndUtilisateurId(projet.getId(), utilisateur.getId())) {
            Jaime jaime = new Jaime();
            jaime.setProjet(projet);
            jaime.setUtilisateur(utilisateur);
            jaime.setDateCreation(LocalDateTime.now());
            return jaimeRepository.save(jaime);
        }
        return null; // déjà liké
    }

    public void retirerLike(Long projetId, Long utilisateurId) {
        jaimeRepository.deleteByProjetIdAndUtilisateurId(projetId, utilisateurId);
    }

    public int compterLikes(Long projetId) {
        return jaimeRepository.countByProjetId(projetId);
    }
}
