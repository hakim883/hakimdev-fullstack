//package ch.hakimdev.hakimdevbackend.model;
//
//import java.time.LocalDateTime;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//
//@Entity
//	public class Commentaire {
//	    @Id
//	    @GeneratedValue(strategy = GenerationType.IDENTITY)
//	    private Long id;
//	    private String contenu; 
//
//	    private LocalDateTime dateCreation;
//	    @ManyToOne
//	    @JoinColumn(name = "projet_id")
//	    private Projet projet;
//
//	    @ManyToOne
//	    @JoinColumn(name = "utilisateur_id")
//	    private User utilisateur;
//
//	    
//	    public String getContenu() { return contenu; }
//	    public LocalDateTime getDateCreation() { return dateCreation; }
//	    public Projet getProjet() { return projet; }
//	    public String getUser() { return getUser(); }
//
//	    
//	    public void setContenu(String contenu) { this.contenu = contenu; }
//	    public void setDateCreation(LocalDateTime dateCreation) { this.dateCreation = dateCreation; }
//	    public void setProjet(Projet projet) { this.projet = projet; }
//	    public void setUser(User user) { this.utilisateur = user; }
//
//		
//
//		
//	    
//	}
//
package ch.hakimdev.hakimdevbackend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Commentaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contenu;
    private LocalDateTime dateCreation;

    @ManyToOne
    @JoinColumn(name = "projet_id")
    private Projet projet;

    @ManyToOne
    @JoinColumn(name = "utilisateur_id")
    private User utilisateur;

    // Getters
    public Long getId() { return id; }
    public String getContenu() { return contenu; }
    public LocalDateTime getDateCreation() { return dateCreation; }
    public Projet getProjet() { return projet; }
    public User getUtilisateur() { return utilisateur; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setContenu(String contenu) { this.contenu = contenu; }
    public void setDateCreation(LocalDateTime dateCreation) { this.dateCreation = dateCreation; }
    public void setProjet(Projet projet) { this.projet = projet; }
    public void setUtilisateur(User utilisateur) { this.utilisateur = utilisateur; }
}
