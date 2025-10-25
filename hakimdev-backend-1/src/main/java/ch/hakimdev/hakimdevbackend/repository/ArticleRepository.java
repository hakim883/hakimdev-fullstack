package ch.hakimdev.hakimdevbackend.repository;

import ch.hakimdev.hakimdevbackend.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
}