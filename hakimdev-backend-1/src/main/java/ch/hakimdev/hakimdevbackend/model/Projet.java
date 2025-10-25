//package ch.hakimdev.hakimdevbackend.model;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//
//import java.net.URI;
//import java.time.LocalDateTime;
//
//@Entity
//public class Projet {
//	
//
//	
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String auteur;
//    private LocalDateTime datePublication;
//    private String image;
//
//    
//    
//private String titreFr;
//private String titreEn;
//private String titreDe;
//private String titreAr;
//private String resumeFr;
// private String resumeEn;
// private String resumeDe;
// private String resumeAr;
//    
//@Column(columnDefinition = "TEXT")
//private String resumeFr;
//
//@Column(columnDefinition = "TEXT")
//private String resumeEn;
//
//@Column(columnDefinition = "TEXT")
//private String resumeDe;
//
//@Column(columnDefinition = "TEXT")
//private String resumeAr; 
package ch.hakimdev.hakimdevbackend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Projet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String auteur;
    private LocalDateTime datePublication;
    private String image;
    private String fileUrl;

    @Column(columnDefinition = "TEXT")
    private String resumeFr;

    @Column(columnDefinition = "TEXT")
    private String resumeEn;

    @Column(columnDefinition = "TEXT")
    private String resumeDe;

    @Column(columnDefinition = "TEXT")
    private String resumeAr;

    private String titreFr;
    private String titreEn;
    private String titreDe;
    private String titreAr;

    // getters & setters

    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getAuteur() { return auteur; }
    public void setAuteur(String auteur) { this.auteur = auteur; }
    public LocalDateTime getDatePublication() { return datePublication; }
    public void setDatePublication(LocalDateTime datePublication) { this.datePublication = datePublication; }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
   
    public String getFileUrl() { return fileUrl; }
    public void setFileUrl(String fileUrl) { this.fileUrl = fileUrl; }
    
    

public String getTitreFr() { return titreFr; }
public void setTitreFr(String titreFr) { this.titreFr = titreFr; }

public String getTitreEn() { return titreEn; }
public void setTitreEn(String titreEn) { this.titreEn = titreEn; }

public String getTitreDe() { return titreDe; }
public void setTitreDe(String titreDe) { this.titreDe = titreDe; }

public String getTitreAr() { return titreAr; }
public void setTitreAr(String titreAr) { this.titreAr = titreAr; }

public String getResumeFr() { return resumeFr; }
public void setResumeFr(String resumeFr) { this.resumeFr = resumeFr; }

public String getResumeEn() { return resumeEn; }
public void setResumeEn(String resumeEn) { this.resumeEn = resumeEn; }

public String getResumeDe() { return resumeDe; }
public void setResumeDe(String resumeDe) { this.resumeDe = resumeDe; }

public String getResumeAr() { return resumeAr; }
public void setResumeAr(String resumeAr) { this.resumeAr = resumeAr; }





}
