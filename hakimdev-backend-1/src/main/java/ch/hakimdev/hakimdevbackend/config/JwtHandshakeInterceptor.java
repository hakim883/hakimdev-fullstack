package ch.hakimdev.hakimdevbackend.config;

import ch.hakimdev.hakimdevbackend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.server.HandshakeInterceptor;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;

import jakarta.servlet.http.HttpServletRequest;  // ✅ Jakarta pour Spring Boot 3
import java.util.Map;

@Component
public class JwtHandshakeInterceptor implements HandshakeInterceptor {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response,
                                   WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
        String token = null;

        if (request instanceof ServletServerHttpRequest) {
            ServletServerHttpRequest servletReq = (ServletServerHttpRequest) request;
            HttpServletRequest http = servletReq.getServletRequest();

            // 1) Vérifier si token dans query param (ws://.../ws?access_token=xxx)
            String q = http.getParameter("access_token");
            if (q != null && !q.isEmpty()) token = q;

            // 2) Vérifier si token dans header Authorization
            if (token == null) {
                String auth = http.getHeader("Authorization");
                if (auth != null && auth.startsWith("Bearer ")) {
                    token = auth.substring(7);
                }
            }
        }

        // Si token valide, on récupère le username et on le stocke dans les attributs
        if (token != null && jwtUtil.validateToken(token)) {
            String username = jwtUtil.extractUsername(token);  // ✅ méthode correcte
            attributes.put("username", username);
            attributes.put("principal", new StompPrincipal(username));
        }

        // On laisse toujours passer la handshake (auth gérée après)
        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response,
                               WebSocketHandler wsHandler, Exception exception) {
    }
}
