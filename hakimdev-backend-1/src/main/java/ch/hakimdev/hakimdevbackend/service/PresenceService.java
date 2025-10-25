//package ch.hakimdev.hakimdevbackend.service;
//
//import org.springframework.stereotype.Service;
//
//import java.util.*;
//import java.util.concurrent.ConcurrentHashMap;
//
//@Service
//public class PresenceService {
//    // username -> set(sessionIds)
//    private final Map<String, Set<String>> online = new ConcurrentHashMap<>();
//
//    public void userConnected(String username, String sessionId) {
//        online.compute(username, (k, s) -> {
//            if (s == null) s = ConcurrentHashMap.newKeySet();
//            s.add(sessionId);
//            return s;
//        });
//    }
//
//    public void userDisconnectedBySession(String sessionId) {
//        online.forEach((user, sessions) -> {
//            sessions.remove(sessionId);
//            if (sessions.isEmpty()) online.remove(user);
//        });
//    }
//
//    public List<Map<String, Object>> getUserList() {
//        List<Map<String, Object>> list = new ArrayList<>();
//        online.keySet().forEach(u -> list.add(Map.of("username", u, "online", true)));
//        return list;
//    }
//}



package ch.hakimdev.hakimdevbackend.service;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class PresenceService {
    private final Set<String> onlineUsers = ConcurrentHashMap.newKeySet();
    private final SimpMessagingTemplate messagingTemplate;

    public PresenceService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void userConnected(String username) {
        onlineUsers.add(username);
        broadcastOnlineUsers();
    }

    public void userDisconnected(String username) {
        onlineUsers.remove(username);
        broadcastOnlineUsers();
    }

    public void broadcastOnlineUsers() {
        messagingTemplate.convertAndSend("/topic/online-users", onlineUsers);
    }
}
