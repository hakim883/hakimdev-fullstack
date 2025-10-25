//package ch.hakimdev.hakimdevbackend.controller;
//
//import ch.hakimdev.hakimdevbackend.service.PresenceService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.event.EventListener;
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
//import org.springframework.stereotype.Component;
//import org.springframework.web.socket.messaging.SessionConnectedEvent;
//import org.springframework.web.socket.messaging.SessionDisconnectEvent;
//
//@Component
//public class WebSocketEventListener {
//
//    @Autowired
//    private SimpMessagingTemplate messagingTemplate;
//
//    @Autowired
//    private PresenceService presenceService;
//
//    @EventListener
//    public void handleSessionConnected(SessionConnectedEvent event) {
//        StompHeaderAccessor sha = StompHeaderAccessor.wrap(event.getMessage());
//        String username = sha.getUser() != null ? sha.getUser().getName() : (String) sha.getSessionAttributes().get("username");
//        String sessionId = sha.getSessionId();
//        if (username != null) {
//            presenceService.userConnected(username, sessionId);
//            messagingTemplate.convertAndSend("/topic/users", presenceService.getUserList());
//        }
//    }
//
//    @EventListener
//    public void handleSessionDisconnect(SessionDisconnectEvent event) {
//        String sessionId = event.getSessionId();
//        presenceService.userDisconnectedBySession(sessionId);
//        messagingTemplate.convertAndSend("/topic/users", presenceService.getUserList());
//    }
//}
