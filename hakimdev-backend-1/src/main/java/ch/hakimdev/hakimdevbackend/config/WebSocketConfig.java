//package ch.hakimdev.hakimdevbackend.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.web.socket.config.annotation.*;
//
//@Configuration
//@EnableWebSocketMessageBroker
//public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
//
//    private final JwtHandshakeInterceptor jwtHandshakeInterceptor;
//
//    public WebSocketConfig(JwtHandshakeInterceptor jwtHandshakeInterceptor) {
//        this.jwtHandshakeInterceptor = jwtHandshakeInterceptor;
//    }
//
//    @Override
//    public void configureMessageBroker(MessageBrokerRegistry config) {
//        // préfixe pour souscrire aux messages (ex: /topic/chat)
//        config.enableSimpleBroker("/topic", "/queue");
//        // préfixe obligatoire pour envoyer des messages (ex: /app/chat.send)
//        config.setApplicationDestinationPrefixes("/app");
//        // préfixe pour messages privés
//        config.setUserDestinationPrefix("/user");
//    }
//
//    @Override
//    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        // Endpoint WebSocket + autorisation CORS
//        registry.addEndpoint("/ws")
//                .setAllowedOrigins("http://localhost:4200", "https://hakimdev.ch")
//                .addInterceptors(jwtHandshakeInterceptor) // 🔑 ajout interceptor JWT
//                .withSockJS(); // fallback pour navigateurs sans WS
//    }
//}













package ch.hakimdev.hakimdevbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // 🔹 broker pour envoyer les messages
        config.enableSimpleBroker("/topic", "/queue");
        // 🔹 préfixe des @MessageMapping
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // 🔹 point d’entrée WebSocket
        registry.addEndpoint("/ws").setAllowedOriginPatterns("*").withSockJS();
    }
}
