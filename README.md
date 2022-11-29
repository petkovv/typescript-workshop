# typescript-workshop
Small application which uses google maps and Typescript to display a map on the screen with two markers on it.


This is the repo with the code we wrote together in the live demo on 28.11.2022

The Homework assignement should be created by making new branch from the main branch of this repo and when done a Pull Request (Merge Request) should be opened to the main branch.

Prerequisits: 
To run Typescript code you should install some external libraries and dependacies. I will explain how this should happen below.

First of all you will need to isntall Node which will give you the power to use Node Package Manager - npm. If you haven't got node on you computer/laptop you can follow the instructions here to be able to install it. https://nodejs.org/en/

After that you will be able to install packages from https://www.npmjs.com/ from where we will install everything we need.

1. Open Terminal if you are on Mac or a Console if you are on Windows and run the following command ---> npm install -g typescript ts-node parcel-bundler
2. Open the project via Visual Studio Code and then from the top bar of options of Visual Studio Code tap on the Terminal option and then New Terminal
3. In the opened ternimal which should be somewhere at the bottom of Visual Studio Code type the following --->
npm install faker-js @types/google.maps

After you are done with all of this you can run the project by typing in the same Visual Studio Code Terminal parcel index.html and this command should run a local server which Typescript will use to run. After that open a browser and in type http://localhost:1234 . This should run the google map in the browser with the two markers we created in the live demo. Your job is to add a popup description window on click of the marker which will explain what the marker is showing. Have fun :) 

# If any question slack me or email me at plamen.petkov@mobilewaves.com
