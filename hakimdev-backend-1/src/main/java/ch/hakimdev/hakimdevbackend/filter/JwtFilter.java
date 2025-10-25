//package ch.hakimdev.hakimdevbackend.filter;
//
//import ch.hakimdev.hakimdevbackend.util.JwtUtil;
//import jakarta.servlet.*;
//import jakarta.servlet.http.*;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.io.IOException;
//
//
//public class JwtFilter implements Filter {
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @Override
//    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
//            throws IOException, ServletException {
//
//        HttpServletRequest req = (HttpServletRequest) request;
//        HttpServletResponse res = (HttpServletResponse) response;
//
//        String authHeader = req.getHeader("Authorization");
//        if (authHeader != null && authHeader.startsWith("Bearer ")) {
//            String token = authHeader.substring(7);
//            if (jwtUtil.validateToken(token)) {
//                chain.doFilter(request, response);
//                return;
//            }
//        }
//
//        res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//        res.getWriter().write("Accès refusé - connexion requise");
//    }
//}
package ch.hakimdev.hakimdevbackend.filter;

import ch.hakimdev.hakimdevbackend.model.User;
import ch.hakimdev.hakimdevbackend.repository.UserRepository;
import ch.hakimdev.hakimdevbackend.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

import java.io.IOException;
import java.util.Collections;
import java.util.Optional;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest req,
                                    HttpServletResponse res,
                                    FilterChain chain) throws ServletException, IOException {

        String path = req.getRequestURI();
        System.out.println("[JwtFilter] Request URI: " + path);

        String authHeader = req.getHeader("Authorization");
        System.out.println("[JwtFilter] Authorization header: " + authHeader);

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            System.out.println("[JwtFilter] Token extracted (first 30 chars): " +
                    (token.length() > 30 ? token.substring(0,30) + "..." : token));

            boolean valid = false;
            try {
                valid = jwtUtil.validateToken(token);
            } catch (Exception e) {
                System.out.println("[JwtFilter] jwtUtil.validateToken threw: " + e.getMessage());
            }
            System.out.println("[JwtFilter] Token valid? " + valid);

            if (valid) {
                String email = null;
                try {
                    email = jwtUtil.extractUsername(token);
                } catch (Exception e) {
                    System.out.println("[JwtFilter] extractUsername error: " + e.getMessage());
                }
                System.out.println("[JwtFilter] Extracted email: " + email);

                if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    Optional<User> optUser = userRepository.findByEmail(email);
                    if (optUser.isPresent()) {
                        User user = optUser.get();
                        System.out.println("[JwtFilter] Found user in DB id=" + user.getId() + " email=" + user.getEmail());

                        // ici on met le principal à l'email ; si tu veux l'objet User, tu peux mettre user à la place
                        UsernamePasswordAuthenticationToken authentication =
                                new UsernamePasswordAuthenticationToken(user.getEmail(), null, Collections.emptyList());
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    } else {
                        System.out.println("[JwtFilter] No user found for email: " + email);
                    }
                }
            } else {
                System.out.println("[JwtFilter] Token invalide ou expiré");
            }
        } else {
            System.out.println("[JwtFilter] No Bearer token header found.");
        }

        chain.doFilter(req, res);
    }
}
