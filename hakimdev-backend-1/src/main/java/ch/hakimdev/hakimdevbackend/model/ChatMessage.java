//package ch.hakimdev.hakimdevbackend.model;
//
//public class ChatMessage {
//    private String from;
//    private String to;
//    private String text;
//    private long time = System.currentTimeMillis();
//
//    // getters / setters
//    public String getFrom() { return from; }
//    public void setFrom(String from) { this.from = from; }
//    public String getTo() { return to; }
//    public void setTo(String to) { this.to = to; }
//    public String getText() { return text; }
//    public void setText(String text) { this.text = text; }
//    public long getTime() { return time; }
//    public void setTime(long time) { this.time = time; }
//}


package ch.hakimdev.hakimdevbackend.model;

public class ChatMessage {
    private String from;
    private String to;   // optionnel pour les privés
    private String content;

    public ChatMessage() {}

    public ChatMessage(String from, String to, String content) {
        this.from = from;
        this.to = to;
        this.content = content;
    }

    public String getFrom() { return from; }
    public void setFrom(String from) { this.from = from; }

    public String getTo() { return to; }
    public void setTo(String to) { this.to = to; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}
