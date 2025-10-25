package ch.hakimdev.hakimdevbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;




@Entity
public class Article {
	@Column(name = "titre_fr") private String titreFr;
	@Column(name = "titre_en") private String titreEn;
	@Column(name = "titre_de") private String titreDe;
	@Column(name = "titre_ar") private String titreAr;

	@Column(name = "resume_fr") private String resumeFr;
	@Column(name = "resume_en") private String resumeEn;
	@Column(name = "resume_de") private String resumeDe;
	@Column(name = "resume_ar") private String resumeAr;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String contenu;
    private String auteur;
    private LocalDateTime datePublication;
    private String image;
    private Integer jour;
    private String mois;
    private String resume;

    // getters & setters
    // Getters and Setters
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

public String getImage() {
    return image;
}
public void setImage(String image) {
    this.image = image;
}
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

// (optionnel mais conseillé si tu les utilises ailleurs)
public Integer getJour() { return jour; }
public void setJour(Integer jour) { this.jour = jour; }

public String getMois() { return mois; }
public void setMois(String mois) { this.mois = mois; }

public String getResume() { return resume; }
public void setResume(String resume) { this.resume = resume; }

}