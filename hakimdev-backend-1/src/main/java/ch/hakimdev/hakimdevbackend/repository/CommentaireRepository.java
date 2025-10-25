package ch.hakimdev.hakimdevbackend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import ch.hakimdev.hakimdevbackend.model.Commentaire;


public interface CommentaireRepository extends JpaRepository<Commentaire, Long> {
    List<Commentaire> findByProjetIdOrderByDateCreationDesc(Long projetId);
}