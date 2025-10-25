//
//package ch.hakimdev.hakimdevbackend.config;
//
//import ch.hakimdev.hakimdevbackend.filter.JwtFilter;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.HttpStatusEntryPoint;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.List;
//
//@Configuration
//@EnableMethodSecurity
//public class SecurityConfig {
//
//    private final JwtFilter jwtFilter;
//
//    public SecurityConfig(JwtFilter jwtFilter) {
//        this.jwtFilter = jwtFilter;
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//    	
//    	
//    	
//    
//    	
//    	
//        http
//            // CORS (utilise la méthode corsConfigurationSource() définie plus bas)
//            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
//
//            // désactive CSRF car on utilise JWT et API stateless
//            .csrf(csrf -> csrf.disable())
//
//            // règles d'accès
//            .authorizeHttpRequests(auth -> auth
//                // endpoints d'auth (login/register) accessibles sans token
//                .requestMatchers("/api/auth/**").permitAll()
//
//                // autoriser les téléchargements publics si tu veux (optionnel)
//                // .requestMatchers("/api/projets/*/download").permitAll()
//
//                // toutes les autres requêtes nécessitent authentication
//                .anyRequest().authenticated()
//            )
//
//            // pas de session côté serveur
//            .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//
//            // en cas d'accès non autorisé -> 401
//            .exceptionHandling(ex -> ex.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)));
//
//        // Insérer le filtre JWT avant le filtre d'authentification standard
//        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowedOrigins(List.of(
//            "http://localhost:52382",
//            "http://localhost:4200",
//            "http://localhost:52130",
//            "http://localhost:65028",
//            "https://hakimdev.ch"
//        ));
//        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//        config.setAllowedHeaders(List.of("*"));
//        config.setAllowCredentials(true);
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);
//        return source;
//    }
//}




package ch.hakimdev.hakimdevbackend.config;

import ch.hakimdev.hakimdevbackend.filter.JwtFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtFilter jwtFilter;

    public SecurityConfig(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // CORS
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))

            // désactive CSRF (on utilise JWT + API stateless)
            .csrf(csrf -> csrf.disable())

            // règles d'accès
            .authorizeHttpRequests(auth -> auth
                // endpoints d'auth (login/register) accessibles sans token
                .requestMatchers("/api/auth/**").permitAll()

                // WebSocket handshake (SockJS) : autoriser le endpoint /ws (handshake HTTP)
                .requestMatchers("/ws/**", "/ws", "/sockjs/**").permitAll()

                // permettre à tous de lire les listes publiques (GET)
                .requestMatchers(HttpMethod.GET, "/api/articles/**", "/api/projets/**", "/api/cours/**").permitAll()

                // ressources statiques (assets, css, js)
                .requestMatchers("/assets/**", "/favicon.ico", "/**/*.css", "/**/*.js", "/**/*.png", "/**/*.jpg").permitAll()

                // toutes les autres requêtes nécessitent authentication
                .anyRequest().authenticated()
            )

            // pas de session côté serveur
            .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            // en cas d'accès non autorisé -> 401
            .exceptionHandling(ex -> ex.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)));

        // Insérer le filtre JWT avant le filtre d'authentification standard
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of(
            "http://localhost:4200",
            "http://localhost:52382",
            "http://localhost:52130",
            "http://localhost:65028",
            "https://hakimdev.ch"
        ));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
