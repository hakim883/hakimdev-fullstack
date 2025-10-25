package ch.hakimdev.hakimdevbackend.config;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;

import java.security.Principal;
import java.util.Map;

@Component
public class CustomHandshakeHandler extends DefaultHandshakeHandler {
    @Override
    protected Principal determineUser(ServerHttpRequest request, WebSocketHandler wsHandler, Map<String, Object> attributes) {
        Object p = attributes.get("principal");
        if (p instanceof Principal) return (Principal) p;
        String username = (String) attributes.get("username");
        if (username != null) return new StompPrincipal(username);
        return super.determineUser(request, wsHandler, attributes);
    }
}
