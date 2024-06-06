# Musical Guess!  

Welcome to the Musical Guess Quiz! This quiz was created for users to have some musical fun and to test their knowledge of well-known pop music songs, by trying to guess the song title and artist from the lyrics presented.

It has been built using HTML5, CSS3 and JavaScript to allow the user to interact with the website in an engaging way and it was created for the Milestone Project 2 for Code Institute's Diploma in Web Development.

![Responsive Image]() I am Response

[Link to Live Website](https://k-coll.github.io/mp2-musical-guess-quiz/)

## Table of Contents

* [User Experience (UX)](#user-experience-ux)
  * [Strategy](#strategy)
    * [User Stories](#user-stories)
  * [Scope](#scope)
  * [Structure](#structure)
  * [Skeleton](#skeleton)
  * [Surface](#surface)
    * [Design](#design)
    * [Colour Scheme](#colour-scheme)
    * [Contrast Checker](#contrast-checker)
    * [Typography](#typography)
    * [Imagery](#imagery)
* [Features](#features)
* [Future Implementations](#future-implementations)
* [Testing](#testing)
  * [Testing User Stories](#testing-user-stories)
  * [Validator Testing](#validator-testing)
    * [HTML Validation](#html-validation)
    * [CSS Validation](#css-validation)
  * [Lighthouse](#lighthouse)
  * [Full Testing on Devices and Browsers ](#full-testing)
  * [Links](#links)
  * [Contact Form](#contact-form)
  * [Solved Bugs](#solved-bugs)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Applications Used](#applications-used)
  * [Frameworks, Libraries and CDNs Used](#frameworks-libraries-and-CDNs)
  * [VS Code Extensions](#vs-code-extensions)
* [Deployment & Local Development](#deployment-local-development)
  * [Deployment](#deployment)
  * [Local Deployment](#local-deployment)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)
* [Credits](#credits)
  * [Learning Resources](#learning-resources)
  * [Content Used](#content-used)
  * [Acknowledgements](#acknowledgements)

## User Experience (UX)
### Strategy
The Musical Guess Quiz presents lyrics from a well-known pop songs, and allows users to guess which artists sang the specified lyrics.

### User Stories 
  * #### Site Owner Goals
    1.   For users to play a fun and engaging online quiz to test their musical knowledge by guessing the song title and artist from the lyric presented.
    2. For the user to see their progress and to see how many questions they have completed.
    3. For the users score to be added up and for them to see their final score the end.
    4. To allow the user to try the quiz again and to reload the questions to try and beat their score.

  * #### First Time Visitor Goals
    5. I want to test my musical knowledge by guessing the song title and artist from the lyric presented.
    6. I want to see my progress throughout the quiz.
    7. I want to know the aim of the quiz / how to play.
    8. I want to see if I get the answers correct or not.
    9. I want to know what my final score is at the end, once I’ve completed the quiz.
    10. I’d like to be able to play again to beat my score.
  
### Scope
  The goal for the project is to make an easy to use and visually appealing interactive website.  

### Structure
  The quiz website has one page which houses the entire quiz - from the menu with the start button and how to play button/modal, to the quiz container housing the question and answers and next button, to the results section displaying the number of correctly answered questions and the play again button. The interactivity and functionality throughout the quiz is completed using JavaScript.   
  
### Skeleton

  Wireframes were created using Balsamic for Mobile, Tablet and Desktop. I tried to stick to this design as close as possible for the final project. However, I added lots of features into the wireframes as I was aiming high for this project; which turned out to be quite ambitious during the build phase. JavaScript has been difficult and challenging for me to learn and I ran out of time towards the end as the deadline was approaching. I therefore downscaled my project throughout the building process to be able to do better with less elements, whilst also showcasing the JavaScript that I had learnt along the way. I had added the elements I was not able to create into my ‘Future Implementations’ section. With additional time, research, practice and learning, I am confident that I can execute these additional features in the future.

<details><summary>Mobile</summary>
<img src="">
</details>
<details><summary>Tablet</summary>
<img src="">
</details>
<details><summary>Desktop</summary>
<img src="">
</details>

  ### Surface

* #### Design
    The overall design of the website is minimal. This is purposeful, as I did not want to distract from the content, which still needed to be readable and understandable. There was also an iterative design process of the quiz; as I downscaled the features, I had to redesign in order to prioritise what features were to be included and what were to be future implementations.
  
* #### Colour Scheme
    The idea for the colour scheme is to keep it fresh and bright, whilst also being easy to read and understand. I wanted it to still be in keeping with the fun nature of the pop music genre which the quiz is based upon.
    
    The background image used is clean and minimalistic, whilst also being colourful. The main colours used were chosen to tie in with and compliment the background image, as it has lots of complimentary colours which creates an overall cohesive and pleasing aesthetic. 

    <details><summary>Colour Palette</summary>
    <img src="">
    </details>

* #### Contrast Checker
    Contrast was checked for accessibility using [WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/).
        <br>
      The overall contrast for the website is good. I have picked out a couple of elements to showcase this:    
    
    The contrast for the main body of the quiz website (which is the background colour for the main quiz app container, against the text colour for the title, question and answers) is
    
    The contrast for the Next button is
     

    <details><summary>Contrast Checker </summary>
    <img src="">
    </details>
    <details><summary>Contrast Checker </summary>
    <img src="">
    </details>

* #### Typography
    Info about the fonts used and why
    
    Three fonts are used for this website.  
    
    Kalam is used for the website title / logo, for the contact link within the footer and for the submit button. Rubik is used for the menu navigation bar and the headings. Nunito Sans is used for the main body of the website.  
    
    Sans Serif was also used as the fall-back font throughout the entire website, if the other fonts are not working properly.  
    
    These fonts are accessible and were chosen because they are clear and easy to read and are popular for people who have visual or cognitive disabilities.  

* #### Imagery
    There is only one image used within the website, and this is the background image. I chose this image as it is clean and minimalistic, whilst also being colourful. It represents the fun and bright nature of the pop music genre that the quiz is based upon. It is also the basis of the complimentary colour palette, which creates an overall cohesive and pleasing aesthetic.
        
    The imagery used on the website is sourced from Freepik.com, specifically:  
      * [Background Image]( https://www.freepik.com/free-vector/colorful-musical-notes-background-pentagram-style_39455899.htm#fromView=search&page=2&position=6&uuid=a91be3d6-b1cc-45fc-91df-65f15d4f81ea). From author [Starline]( https://www.freepik.com/author/starline)  
    

## Features

* #### Quiz Title
  * The Quiz title is a static element and is visible on the page throughout the entirety of the quiz. This is to ensure the branding of the quiz and to let users know what the quiz is about when they first visit the website. User Stories covered: 1, 5.
 
  ![XXX]()  
  <br>  

* #### Menu Controls / Start Button / How to Play Button
  * The menu control area is the initial navigation for the quiz and is intuitive. It houses the start button and the how to play button that links to the rules modal. This is the first thing the user sees when they enter the website. When the user clicks the start button, the quiz is initialised. User Stories covered: 1, 5, 7.
 
  ![XXX]()  
  <br>  

* #### How to Play Modal 
  * Within the controls area, there is a "How to Play" button. This prompts the user to click it and When this happens, the rules modal opens and is closed by clicking the close button. This explains the aim of the quiz, how the question is going to be presented, how many answers options there will be, what results the user will be given at the end, the ability to try again and a recommendation to play with their friends to beat their scores. User Stories covered: 7.

  ![XXX]()  
  <br>

* #### Main Quiz Area 
  * This is a box that has a pink background with opacity, so the background image is visible. It houses the following elements: the menu controls, the question counter, the actual quiz question / lyrics, the answer options to choose from and the next button. It also displays the results of the quiz once it is completed and the play again button. User Stories covered: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
  
  ![XXX]()  
  <br> 
  
* #### Question Counter
  * The question counter starts at 1 and increments upward as each new question is loaded. This provides visual feedback to the user regarding their progress through the quiz, so they know what question they are on and how many questions are left. User Stories covered: 2, 6.
  
  ![XXX]()  
  <br>

* #### Question / Lyric
  * The question area show the presented song lyric, which acts as the question as this is what the user needs to identify the song title and artists from the answer options. There are 10 questions to answer in total. User Stories covered: 1, 5.
  
  ![XXX]()  
  <br>

* #### Answer Options
  * There are four answer options for every question. These are presented in a box/button format and have a hover effect. The user only gets one chance to answer the question; after the user has chosen their answer, they are unable to select other options, live feedback is provided regarding if the answer is right or wrong and the Next button is also display, allowing the user to move on to the next question in the quiz. User Stories covered: 1, 5, 8.
  
  ![XXX]()  
  <br>

* #### Right / Wrong Answer Feedback
  * Once the user has selected their answer, they are provided with live feedback regarding if the answer is correct or not. The background colour of the answer button will change to green if correct and red if incorrect. If the answer is incorrect, the correct answer will also be displayed. This also links in with the score incrementation; if the answer is correct, points are added to their score (1 point for each correct answer). If the answer is incorrect, no points are added. User Stories covered: 1, 3, 5, 6, 8, 9.
  
  ![XXX]()  
  <br> 

* #### Results
   * Once the user has completed all 10 questions, the results are displayed. There is a congratulations message for completing the quiz, along with how many questions out of 10 they answered correctly. The user also has the option to the play the quiz again. User Stories covered: 3, 4, 9, 10.
   
  ![XXX]()  
  <br> 


## Future Implementations
* 
* 
*   

## Testing

Chrome developer tools were used to test, identify and address any issues. This was also used to ensure the website was responsive on different screen sizes throughout the build process.

### Testing User Stories

#### Site Owner Goals

1. XXX

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|

  
<details><summary>XXXX</summary>
<img src="">     
</details>
<br>

2. XXX      

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|

  
<details><summary>XXXX</summary>
<img src="">     
</details>
<br>

#### First Time Visitor Goals

3.  XXX 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|

<details><summary>XXXX</summary>
<img src="">     
</details>
<br>

4.  XXX 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|


<details><summary>XXXX</summary>
<img src="">     
</details>
<br>

5.  XXX  

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|


<details><summary>XXXX</summary>
<img src="">     
</details>
<br>

6.  XXX    

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|


<details><summary>XXXX</summary>
<img src="">     
</details>
<br>

7.  XXXX   

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|

<details><summary>XXXX</summary>
<img src="">     
</details>
<br>


### Validator Testing
* #### HTML Validation
    The W3C HTML Markup Validator was used to validate the HTML code of the website. 

    <details><summary>Page 1</summary>
    <img src="">
    </details>
    <details><summary>Page 2</summary>
    <img src="">
    </details>
    <details><summary>Page 3</summary>
    <img src="">
    </details>
    <details><summary>Page 4<</summary>
    <img src="">
    </details>

* #### CSS Validation
    The W3C Jigsaw CSS Validator was used to test the CSS code of the website.  

    <details><summary>CSS Validator</summary>
    <img src="">
    </details>
    <details><summary>CSS Warning</summary>
    <img src="">
    </details>

### Lighthouse
I tested my website using Lighthouse within Chrome Developer Tools. This allowed me to test for performance, accessibility, best practices and SEO (seacrh enginer optimisation). 

![Lighthouse Testing]()

### Full Testing on Devices and Browsers
  The website was tested and functioned / performed well on Chrome, Edge and Safari.  

  Full testing was carried out on the following devices:

  * Laptop
    * Macbook Pro, 14 inch 2021, M1 chip
    * Dell Latitude 7420

  * Tablet
    * iPad (7th generation)

  * Mobile
    * iPhone 11

### Links
The internal links feature in the XXXXX. All internal links have been tested and take you to the directed page within the website.

| Link / Feature                  |  Test Case                      | Outcome                                                   |
| :---------                      | :----------------               | :-----------------------------------                      |
| XXX                             | Click on XXX                    | User is brought to XXX                                    |
| XXX                             | Click on XXX                    | User is brought to XXX                                    |
| XXX                             | Click on XXX                    | User is brought to the XXX                                |
| XXX                             | Click on XXX                    | User is brought to the XXX                                |
  

### Contact Form
* To find the form, navigate to XXXXXX
* Fill out all the fields, including your first name, last name and a valid ‘@’ email address. 

* If the form is completed properly, you will see the following message:  
    ![form submit message]()  
* If you try to submit without a first name or last name you will see the following message:  
    ![fill in name message]()  
* If you try to submit without a valid ‘@’ email address, you will see the following message:  
    ![fill in email message]()  
* If you try to submit a blank message without a description for your enquiry, you will see the following message:  
    ![submit enquiry message]()  

### Solved Bugs
1.	 

2.	  

3.	 

4.	  


## Technologies Used

### Languages Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3)
* [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
* [Markdown](https://en.wikipedia.org/wiki/Markdown)

### Applications Used
* Git was used for version control.  
* [Github](https://github.com/) was used to store the code.  
* [Gitpod](https://www.gitpod.io/) was used for the CI template and to access VS code.  
* [VS Code](https://code.visualstudio.com/)was used as a code editor.  
* [Balsamic](https://balsamiq.com/) was used to create Wireframes.  
* [Image Compressor](https://imagecompressor.com) was used to decrease the dimensions and size of the images used for the website.  
* [Convertio](https://convertio.co/) was used to convert the image file types from jpg to webp format.  
* [Am I Responsive](https://amiresponsive.co.uk/) was used to display all the pages of the website on different devices. 
* [W3C HTML Markup Validation](https://validator.w3.org) was used to validate the HTML code of the website.
* [W3C Jigsaw CSS Validation](https://jigsaw.w3.org/css-validator/) was used to validate the CSS code of the website.
* [WebAIM Wave Accessibility](https://wave.webaim.org) was used to evaluate the accessibility of the website to ensure it is up to high standards.
* [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) was used to check the contrast of the colours used in the design of the website.

### Frameworks, Libraries and CDNSs
* [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) is used throughout the website for template code and responsiveness. This includes XXXXXXXXXXX. All Bootstrap elements are styled using either Bootstrap CSS or custom CSS.  
* [Google Fonts](https://fonts.google.com/) was used to import the three fonts used into the website.  
* [Font Awesome](https://fontawesome.com/) was used to add icons for visual representation and aesthetic purposes.  

### VS Code Extensions
* [Prettier](https://prettier.io) – was used for code formatting and code completion. 
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) – was used for live previewing the site during the build process. 


## Deployment & Local Deployment
  * ### Deployment
    
    The live website was deployed to Github Pages, by following the below instructions:

    1. Log in (or sign up) to Github.
    2. Find the repository for this project, K-Coll/mp2-musical-guess-quiz.
    3. Click on the Settings link.
    4. On the left hand side of the navigation bar, click on the Pages link.
    5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
    6. Click Save. Your live Github Pages site is now deployed at the URL shown.

  * ### Local Deployment
    * ### How to Fork
      To fork the Musical Guess Quiz repository:

      1. Log in (or sign up) to Github.
      2. Go to the repository for this project, K-Coll/mp2-musical-guess-quiz.
      3. Click the Fork button in the top right corner.
  
    * ### How to Clone
      To clone the Musical Guess Quiz repository:

      1. Log in (or sign up) to GitHub.
      2. Go to the repository for this project, K-Coll/mp2-musical-guess-quiz.
      3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
      4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
      5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Credits
###  Learning Resources
* [W3 Schools](https://www.w3schools.com) – used for problem solving.  
* [Stack Overflow](https://stackoverflow.com)– for troubleshooting issues and problem solving.  
* [Code Institute Slack Community](https://slack.com/intl/en-gb) – for problem solving and user feedback.  
* Code Institute Love Maths Project – for inspiration / adaptation regarding .  
* Code Institute Whisky Drop Project – for inspiration and Bootstrap grid system.  
* Code Institue Rosie Resume – for inspiration and Bootstrap grid system.  
* [YouTube: ]() – adapted from and inspired by
* [XXX]() – code used.  
* [YouTube: ]() - Code used.
* [Article:]().  
* [Article: ](h).  


### Content Used
All text content was written by the developer.  

## Acknowledgements
* My mentor Mo Shami.  
* Kristyna my Code Institute Cohort Facilitor, who has been a wonderful support throughout the course. Also my cohort friends for their motivation and support, as well as our weekly meetings, which I look forward to attending.  
* The Code Institute Slack Community, both directly and indirectly. I was able to search the community and find help as well as ask directly in the various channels for specific issues. This is a supportive environment and community which helped me with problem solving.  
* My mum, family and friends for their support and encouragement.  
