import java.util.ArrayList;
import java.util.HashMap;
import java.util.Collections;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;


public class SecretSanta{
    private ArrayList<String> players = new ArrayList<>();
    private HashMap<String, String> giftPaths= new HashMap<>();
    private FileWriter writer; 
    private String folder;

    public SecretSanta(String[] Args){
        folder = Args[0];
        for (String player : Args) {
            players.add(player);
        }
        players.remove(Args[0]);
        Collections.shuffle(players);
        giftPaths.put(players.get(players.size() - 1), players.get(0));
        for (int i = 0; i + 1 < players.size(); i++) {
            giftPaths.put(players.get(i), players.get(i+1));
        }
    }

    public void createFiles(){
        for (String player : players) {
            try{
                writer = new FileWriter("textfiles\\"+player);
                writer.write(getText(player));
                writer.close();
            } catch (IOException e){
                    System.out.println("Roor" + e);
            }
            
        }
    }

    public void createFilesHtml(String filename){
        for (String player : players) {
            try{
                writer = new FileWriter(folder+"\\"+player+".html");
                writer.write(getTextHtml(player, filename));
                writer.close();
            } catch (IOException e){
                    System.out.println("Roor" + e);
            }
            
        }
    }

    public String getText(String player){
        String text = 
        (
            "God Jul och Gott Nytt År " + player + "!\n" + 
            "Och förhoppningsvis en god fortsättning (Det som händer i Bålsta stannar i Bålsta) \n \n" +
            
            "Din present skall ges till: " + giftPaths.get(player)
        );
        return text;
    }

    public String getTextHtml(String player, String filename){
        String text = "";
        player.replaceAll("_", " ");
        try{
            BufferedReader file = new BufferedReader(new FileReader(filename));
            String line = file.readLine();
            while (line != null){
                text = text + "\n" + line;
                line = file.readLine();
            }
            file.close();
        } catch (IOException e) {
            System.out.println("Something went wrong: " + e.getMessage());
            // Exit the program    
            System.exit(1);

        }

        text = text.replaceAll("PLAYER", player).replaceAll("RECIPIENT", giftPaths.get(player));
        return text;
    }

    public void createDirectory(String folderName){
        try {
            File dir = new File(folderName);
            dir.mkdirs();
            File tmp = new File(dir, "README.txt");
            tmp.createNewFile();
        } catch (IOException e) {
            System.out.println("Something went wrong: " + e.getMessage());
            // Exit the program    
            System.exit(1);

        }
    }
    
    
    public static void main(String args[]){
    
        if (args.length < 3){
            System.out.println("You need to specify the people who are playing and the game and the name of the folder where the information will be stored by typing \n \"\u001B[33mjava SecretSanta <Names>\u001B[0m\". \nNames should be sepperated by whitespaces and if one players use two or more names they should be seperated with an underscore \"_\"");
        } else{ 
            SecretSanta game = new SecretSanta(args);
            game.createDirectory(args[0]);
            game.createFilesHtml("message.html");
        }
        
    }
}