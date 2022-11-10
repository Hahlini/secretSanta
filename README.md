# Secret Santa

### What does this program do?

It should be used to set up games of secret santa. If you and your friend can't meet up to set up the game irl it's very nice to have a program that does it. Otherwise the person setting it up risks seeing who someone is supposed to give presents to. This program makes one html file for each player with their assigned hidden within the document. No one should look in someone elses document and you don't even need to verify since to random algorithm in SecretSanta.java guarantees that no player will get themselves and that no two players will get the same person and that everybody will have a secret santa. The example file should look something like this:  
  
  
![Example Letter](/images/ExampleLetter.PNG "Example Letter")

### How does it work?

The program will create a copy of the document "message.html" for each player. I added an example to this repo that you can look at by [clicking here](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/message.html) by changing the file named message.html in the directory you could create your own messages. The program is run through the terminal by typing 
```
"java SecretSanta <Names of all players seperated by whitespaces (" ")>
```
In the folder textfiles i have left the results of "java SecretSanta Bob Oliver Rudolph Will" as an example. You can reach the html site by clicking on their name 

* [Bob](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/textfiles/Bob.html)
* [Oliver](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/textfiles/Oliver.html)
* [Reudolph](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/textfiles/Rudolph.html)
* [Will](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/textfiles/Will.html)
