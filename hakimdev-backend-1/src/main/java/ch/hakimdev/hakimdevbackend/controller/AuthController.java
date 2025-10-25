package ch.hakimdev.hakimdevbackend.controller;

import ch.hakimdev.hakimdevbackend.model.User;
import ch.hakimdev.hakimdevbackend.repository.UserRepository;
import ch.hakimdev.hakimdevbackend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (user.getUsername() == null || user.getEmail() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Champs manquants"));
        }
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email déjà utilisé"));
        }
        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "Utilisateur créé"));
    }
   

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return userRepository.findByEmail(user.getEmail())
                .filter(u -> u.getPassword().equals(user.getPassword()))
                .map(u -> {
                    String token = jwtUtil.generateToken(u.getEmail());
                    return ResponseEntity.ok(Map.of("token", token));
                })
                .orElse(ResponseEntity.status(401).body(Map.of("error", "Identifiants invalides")));
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody User user) {
//        return userRepository.findByEmail(user.getEmail())
//                .filter(u -> u.getPassword().equals(user.getPassword()))
//                .map(u -> {
//                    String token = jwtUtil.generateToken(u.getEmail());
//                    return ResponseEntity.ok(Map.of("token", token));
//                })
//                .orElse(ResponseEntity.status(401).body(Map.of("error", "Identifiants invalides")));
//    }
	
}