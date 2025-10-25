////package ch.hakimdev.hakimdevbackend.model;
////
////import java.time.LocalDateTime;
////
////import jakarta.persistence.Entity;
////import jakarta.persistence.GeneratedValue;
////import jakarta.persistence.GenerationType;
////import jakarta.persistence.Id;
////import jakarta.persistence.JoinColumn;
////import jakarta.persistence.ManyToOne;
////import jakarta.persistence.Table;
////import jakarta.persistence.UniqueConstraint;
////
////@Entity
////@Table(uniqueConstraints = {
////    @UniqueConstraint(columnNames = {"projet_id", "utilisateur_id"})
////})
////public class Jaime {
////    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////    private Long id;
////
////    @ManyToOne
////    @JoinColumn(name = "projet_id")
////    private Projet projet;
////
////    @ManyToOne
////    @JoinColumn(name = "utilisateur_id")
////    private User utilisateur;
////
////
////	private LocalDateTime dateCreation;
////
////    public void setDateCreation(LocalDateTime dateCreation) { this.dateCreation = dateCreation; }
////    public void setProjet(Projet projet) { this.projet = projet; }
////    public void setUser(User user) { this.utilisateur = user; }
////	
////
////}
//package ch.hakimdev.hakimdevbackend.model;
//
//import jakarta.persistence.*;
//import java.time.LocalDateTime;
//
//@Entity
//@Table(uniqueConstraints = {
//    @UniqueConstraint(columnNames = {"projet_id", "utilisateur_id"})
//})
//public class Jaime {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "projet_id")
//    private Projet projet;
//
//    @ManyToOne
//    @JoinColumn(name = "utilisateur_id")
//    private User utilisateur;
//
//    private LocalDateTime dateCreation;
//
//    // Getters
//    public Long getId() { return id; }
//    public Projet getProjet() { return projet; }
//    public User getUtilisateur() { return utilisateur; }
//    public LocalDateTime getDateCreation() { return dateCreation; }
//
//    // Setters
//    public void setId(Long id) { this.id = id; }
//    public void setProjet(Projet projet) { this.projet = projet; }
//    public void setUtilisateur(User utilisateur) { this.utilisateur = utilisateur; }
//    public void setDateCreation(LocalDateTime dateCreation) { this.dateCreation = dateCreation; }
//}
package ch.hakimdev.hakimdevbackend.model;

import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
@Table(name = "jaime", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"projet_id", "utilisateur_id"})
})
public class Jaime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "projet_id")
    private Projet projet;

    @ManyToOne
    @JoinColumn(name = "utilisateur_id")
    private User utilisateur;

    private LocalDateTime dateCreation;

    // Getter / Setter pour id
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    // Getter / Setter pour projet
    public Projet getProjet() { return projet; }
    public void setProjet(Projet projet) { this.projet = projet; }

    // Getter / Setter pour utilisateur (nommage francais)
    public User getUtilisateur() { return utilisateur; }
    public void setUtilisateur(User utilisateur) { this.utilisateur = utilisateur; }

    // Ajout d'un setter alternatif setUser pour compatibilité avec ton controller
    public void setUser(User user) { this.utilisateur = user; }

    // Ajout d'un getter alternatif getUser si besoin
    public User getUser() { return this.utilisateur; }

    // Getter / Setter pour dateCreation
    public LocalDateTime getDateCreation() { return dateCreation; }
    public void setDateCreation(LocalDateTime dateCreation) { this.dateCreation = dateCreation; }
}
