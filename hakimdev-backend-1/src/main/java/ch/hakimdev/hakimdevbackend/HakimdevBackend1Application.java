package ch.hakimdev.hakimdevbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class HakimdevBackend1Application {
    public static void main(String[] args) {
        SpringApplication.run(HakimdevBackend1Application.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:65028", "https://hakimdev.ch")
                        .allowedMethods("GET", "POST", "PUT", "DELETE");
            }
        };
    }
}