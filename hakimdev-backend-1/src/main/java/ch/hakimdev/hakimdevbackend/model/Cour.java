//package ch.hakimdev.hakimdevbackend.model;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import java.time.LocalDateTime;
//
////@Entity
////public class Cour {
////    @Id
//  //  @GeneratedValue(strategy = GenerationType.IDENTITY)
//    //private Long id;
//    //private String titre;
//   // private String contenu;
//    //private String auteur;
//    //private LocalDateTime datePublication;
//    //private String image;
//    //private String video;
//    //private String fichier;
//    //private String description;
//    // Getters and Setters
////    public Long getId() { return id; }
////    public void setId(Long id) { this.id = id; }
////    public String getTitre() { return titre; }
////    public void setTitre(String titre) { this.titre = titre; }
////    public String getContenu() { return contenu; }
////    public void setContenu(String contenu) { this.contenu = contenu; }
////    public String getAuteur() { return auteur; }
////    public void setAuteur(String auteur) { this.auteur = auteur; }
////    public LocalDateTime getDatePublication() { return datePublication; }
////    public void setDatePublication(LocalDateTime datePublication) { this.datePublication = datePublication; }
////    public String getImage() { return image; }
////    public void setImage(String image) { this.image = image; }
////
////    public String getVideo() { return video; }
////    public void setVideo(String video) { this.video = video; }
////
////    public String getFichier() { return fichier; }
////    public void setFichier(String fichier) { this.fichier = fichier; }
////
////    public String getDescription() { return description; }
////    public void setDescription(String description) { this.description = description; }
////}
////@Entity
////public class Cour {
////    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
////    private Long id;
////
////    private String titre;          
////    private String contenu;        
////    private String auteur;
////    private LocalDateTime datePublication;
////    private String image;
////    private String video;
////    private String fichier;       
////    private String description;  
////    
////    private String titreFr;
////    private String titreEn;
////    private String titreDe;
////    private String titreAr;
////
////    private String descriptionFr;
////    private String descriptionEn;
////    private String descriptionDe;
////    private String descriptionAr;
////
////    
////    public String getTitreFr() { return titreFr; }
////    public void setTitreFr(String titreFr) { this.titreFr = titreFr; }
////    public String getTitreEn() { return titreEn; }
////    public void setTitreEn(String titreEn) { this.titreEn = titreEn; }
////    public String getTitreDe() { return titreDe; }
////    public void setTitreDe(String titreDe) { this.titreDe = titreDe; }
////    public String getTitreAr() { return titreAr; }
////    public void setTitreAr(String titreAr) { this.titreAr = titreAr; }
////
////    public String getDescriptionFr() { return descriptionFr; }
////    public void setDescriptionFr(String descriptionFr) { this.descriptionFr = descriptionFr; }
////    public String getDescriptionEn() { return descriptionEn; }
////    public void setDescriptionEn(String descriptionEn) { this.descriptionEn = descriptionEn; }
////    public String getDescriptionDe() { return descriptionDe; }
////    public void setDescriptionDe(String descriptionDe) { this.descriptionDe = descriptionDe; }
////    public String getDescriptionAr() { return descriptionAr; }
////    public void setDescriptionAr(String descriptionAr) { this.descriptionAr = descriptionAr; }
////
////}
//@Entity
//public class Cour {
//    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String titre;          // fallback
//    private String contenu;        // fallback
//    private String auteur;
//    private LocalDateTime datePublication;
//    private String image;
//    private String video;
//    private String fichier;        // ou fileUrl si tu préfères
//    private String description;    // fallback
//
//    // 🔤 Multilingue
//    private String titreFr;
//    private String titreEn;
//    private String titreDe;
//    private String titreAr;
//
//    private String descriptionFr;
//    private String descriptionEn;
//    private String descriptionDe;
//    private String descriptionAr;
//
//    // Optionnel si tu traduis aussi le "contenu"
//    // private String contenuFr, contenuEn, contenuDe, contenuAr;
//
//    // getters & setters (extrait)
//    public String getTitreFr() { return titreFr; }
//    public void setTitreFr(String titreFr) { this.titreFr = titreFr; }
//    public String getTitreEn() { return titreEn; }
//    public void setTitreEn(String titreEn) { this.titreEn = titreEn; }
//    public String getTitreDe() { return titreDe; }
//    public void setTitreDe(String titreDe) { this.titreDe = titreDe; }
//    public String getTitreAr() { return titreAr; }
//    public void setTitreAr(String titreAr) { this.titreAr = titreAr; }
//
//    public String getDescriptionFr() { return descriptionFr; }
//    public void setDescriptionFr(String descriptionFr) { this.descriptionFr = descriptionFr; }
//    public String getDescriptionEn() { return descriptionEn; }
//    public void setDescriptionEn(String descriptionEn) { this.descriptionEn = descriptionEn; }
//    public String getDescriptionDe() { return descriptionDe; }
//    public void setDescriptionDe(String descriptionDe) { this.descriptionDe = descriptionDe; }
//    public String getDescriptionAr() { return descriptionAr; }
//    public void setDescriptionAr(String descriptionAr) { this.descriptionAr = descriptionAr; }
//	public String getTitre() {
//		// TODO Auto-generated method stub
//		return  titre;
//	}
//	public void setTitre(String titre) { this.titre = titre;
//		// TODO Auto-generated method stub
//		
//	}
//	public String getImage() {
//	    return image;
//	}
//	public void setImage(String image) {
//	    this.image = image;
//	}
//	public String getVideo() {
//	    return video;
//	}
//	public void setVideo(String video) {
//	    this.video = video;
//	}
//	public String getContenu() {
//		// TODO Auto-generated method stub
//		return contenu;
//	}
//	public void setContenu(String contenu) { this.contenu =contenu;
//		// TODO Auto-generated method stub
//		
//	}
//
//    // ... conserve tes getters/setters existants (id, titre, contenu, auteur, datePublication, image, video, fichier, description)
//}
//




package ch.hakimdev.hakimdevbackend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Cour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;
    private String contenu;
    private String auteur;
    private LocalDateTime datePublication;
    private String image;
    private String video;
    private String fichier;
    private String description;

    private String titreFr;
    private String titreEn;
    private String titreDe;
    private String titreAr;

    private String descriptionFr;
    private String descriptionEn;
    private String descriptionDe;
    private String descriptionAr;

    // --- GETTERS / SETTERS ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitre() { return titre; }
    public void setTitre(String titre) { this.titre = titre; }

    public String getContenu() { return contenu; }
    public void setContenu(String contenu) { this.contenu = contenu; }

    public String getAuteur() { return auteur; }
    public void setAuteur(String auteur) { this.auteur = auteur; }

    public LocalDateTime getDatePublication() { return datePublication; }
    public void setDatePublication(LocalDateTime datePublication) { this.datePublication = datePublication; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getVideo() { return video; }
    public void setVideo(String video) { this.video = video; }

    public String getFichier() { return fichier; }
    public void setFichier(String fichier) { this.fichier = fichier; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getTitreFr() { return titreFr; }
    public void setTitreFr(String titreFr) { this.titreFr = titreFr; }
    public String getTitreEn() { return titreEn; }
    public void setTitreEn(String titreEn) { this.titreEn = titreEn; }
    public String getTitreDe() { return titreDe; }
    public void setTitreDe(String titreDe) { this.titreDe = titreDe; }
    public String getTitreAr() { return titreAr; }
    public void setTitreAr(String titreAr) { this.titreAr = titreAr; }

    public String getDescriptionFr() { return descriptionFr; }
    public void setDescriptionFr(String descriptionFr) { this.descriptionFr = descriptionFr; }
    public String getDescriptionEn() { return descriptionEn; }
    public void setDescriptionEn(String descriptionEn) { this.descriptionEn = descriptionEn; }
    public String getDescriptionDe() { return descriptionDe; }
    public void setDescriptionDe(String descriptionDe) { this.descriptionDe = descriptionDe; }
    public String getDescriptionAr() { return descriptionAr; }
    public void setDescriptionAr(String descriptionAr) { this.descriptionAr = descriptionAr; }
}
