# **So, you think you know?**
## **Site Overview**
The 'So, You Think You Know?' website was created to provide a fun entertaiment for whoever would like to test if they have the knowledge on the questions being put on the website. The objective is to offer four differents options of answers so that the user can choose the correct one. By the end, they can upload their score to the Top Scores table. If they are one of the top five, their score will be shown. 

![Am I responsive screenshot]()
​
## Table of contents:
1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***Color Scheme***](#color-scheme)
    * [***Typography***](#typography)
1. [**Current Features**](#current-features)
    * [***Header Element***](#header-element)
    * [***About Us***](#about-us)   
    * [***Services***](#services)
    * [***Contact Us***](#services)
    * [***Footer***](#footer)
    * [***Thank You***](#thankyou)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Testing Phase**](#testing-phase)
1. [**Deployment**](#deployment)
1. [**Tech**](#tech)
1. [**Credits**](#credits)
    * [**Honorable mentions**](#honorable-mentions)
    * [**General reference**](#general-reference)
    * [**Content**](#content)
    * [**Media**](#media)
​
## **Planning stage**
### **Target Audiences:**
* Users interested in quiz games.
* Users interested in general knowledge.
* Users interested in trying to score higher than their friends.
​
### **User Stories:**
* As a user, I want to have fun.
* As a user, I want the website to be fast and provide me with questions quickly.
* As a user, I want to know if my answer was the correct one or not.
* As a user, I want to reach out and contact the business
​
### **Site Aims:**
* To provide an trustworthy veterinarians in Cork with over 10 years in business.
* To inform which type of services Honeypaw offers.
* To inform where the users can find us.
* To offer the user an oppertunity to get in contact.
​
### **Color Scheme:**
​
The objective of the colors of the site was to bring some joy to the user. Pets are always related to happiness, so (#3B3561) was used for the main backgrounds and (#59B3B3) was used for the the text and social media icons. Variations of the colors were used to provide better accessibility. The two cases are: the h2 in the about us section (#4D9B9B) and the color of the text inside the spans (#51A3A3).
​
## **Typography**
​
* Throughout the page, there are two fonts used:
  * Rubik - For the logo. It gives a strong image, however, does not seems distant or impersonal.
  * Poppins - For all the other text in the website.
​
* Both fonts were used to complement eachother. They provide clean visuals regardless of the screensize.
* All fonts were sourced from Google fonts, as stated in the credits.
​
## **Current Features**
​
#### *Navigation Bar:*

* The navigation bar is divided in two sections: the logo and the areas of the page.
* Each area, when hovered, changes color to provide clarity that it will bring the user to that section.
* Due to the conciseness of the website, there was no necessity of changing the structure of the header depending on the screen size.

![Navigation Bar screenshot](assets/docs/images/navigation-bar-screenshot.png)

#### *About Us:*

* There are two parts to the About Us section: a hero image and a text description about Honeypaw.
* The hero image also has a text that appears on top of the image.

![About Us screenshot](assets/docs/images/about-us-section-screenshot.png)

#### *Services:*

* There are four main services in Honeypaw: veterinary appointments, bath, grooming and the hotel.
* Each one of them has specific working hours.
* When viewed on tablet screens or higher, each service has a hover effect that only shows the days/hours when the mouse hover each one.

![Services screenshot](assets/docs/images/services-section-screenshot.png)

#### *Contact Us:*

* The contact us section is divided in two mini-sections: a form and a Google Maps iframe.
* On the form, the users can send their queries about each one of the services provided, or other if it is beyond that. They must provide a valid email and they must fill out the name and textarea to be able to send the message.
* On the iframe it is displayed the location of the Douglas Shopping Centre and right above it there is the typed details.

![Contact Us screenshot](assets/docs/images/contact-us-section-screenshot.png)
​
#### *Footer:*

* The footer has the logos for the main social media plataforms: Facebook, Twitter, Instagram and Youtube, with links that opens new tabs when clicked.

![Footer screenshot](assets/docs/images/footer-screenshot.png)

#### *Thank You:*

* After the user fills out the form and press send, they are taken to the thank you where they are informed that the message has been sent to the company and that it will be checked in due time.

![Thank You screenshot](assets/docs/images/thankyou-screenshot.png)
​
## **Future-Enhancements**
​
* Since, at this point, I do not have knowledge in Javascript, the form is not functional, other than redirecting the user to the thank you page. My intention is to return to the project and add the funcionality to this area of the page.
​
## **Testing Phase**
​
* Responsiveness - To ensure that the responsiveness of the website was the best possible, to project was built having the mobile access as the base of the design. The initial tests were made on the mobile, extensively and in different models, to confirm that the website was delivering what it was proposed.

    On mobile, the website was tested on the following devices:
    * Samsung 20FE
    * Iphone 13 Pro Max

    No issues were noted upon project completion.

    On tablets, the website was tested on the following device:
    * Ipad Air 4

    No issues were noted upon project completion.

    On notebooks, the website was tested on the following devices:
    * Dell Latitute 15
    * Macbook Air

    No issues were noted upon project completion.

    For the desktop tests, an Asus VX228 monitor was also used.
    No issues were noted upon project completion.
​
* Functionality - 
    * All the links on the navigation bar redirect to the correct sections of the page in a smooth transition.
    * Each image of the services section, when hovered on big screens, have an hoover effect.
    * In the form section, the name, email (inputs) and textarea are required if the user decides to send a message.
​
* Validators

. HTML [W3C HTML Validator](https://validator.w3.org/)
![W3C HTML Validator screenshot](assets/docs/images/w3c-html-validator.png)

. CSS - [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/)
​![Jigsaw CSS Validator screenshot](assets/docs/images/w3c-css-validator.png)

. Google Lighthouse
​![Google Lighthouse screenshot](assets/docs/images/lighthouse-screenshot.png)
​
## **Bugs**

Problem 🐞: Text on the hero-image unreadable on big screens.

Cause🛠: The location of the text on big screens was on the white area of the image.

Resolution✅: Another div was added in-between to provide shading when on big screens.
*** 
Problem 🐞: Page taking too long to load and impacting the performance.

Cause🛠: The original image files were too large.

Resolution✅: Images were compressed and the size reduced.​
***
Problem 🐞: Services headings unreadable.

Cause🛠: The background images are composed from different elements and colors.

Resolution✅: An span was added on the headings to provide a background color.
***
Problem 🐞: Low score on Google Lighthouse.

Cause🛠: Headers on the about us and services sections unreadable.

Resolution✅: Colors of the texts were slightly changed.
***

## **Deployment**
I deployed the page on GitHub pages via the following procedure: -
​
1. From the project's [repository](https://github.com/AlexDralur/honeypaw), go to the **Settings** tab.
2. From the left-hand menu, select the **Pages** tab.
3. Under the **Source** section, select the **Main** branch from the drop-down menu and click **Save**.
4. A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.
​
You  can find the live site via the following URL - [live webpage](https://alexdralur.github.io/honeypaw/)
***
​
## **Tech**
- HTML
- CSS
​
## **Credits**
### **Honorable mentions**
* Larissa Moura (my wife) - She was my tester and also my design guru.
* Richard Wells (my Code Institute tutor) - Help me throughout the project in all aspects.
​
### **Content:**
​
. Social media icons from footer took from FontAwesome.

. Social media HTML structure took from the Love Running project from Code Institute.
  
### **Media:**
​
Hero-image: <a href="https://www.freepik.com/free-psd/group-portrait-adorable-puppies_3730286.htm#query=PETS&position=3&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik

Services images:

. <a href="https://www.freepik.com/free-photo/happy-female-vet-smiling-petting-beautiful-beagle-dog-exam-table-professional-veterinarian-man-holding-pet-while-examining-healthy-pet-clinic_27999717.htm#query=veterinary&position=0&from_view=search&track=sph">Image by tonodiaz</a> on Freepik

. Image by <a href="https://www.freepik.com/free-photo/side-view-woman-washing-dog_31231627.htm#query=dog%20bath&position=43&from_view=search&track=ais">Freepik</a>

. <a href="https://www.freepik.com/free-photo/haircuting-process-small-dog-sits-table-dog-with-professional_17066326.htm#query=dog%20grooming&position=4&from_view=search&track=ais">Image by prostooleh</a> on Freepik

. <a href="https://www.freepik.com/free-photo/dog-bed-morning_6978017.htm#query=hotel%20dog&position=26&from_view=search&track=ais">Image by Racool_studio</a> on Freepik

Contact us image: <a href="https://www.freepik.com/free-vector/abstract-pattern-design_1049012.htm#query=pet%20patterny&position=0&from_view=search&track=ais">Image by flatart</a> on Freepiks