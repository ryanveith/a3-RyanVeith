Assignment 3 - Persistence: Two-tier Web Application with Database, Express server, and CSS template
===

Due: September 15th, by 1:59 PM.

This assignment continues where we left off in A2, extending it to use a popular Node.js server framework (express), a database (mongodb), and a CSS application framework / template of your choice (Bootstrap, Material Design, Semantic UI, Pure etc.)

Baseline Requirements
---

Your application is required to implement the following functionalities:

- a `Server`, created using Express (no alternatives will be accepted for this assignment)
- a `Results` functionality which shows all data associated with a logged in user (except passwords)
- a `Form/Entry` functionality which allows users to add, modify, and delete data items (must be all three!) associated with their user name / account. 
- Persistent data storage in between server sessions using [mongodb](https://www.mongodb.com/cloud/atlas) (you *must* use mongodb for this assignment). You can use either the [official mongodb node.js library](https://www.npmjs.com/package/mongodb) or use the [Mongoose library](https://www.npmjs.com/package/mongoose), which enables you to define formal schemas for your database. Please be aware that the course staff cannot provide in-depth support for use of Mongoose.  
- Use of a [CSS framework or template](https://github.com/troxler/awesome-css-frameworks). 
This should do the bulk of your styling/CSS for you and be appropriate to your application. 
For example, don't use [NES.css](https://nostalgic-css.github.io/NES.css/) (which is awesome!) unless you're creating a game or some type of retro 80s site.

Your application is required to demonstrate the use of the following concepts:  

HTML:  
- HTML input tags and form fields of various flavors (`<textarea>`, `<input>`, checkboxes, radio buttons etc.)
- HTML that can display all data *for a particular authenticated user*. Note that this is different from the last assignnment, which required the display of all data in memory on the server.

Note that it might make sense to have two pages for this assignment, one that handles login / authentication, and one that contains the rest of your application.
For example, when visiting the home page for the assignment, users could be presented with a login form. After submitting the login form, if the login is 
successful, they are taken to the main application. If they fail, they are sent back to the login to try again. For this assignment, it is acceptable to simply create 
new user accounts upon login if none exist, however, you must alert your users to this fact.  

CSS:  
- CSS styling should primarily be provided by your chosen template/framework. 
Oftentimes a great deal of care has been put into designing CSS templates; 
don't override their stylesheets unless you are extremely confident in your graphic design capabilities. 
The idea is to use CSS templates that give you a professional looking design aesthetic without requiring you to be a graphic designer yourself.

JavaScript:  
- At minimum, a small amount of front-end JavaScript to get / fetch data from the server. 
See the [previous assignment](https://github.com/cs-4241-23/shortstack) for reference.

Node.js:  
- A server using Express and a persistent database (mongodb).

General:  
- Your site should achieve at least 90% on the `Performance`, `Best Practices`, `Accessibility`, and `SEO` tests 
using Google [Lighthouse](https://developers.google.com/web/tools/lighthouse) (don't worry about the PWA test, and don't worry about scores for mobile devices).
Test early and often so that fixing problems doesn't lead to suffering at the end of the assignment. 

Deliverables
---

Do the following to complete this assignment:

1. Implement your project with the above requirements. I'd begin by converting your A2 assignment. First, change the server to use express. Then, modify the server to use mongodb instead of storing data locally. Last but not least, implement user accounts and login. User accounts and login is often the hardest part of this assignment, so budget your time accordingly.
2. Deploy your project to Render and fill in the appropriate fields in your package.json file.
3. Test your project to make sure that when someone goes to your main page on Render, it displays correctly.
4. Ensure that your project has the proper naming scheme `a3-yourfirstname-yourlastname` so we can find it.
5. Fork this repository and modify the README to the specifications below.
6. Create and submit a Pull Request to the original repo. Name the pull request using the following template: `a3-firstname-lastname`.

Achievements
---

Below are suggested technical and design achievements. You can use these to help boost your grade up to an A and customize the 
assignment to your personal interests, for a maximum twenty additional points and a maximum grade of a 100%. 
These are recommended achievements, but feel free to create/implement your own... just make sure you thoroughly describe what you did in your README, 
why it was challenging, and how many points you think the achievement should be worth. 
ALL ACHIEVEMENTS MUST BE DESCRIBED IN YOUR README IN ORDER TO GET CREDIT FOR THEM.

*Technical*
- (10 points) Implement OAuth authentication, perhaps with a library like [passport.js](http://www.passportjs.org/). 
*You must either use Github authenticaion or provide a username/password to access a dummy account*. 
Course staff cannot be expected, for example, to have a personal Facebook, Google, or Twitter account to use when grading this assignment. 
Please contact the course staff if you have any questions about this. This is the hardest achievement in Webware; you have been warned!  
- (5 points) Get 100% (not 98%, not 99%, but 100%) in all four lighthouse tests required for this assignment.
- (up to 5 points) List up to five Express middleware packages you used and a short (one sentence) summary of what each one does. THESE MUST BE SEPARATE PACKAGES THAT YOU INSTALL VIA NPM, NOT THE ONES INCLUDED WITH EXPRESS. So express.json and express.static don't count here. For a starting point on middleware, see [this list](https://expressjs.com/en/resources/middleware.html).

*Design/UX*
- (10 points) Make your site accessible using the [resources and hints available from the W3C](https://www.w3.org/WAI/), Implement/follow twelve tips from their [tips for writing](https://www.w3.org/WAI/tips/writing/), [tips for designing](https://www.w3.org/WAI/tips/designing/), and [tips for development](https://www.w3.org/WAI/tips/developing/). *Note that all twelve must require active work on your part*. 
For example, even though your page will most likely not have a captcha, you don't get this as one of your twelve tips to follow because you're effectively 
getting it "for free" without having to actively change anything about your site. 
Contact the course staff if you have any questions about what qualifies and doesn't qualify in this regard. 
List each tip that you followed and describe what you did to follow it in your site.
- (5 points) Describe how your site uses the CRAP principles in the Non-Designer's Design Book readings. 
Which element received the most emphasis (contrast) on each page? 
How did you use proximity to organize the visual information on your page? 
What design elements (colors, fonts, layouts, etc.) did you use repeatedly throughout your site? 
How did you use alignment to organize information and/or increase contrast for particular elements. 
Write a paragraph of at least 125 words *for each of the four principles* (four paragraphs, 500 words in total).

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## Your Web Application Title

A link to your project running on render.

Include a very brief summary of your project here. Images are encouraged, along with concise, high-level text. Be sure to include:

- the goal of the application
- challenges you faced in realizing the application
- what authentication strategy you chose to use and why (choosing one because it seemed the easiest to implement is perfectly acceptable)
- what CSS framework you used and why
  - include any modifications to the CSS framework you made via custom CSS you authored

## Technical Achievements
- **Tech Achievement 1**: I managed to get the lighthouse tests to 100%, this was harder then I thought it would be. First I did not have a description metatag for what the website was and needed to use the main tag to help organize my text better. I also did not have a high enough color constrast between background and foreground colors when using pure's default button coloring sheme. Even with this color changes I also had to increase the text size to comply with the AAA for the standars Lighthouse linked me to on color contrast https://dequeuniversity.com/rules/axe/4.12/color-contrast. Finnaly I was stuck on 99% preformance and I was worried that it because lighthouse was giving me the "Chrome extensions negatively affected this page's load performance" warning, and ocassionaly for seemingly no reason it would be down at 70% but the what was causing this was Total Blocking Time metric and I realised that of course it is blockign on needing to fetch the style sheet but because pure is so small it was only taking 250 ms and I was not realising that was the problem. Having pure-min as a part of the pubic css rather then somthing I need to load fixed this. Still have to run it in incognito or sometimes it complains. One other thing I had to do after I thought I was done was fix some layout shifting because I was not saving the size for what is adds once users data loads. 
I think this should be 5 points since it ook a lot more work then I thought it would when I started, partically because i also neede to get it to work for all pages and not just, home.html which is the one I had the most trouble with. 

- **Tech Achievement 2**: Use Middleware packages
List up to five Express middleware packages you used and a short (one sentence) summary of what each one does.
1 Used `npm install serve-favicon` to install serve-favicon library for middleware displaying the default fav.icon. The default given code from last project gets rid of the error but this is a bit nicer. I thougt this would be really easy and simple to implement, but when I first tried it I got a no such file or directory error in the favicon library, I am faily sure it is because windows does not know what to do, but the error  
  errno: -4058,
  code: 'ENOENT',
  syscall: 'stat', ...
  Was annoying and I thought I might be screwed but everything was working fine it was I could not spell and flipped letters so path.join was not correct names. So favicon was not finidng the file, and did not have the most helpful error code or a default to fall back to. All in all I now have a custom favicon which is cool!
2 Used `npm install body-parser`, this library just parses JSON for you, you can set it up do to a so for specific routes, but I just have it parsing everything as middleware. This is not super exiting becase express does have middleware that can do stuff like that so this is just switching it out.
3 Used `npm install cookie-session`, simple creation and reading of cookies. I started using this library because of what we dscussed in class. Then I treid to use the cookie.parser library to grab the cookeis because why not? Turns out the two librarys dont play well, they will both try to encrupt same data, both do it differenlty, it did not work. After a bit of reseach to try and find a workaroudn I did the logical thing and just choose 1. This was the one that I had for longer so it survied.
3 points for 3 total explained middle ware additions

- **Tech Achievement 3**: I tried to OAuth authentication via the GitHub strategy and decided it was not worth it, 0 bonus points.

### Design/Evaluation Achievements
- **Design Achievement 1**: I followed the following tips from the W3C Web Accessibility Initiative:
Writing:
1 Provide informative, unique page titles, before reading this I just had them both to be CS4241 Assignment 2, so I changed it to be both more descriptive and to diferentiate the login form the main page. (Scoredisplay - CS4241 Assignment 2 and Login Scoredisplay - CS4241 Assignment 2)
2 Write meaningful text alternatives for images: Quickly describe what a profile picutre in alt shows in alt text rather then just numebr the alt text pfofile picure 1 2 and so on
3 Providing clear instructions, if somthing goes wrong with login, rather then just saying login failed try agian there are seperate error messages for the account not existing and password being wrong. Also clarifying that you can't leave the username blank (theorically you can set password to "" so this is only for username)
Designing:
4 Provide sufficient contrast between foreground and background, the default color blue in the primary buttons was too close to the white text so I changed the default background color's to a darker purple to have more contrast
5 Ensure that interactive elements are easy to identify, the default input elements to have a blue highlight when you select them, but when I tested this thought that it was not very visible on the non-button elements because border size was too small and the blue as I said before was not the best contrast, so make it stand out more I added a css rule to turn the bckgudn color beige when one was focused. I also had to do a few changes for things like select, which did not play well with just the change.
6 Ensure that form elements include clearly associated labels, I was just using placeholdertext for all of my instrucions so I fixed that.
7 Provide easily identifiable feedback, in addition to the clear error messages, by returning a body that can be displayed to the user in addition to error code, using setCustomValidity there is instant feedback on if you are messing and not following instrucitons that when prompted to enter the same thing twice your answers must match. I find this very usefull for the passwords as you might have misclicked and can't see them to tell if they match.
8 Include image and media alternatives in your design, in addition to having alt text for images, I can actualy have a quick description for each image that is animal and background color rather then just having it be a choose a picture.
9 Associate a label with every form control, I already have labels for everything so just ensuring that they are the actual label element and this is fine!
10 Include alternative text for images, Having meaninful alt text already covers this but I guess I get a point for having any alt text at all and then more if it is actually usefull.
11 Use mark-up to convey meaning and structure, instead of just using div and input I actually have the correct html tags for thigns, the form is a form, also headers now exist. Mainly I am just not using span and instead go look though html tags, and replace it what whatever I feel would be most informative.
12 Reflect the reading order in the code order, This is somthing that I naturally try and to with my code since it is more readable to me. Generally I do this with nesting stuff in section's  so you can see everything an the indents help you see what is is what section. This was not hard to do since hard to make sure my code is readable anyways.
(13) Identify page language and language changes, I did not delete the lang=en part of the template so yay!
(14) Help users avoid and correct mistakes, I can't acctually try an correct the user on thier usename password without making the reason for having it pointless but erro mesages are as convinient as possible and appear where the error happends so that is best I can do without an auto-fill for password which is probably not what was inteded by this.  
I think this is worth 10 points. 

- **Design Achievement 2**: I used  the CRAP principles in the Non-Designer's Design Book reading.
You could also Call it CARP principles, though I don't actually have a fish profile picture option
The first principle is contrast there was really one 1 main thing that it came up in. Buttons, for navigation to be nice there has to both be some form of a "submit" button to progress with chaning a specific kind of data an also a back to get to the menu for what all you can change. Lucky the visual library I am using has primary buttons and normal and they look very different so it was easy to implement this. As for everything else stuff is enough of a one of the kind or all as close to excaly the same as I can get user input without making it inconveinet by making the user type a thing from a dropdown.
The second principle is repetition . Here I tried to provide unity by having options be repeating. You have inputs being repeating in the login and home page. I even tried to do this with the radio buttons of having all of them look like the same thing repeated to help make everything look unified and purposefull
The third principle is Alignment this is the prinicple I struggled with the most. I feel like I managed to do this the some with the color scheme. The other thing I tried to do of this is seperate things into sections, other then the header on the home page both login and home have a tile and I try to make everything branch out from there so it is at least in some form able to be linked back to that title.
Finally there is proximity, here I did a lot as basially everything is grouped together, input fields, data about your games. Part of making everything connected back to the header means they are naturaly grouped underneath it. The home page even has a different background color to try and group the two different sides of the page user input to change data, and then seeing current data.
I think this explination of CARP principles used on the website is worth 5 points.

Total 23 Points of Achivements Attempted.
I know 20 is the max but these are the ones I tried. Also there are fun profile pictures!