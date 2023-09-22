Project 8 Task for QA Engineer Path

The goal of the project was to create an automated test set to test 8, or 9, different items within the urban.routes website.

The tests included the following items:
1. Setting the address (to and from)
2. Selecting the supportive plan(tariff) from the tariff selection menu
3. Filling in the phone number
4. Adding a credit card to the payment method screen and selecting it.
    -a bug was present within this section so extra code was added to allow for the bug to be worked with for the time being.
5. Writing a message to the driver
6. Ordering a blanket and handkerchief to the order
7. Ordering 2 ice cream buckets 
8. Clicking/selecting the "Order" button to have the search modal appear.
9. *optional test* Waiting the allotted time for the driver info to appear.
    - this is added at the end as a browser pause period of 40000

Technologies and techniques used:
1. wdio automated test automation tool
2. css selectors
3. element selectors
4. devtools within chrome 
5. xpath to allow for interactin with HTML files
6. 'await' input to allow for periods of time to pass for elements to appear on screen
7. headless mode, allows for tests to be run without a broswer GUI to be launched

How to Run Tests:
Ensure the following are installed first within the project folder:
1. npm
    - done by running 'npm install' at the project folder level within the console.
2. wdio
    - done by running 'npx wdio config' at the project folder level wtihin the console.
    - follow the prompts as needed.

Prior to running the automated test ensure that the link within the wdio.conf.js is valid.
1. At the project server generator either:
 - Restart the adress to obtain a new one
 - Start the adress generator to obtain an address
2. Take the generated adress, via copy, and put it into the wdio.conf.js
 - within the wdio.conf.js file find the baseUrl variable
 - replace the current information with the newly generated url
 - save the file
* If tests do not run due to bad URL, regenerate the URL and attempt again.

Within the console.
1. cd to the hm08-qa-us folder
2. run the following command
 - npm run wdio