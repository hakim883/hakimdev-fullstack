//package ch.hakimdev.hakimdevbackend.repository;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import ch.hakimdev.hakimdevbackend.model.Jaime;
//import ch.hakimdev.hakimdevbackend.model.Projet;
//import ch.hakimdev.hakimdevbackend.model.User;
//
//
//public interface JaimeRepository extends JpaRepository<Jaime, Long> {
//    Jaime findByProjetAndUtilisateur(Projet projet, User utilisateur);
//}

package ch.hakimdev.hakimdevbackend.repository;

import ch.hakimdev.hakimdevbackend.model.Jaime;
import ch.hakimdev.hakimdevbackend.model.Projet;
import ch.hakimdev.hakimdevbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JaimeRepository extends JpaRepository<Jaime, Long> {

    // Si tu veux garder cette méthode utilitaire existante
    Jaime findByProjetAndUtilisateur(Projet projet, User utilisateur);

    // Méthodes dérivées utilisées dans le controller/service
    boolean existsByProjetIdAndUtilisateurId(Long projetId, Long utilisateurId);

    void deleteByProjetIdAndUtilisateurId(Long projetId, Long utilisateurId);

    int countByProjetId(Long projetId);
}


//public interface JaimeRepository extends JpaRepository<Jaime, Long> {
//boolean existsByProjetIdAndUtilisateurId(Long projetId, Long utilisateurId);
//void deleteByProjetIdAndUtilisateurId(Long projetId, Long utilisateurId);
//int countByProjetId(Long projetId);
//}