package ch.hakimdev.hakimdevbackend.repository;

import ch.hakimdev.hakimdevbackend.model.Cour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourRepository extends JpaRepository<Cour, Long> {
}