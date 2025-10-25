//////package ch.hakimdev.hakimdevbackend.controller;
//////import java.util.Map;
//////import org.springframework.http.ResponseEntity;
//////import org.springframework.web.bind.annotation.CrossOrigin;
//////import org.springframework.web.bind.annotation.GetMapping;
//////import org.springframework.web.bind.annotation.PostMapping;
//////import org.springframework.web.bind.annotation.RequestBody;
//////import org.springframework.web.bind.annotation.RequestMapping;
//////import org.springframework.web.bind.annotation.RequestParam;
//////import org.springframework.web.bind.annotation.RestController;
//////@RestController
//////@RequestMapping("/api/chat")
//////@CrossOrigin(origins = "*")
//////public class ChatController {
//////
//////    @PostMapping
//////    public Map<String, String> chatPost(@RequestBody Map<String, String> body) {
//////        String msg = body.get("message");
//////        return Map.of("reply", "Kimi répond : " + msg);
//////    }
//////
//////    @GetMapping
//////    public Map<String, String> chatGet(@RequestParam String message) {
//////        return Map.of("reply", "Kimi répond : " + message);
//////    }
//////}
////
////
////
////
////
////
////package ch.hakimdev.hakimdevbackend.controller;
////
////import ch.hakimdev.hakimdevbackend.model.ChatMessage;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.messaging.handler.annotation.MessageMapping;
////import org.springframework.stereotype.Controller;
////import org.springframework.messaging.simp.SimpMessagingTemplate;
////
////import java.security.Principal;
////
////@Controller
////public class ChatController {
////
////    @Autowired
////    private SimpMessagingTemplate messagingTemplate;
////
////    @MessageMapping("/chat/private")
////    public void sendPrivateMessage(ChatMessage payload, Principal principal) {
////        String from = principal != null ? principal.getName() : payload.getFrom();
////        payload.setFrom(from);
////        // envoie au destinataire -> /user/{to}/queue/messages
////        messagingTemplate.convertAndSendToUser(payload.getTo(), "/queue/messages", payload);
////    }
////}
//
//
//package ch.hakimdev.hakimdevbackend.controller;
//
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.Payload;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.messaging.simp.annotation.SendToUser;
//import org.springframework.stereotype.Controller;
//
//import ch.hakimdev.hakimdevbackend.model.ChatMessage;
//
//@Controller
//public class ChatController {
//
//    // 🔹 message public (broadcast à tous)
//    @MessageMapping("/chat.send")
//    @SendTo("/topic/messages")
//    public ChatMessage send(@Payload ChatMessage message) {
//        return message;
//    }
//
//    // 🔹 message privé (direct à un user)
//    @MessageMapping("/chat.private")
//    @SendToUser("/queue/reply")
//    public ChatMessage sendPrivate(@Payload ChatMessage message) {
//        return message;
//    }
//}



package ch.hakimdev.hakimdevbackend.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/chat.send")
    @SendTo("/topic/messages")
    public ChatMessage send(ChatMessage message) {
        return message;
    }
}
