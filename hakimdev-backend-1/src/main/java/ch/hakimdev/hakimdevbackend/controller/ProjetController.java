
package ch.hakimdev.hakimdevbackend.controller;
import ch.hakimdev.hakimdevbackend.controller.AuthController;
import ch.hakimdev.hakimdevbackend.model.Commentaire;
import ch.hakimdev.hakimdevbackend.model.Jaime;
import ch.hakimdev.hakimdevbackend.repository.CommentaireRepository;
import ch.hakimdev.hakimdevbackend.repository.JaimeRepository;
import org.springframework.transaction.annotation.Transactional;

import ch.hakimdev.hakimdevbackend.model.Projet;
import ch.hakimdev.hakimdevbackend.model.User;
import ch.hakimdev.hakimdevbackend.repository.ProjetRepository;
import ch.hakimdev.hakimdevbackend.repository.UserRepository;
import ch.hakimdev.hakimdevbackend.service.JaimeService;
import ch.hakimdev.hakimdevbackend.service.UserService;

//import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.security.core.Authentication;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/projets")
@CrossOrigin(origins = {"http://localhost:65028", "https://hakimdev.ch"})
public class ProjetController {
	@Autowired
	private UserService userService;

    @Autowired
    private ProjetRepository projetRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CommentaireRepository commentaireRepository;
    @Autowired
    private JaimeRepository jaimeRepository;

    @PostMapping("/{id}/commentaires")
    @PreAuthorize("isAuthenticated()")
    public Commentaire addCommentaire(@PathVariable Long id,
                                      @RequestBody Map<String, String> body,
                                      Authentication auth) {
        if (auth == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Non authentifié");
        }

        Projet projet = projetRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet inexistant"));

        String email = auth.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Utilisateur non trouvé"));

        Commentaire c = new Commentaire();
        c.setContenu(body.get("contenu"));
        c.setDateCreation(LocalDateTime.now());
        c.setProjet(projet);
        c.setUtilisateur(user); // <- important : setUtilisateur, pas setUser
        return commentaireRepository.save(c);
    }

    
    @Autowired
    private JaimeService jaimeService;

//    @PostMapping("/api/projets/{id}/jaime")
//    public ResponseEntity<?> toggleJaime(@PathVariable Long id, @RequestHeader("Authorization") String token) {
//    	Long userId = userService.getUserIdFromToken(token);
//        jaimeService.toggleJaime(id, userId);
//        return ResponseEntity.ok().build();
//    }
    @PostMapping("/{id}/jaime")
    @PreAuthorize("isAuthenticated()")
    @Transactional
    public ResponseEntity<?> toggleJaime(@PathVariable Long id, Authentication auth) {
        if (auth == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Non authentifié"));
        }

        // récupère l'email depuis Authentication (mis par JwtFilter)
        String email = auth.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Utilisateur non trouvé"));

        Projet projet = projetRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet inexistant"));

        // Vérifie si déjà liké
        boolean already = jaimeRepository.existsByProjetIdAndUtilisateurId(id, user.getId());
        if (already) {
            // supprime le like
            jaimeRepository.deleteByProjetIdAndUtilisateurId(id, user.getId());
        } else {
            // ajoute le like
            Jaime j = new Jaime();
            j.setProjet(projet);
            j.setUser(user);
            j.setDateCreation(java.time.LocalDateTime.now());
            jaimeRepository.save(j);
        }

        int count = jaimeRepository.countByProjetId(id);
        Map<String, Object> resp = new HashMap<>();
        resp.put("liked", !already);
        resp.put("likeCount", count);
        return ResponseEntity.ok(resp);
    }
    

     //Get all projects
    @GetMapping
    public List<Projet> getAllProjets() {
        return projetRepository.findAll();
    }

//    @GetMapping("/api/projets")
//    public List<Projet> getAll(@RequestParam(defaultValue = "fr") String lang) {
//        return projetRepository.findAll();
//    }

    // Get project by ID
    @GetMapping("/{id}")
    public Optional<Projet> getProjetById(@PathVariable Long id) {
        return projetRepository.findById(id);
    }

    // Create new project
    @PostMapping
    public Projet createProjet(@RequestBody Projet projet) {
        projet.setDatePublication(LocalDateTime.now());
        return projetRepository.save(projet);
    }

    // Update project
    @PutMapping("/{id}")
    public Projet updateProjet(@PathVariable Long id, @RequestBody Projet projetDetails) {
        Projet projet = projetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Projet non trouvé avec id : " + id));

       // projet.setTitre(projetDetails.getTitre());
//        projet.setContenu(projetDetails.getContenu());
        projet.setAuteur(projetDetails.getAuteur());
        projet.setImage(projetDetails.getImage());
        projet.setFileUrl(projetDetails.getFileUrl());

        return projetRepository.save(projet);
    }
    
  
    
    

    // Delete project
    @DeleteMapping("/{id}")
    public void deleteProjet(@PathVariable Long id) {
        projetRepository.deleteById(id);
    }

    // Download project file (ZIP)
    @GetMapping("/{id}/download")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Resource> downloadProjet(@PathVariable Long id) {
    	
        Projet projet = projetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Projet non trouvé avec id : " + id));

        try {
            Path file = Paths.get(projet.getFileUrl()); // lien vers le fichier ZIP local ou GitHub raw
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFileName() + "\"")
                        .body(resource);
            } else {
                throw new RuntimeException("Impossible de lire le fichier : " + projet.getFileUrl());
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Erreur de téléchargement", e);
        }
    }
}
