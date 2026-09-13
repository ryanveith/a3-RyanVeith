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
- **Tech Achievement 1**: I managed to get the lighthouse tests to 100%, this was harder then I thought it would be. First I did not have a description metatag for what the website was and needed to use the main tag to help organize my text better. I also did not have a high enough color constrast between background and foreground colors when using pure's default button coloring sheme. Even with this color changes I also had to increase the text size to comply with the AAA for the standars Lighthouse linked me to on color contrast https://dequeuniversity.com/rules/axe/4.12/color-contrast. Finnaly I was stuck on 99% preformance and I was worried that it because lighthouse was giving me the "Chrome extensions negatively affected this page's load performance" warning, and ocassionaly for seemingly no reason it would be down at 70% but the what was causing this was Total Blocking Time metric and I realised that of course it is blockign on needing to fetch the style sheet but because pure is so small it was only taking 250 ms and I was not realising that was the problem. Having pure-min as a part of the pubic css rather then somthing I need to load fixed this. Still have to run it in incognito or sometimes it complains. One other thing I had to do after I thought I was done was fix some layout shifting because I was not saving the size for what is adds once users data loads. I think this should be 5 points since it ook a lot more work then I thought it would when I started, partically because i also neede to get it to work for all pages and not just, home.html which is the one I had the most trouble with. 

- **Tech Achievement 2**: Use Middleware packages
List up to five Express middleware packages you used and a short (one sentence) summary of what each one does.
1 Used `npm install serve-favicon` to install serve-favicon library for middleware displaying the default fav.icon. The default given code from last project gets rid of the error but this is a bit nicer. I thougt this would be really easy and simple to implement, but when I first tried it I got a no such file or directory error in the favicon library, I am faily sure it is because windows does not know what to do, but the error  
  errno: -4058,
  code: 'ENOENT',
  syscall: 'stat', ...
  Was annoying and I thought I might be screwed but everything was working fine it was I could not spell and flipped letters so path.join was not correct names. So favicon was not finidng the file, and did not have the most helpful error code or a default to fall back to. All in all I now have a custom favicon which is cool!
2 Used `npm install body-parser`, this library just parses JSON for you, you can set it up do to a so for specific routes, but I just have it parsing everything as middleware. This is not super exiting becase express does have middleware that can do stuff like that so this is just switching it out.
3 Used `npm install cookie-session`, simple creation and reading of cookies. I started using this library because of what we dscussed in class. Then I treid to use the cookie.parser library to grab the cookeis because why not? Turns out the two librarys dont play well, they will both try to encrupt same data, both do it differenlty, it did not work. After a bit of reseach to try and find a workaroudn I did the logical thing and just choose 1. This was the one that I had for longer so it survied.

- **Tech Achievement 3**: I tried to OAuth authentication via the GitHub strategy and decided it was not worth it, 0 bonus points.

### Design/Evaluation Achievements



- **Design Achievement 1**: I followed the following tips from the W3C Web Accessibility Initiative...
