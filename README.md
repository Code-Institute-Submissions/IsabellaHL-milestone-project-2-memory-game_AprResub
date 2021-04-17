# Animal Memory Game

[View the live project here.](https://isabellahl.github.io/milestone-project-2-memory-game/)

## About

Milestone Project Two / Interactive Frontend Development / Code Institute

This website contains a simple single player memory game where the objective is to find and pair matches of the same animal in the 60 seconds given (as indicated by the timer).

## User Experience (UX)

-   ### User stories

This game is aimed at both children and adults looking for a simple and fun online game to pass thier time with.
The objective of the game is to remember the placement of the different tiles and find the matches within a time constraint which is not only fun but great exercise for memory and cognition.

-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are blue (#1C7CCC) and a light blue(#c4f1ff) for the card border and background respectively.

        #### Typography
        -  A standard font has been used for the heading as well as the how to play info, as I wanted to keep the site clean and simple.
    -   #### Imagery
        -   The images that are used are very colorful and eye catching. I believe that this is a great addition to the game as it allows for the player to remember the placement of the cards due to the eyecatching imagery used.
    ### Wireframes
    -   This the the wireframe that I used to develop my game [View]((https://github.com/IsabellaHL/milestone-project-2-memory-game/assets/images/Wireframes.png?raw=true))


## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript Official Site")


### Frameworks, Libraries & Programs Used

[Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

[GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.

[Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.

[Unplash](https://unsplash.com/)
    - Unplash was used for images

[DevTools](https://developers.google.com/web/tools/chrome-devtools)
    - Used to check responsiveness and layout of the site.

[Am I responsive](http://ami.responsivedesign.is/) 
    - Used to ensure the site was fully responsive.

#### Other Resources

- [w3schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Slack](https://slack.com/)


## Testing

- [W3C Markup Validation](https://validator.w3.org/#validate_by_input) - used to validate HTML
    - some very minor issues found that have no impact on the overall functinality of the site.
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/) - used to vaildate CSS Code
    - no errors found

 I used [DevTools](https://developers.google.com/web/tools/chrome-devtools) to ensure the responsiveness of the site as well as looking/fixing any bugs within the code.
 * I tested the following types:

    * iPad Pro (portrait: 1024x1366 & landscape: 1366x1024)
    * iPad (portrait: 768x1024 & landscape: 1024x768)
    * iPhone 5/SE (portrait: 320x568 & landscape: 568x320)
    * iPhone X (portrait: 375x812 & landscape: 812x375)
    * Galaxy S5/Moto G4 (portrait: 360x640 & landscape: 640x360)
    * Pixel 2 (portrait: 411x731 & landscape: 731x411
   - There are no responsiveness issues with the site and the game looks well on all devices (desktop,laptop,tablet and phone). I also used [Am I responsive](http://ami.responsivedesign.is/) to ensure responsiveness on all devices.

Testing game functionality-
  - Tested the layout of the site on all devices 
  - Tested that all tiles flip around with no issues when clicked.
  - Tested that the tiles will flip back around with no issues if the pair does not match.
  - Tested that the tiles will will stay face up if there is a match found. 
  - Tested that the player can only click two cards at a time, and the cards need to flip around if a match is not found for a third card to be clicked.
  - Tested that the timer will start counting down when the game is loaded or reset.
  - Tested that the moves counter counts the moves correctly.
  - Tested that the timer counts down correctly and stops after the game is won.
  - Tested that the timer triggers a pop up window with a "times' up" message if the time runs out and the game is not won.
  - Tested that once the game is won a pop up message with "You won" appears.
  - Tested that the reset button starts a new game.

  I also tested the site on the following browsers-
  - Chrome - works well
  - Firefox - works well
  - IE EDGE - works well
  - Opera - works well
  - Safari - found that the game function of flipping the cards does not work well on safari. I have issue understanding why this happens, and when able will try to look for a solution.

  I also personally tested the game on my Iphone 11 and on Imac, the game worked well both times.


## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

### Acknowledgements

-   My Mentor for continuous helpful feedback.
-   Tutor support at Code Institute for their support.



    