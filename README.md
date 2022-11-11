# Secret Santa

### What does this program do?

It can be used to set up games of secret santa. If you and your friends can't meet up to set up the game irl it's very nice to have a program that does it. Otherwise the person setting it up risks seeing who someone is supposed to give presents to. This program makes one html file for each player and hides who they are supposed to buy a present for within the file. No one should look in someone elses file and you don't need to verify that the game "works" since the random algorithm in SecretSanta.java guarantees that no player will get themselves, that no two players will get the same person and that everybody will have a secret santa. Below you'll find an example of what the file could could look like:  
  
<img src="/images/ExampleLetter.PNG" width="400">

### How does it work?

The program will create a copy of the document "message.html" for each player where "PLAYER" is replaced with their name and "RECIPIENT" is replaced with their assigned person. I added an example to this repo that you can look at by [clicking here](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/message.html) by changing the file named message.html in the directory you could create your own messages. The program is run through the terminal by typing 
```
java SecretSanta <folder name> <Names of all players seperated by whitespaces (" ")>
```
In the folder textfiles i have left the results of 
```
java SecretSanta textfiles Bob Oliver Rudolph Will
```
as an example. You can reach the html site by clicking on their name:
* [Bob](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/textfiles/Bob.html)
* [Oliver](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/textfiles/Oliver.html)
* [Rudolph](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/textfiles/Rudolph.html)
* [Will](http://htmlpreview.github.io/?https://github.com/Hahlini/secretSanta/blob/master/textfiles/Will.html)
