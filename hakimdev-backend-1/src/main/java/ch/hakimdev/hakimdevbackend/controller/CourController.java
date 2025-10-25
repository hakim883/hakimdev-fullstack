package ch.hakimdev.hakimdevbackend.controller;

import ch.hakimdev.hakimdevbackend.model.Cour;
import ch.hakimdev.hakimdevbackend.repository.CourRepository;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cours")
@CrossOrigin(origins = {"http://localhost:65028", "https://hakimdev.ch"})
public class CourController {

    @Autowired
    private CourRepository courRepository;

    @GetMapping
    public List<Cour> getAllCours() {
        return courRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Cour> getCourById(@PathVariable Long id) {
        return courRepository.findById(id);
    }

//    @PostMapping
//    public Cour createCour(@RequestBody Cour cour) {
//    	cour.setDatePublication(LocalDateTime.now());
//        return courRepository.save(cour);
//    }

    @PutMapping("/{id}")
    public Cour updateCour(@PathVariable Long id, @RequestBody Cour courDetails) {
    	Cour cour = courRepository.findById(id).orElseThrow(() -> new RuntimeException("Cour non trouvé avec id : " + id));
    	cour.setTitre(courDetails.getTitre());
    	cour.setContenu(courDetails.getContenu());
//    	cour.setAuteur(courDetails.getAuteur());
        return courRepository.save(cour);
    }
    @GetMapping("/{id}/download")
    public ResponseEntity<?> download(@PathVariable Long id, HttpServletRequest request) {
        String auth = request.getHeader("Authorization");
        if (auth == null || !auth.startsWith("Bearer")) {
            return ResponseEntity.status(401).body("Non autorisé");
        }
        // Ici tu renvoies le fichier (ex: PDF ou ZIP)
        return ResponseEntity.ok("Fichier prêt à être téléchargé");
    }

    @DeleteMapping("/{id}")
    public void deleteCour(@PathVariable Long id) {
    	courRepository.deleteById(id);
    }
}