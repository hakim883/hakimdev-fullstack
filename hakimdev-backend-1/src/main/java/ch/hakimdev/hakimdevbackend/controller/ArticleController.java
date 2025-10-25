package ch.hakimdev.hakimdevbackend.controller;

import ch.hakimdev.hakimdevbackend.model.Article;
import ch.hakimdev.hakimdevbackend.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/articles")
@CrossOrigin(origins = {"http://localhost:65028", "https://hakimdev.ch"})
public class ArticleController {

    @Autowired
    private ArticleRepository articleRepository;

   
    @GetMapping("/api/articles")
    public List<Article> getAll(@RequestParam(defaultValue = "fr") String lang) {
        return articleRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Article> getArticleById(@PathVariable Long id) {
        return articleRepository.findById(id);
    }
    @GetMapping
    public List<Article> getAllArticles() {
      return articleRepository.findAll();
    }

    @PostMapping
    public Article createArticle(@RequestBody Article article) {
        article.setDatePublication(LocalDateTime.now());
        return articleRepository.save(article);
    }

    @PutMapping("/{id}")
    public Article updateArticle(@PathVariable Long id, @RequestBody Article articleDetails) {
        Article article = articleRepository.findById(id).orElseThrow(() -> new RuntimeException("Article non trouvé avec id : " + id));
        article.setTitre(articleDetails.getTitre());
        article.setContenu(articleDetails.getContenu());
        article.setAuteur(articleDetails.getAuteur());
        return articleRepository.save(article);
    }

    @DeleteMapping("/{id}")
    public void deleteArticle(@PathVariable Long id) {
        articleRepository.deleteById(id);
    }
}