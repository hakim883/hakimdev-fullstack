package ch.hakimdev.hakimdevbackend.repository;

import ch.hakimdev.hakimdevbackend.model.Projet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjetRepository extends JpaRepository<Projet, Long> {
}