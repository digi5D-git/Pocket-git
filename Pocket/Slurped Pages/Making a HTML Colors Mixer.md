---
URL: https://www.instructables.com/Making-a-HTML-Colors-Mixer/
Author: Instructables
Site: Instructables
published: 22.1506
Abstract: >-
  Making a HTML Colors Mixer: A color mixer made using HTML, CSS and JavaScript
  with gliding colorful balls in the background. It is simple and easy to make.

  To take a look at this project, visit my Website -
  https://color-mixer-hritam.netlify.app/

  And the source code at GitHub …
Extracted_On: 25.1909
Web_Title: Making a HTML Colors Mixer
---

## Introduction: Making a HTML Colors Mixer

![Making a HTML Colors Mixer](https://content.instructables.com/FX8/U9D6/L4E6G7B5/FX8U9D6L4E6G7B5.png?auto=webp&crop=1.2%3A1&frame=1&width=270)![Making a HTML Colors Mixer](https://content.instructables.com/FU9/DPGN/L4E6G7CV/FU9DPGNL4E6G7CV.png?auto=webp&crop=1.2%3A1&frame=1&width=270)

A color mixer made using HTML, CSS and JavaScript with gliding colorful balls in the background. It is simple and easy to make.

To take a look at this project, visit my [Website](https://color-mixer-hritam.netlify.app/) - [https://color-mixer-hritam.netlify.app/](https://color-mixer-hritam.netlify.app/)

And the source code at GitHub repository - [https://github.com/hritam-7005/rainbow-colors](https://github.com/hritam-7005/rainbow-colors)

Google Drive - [Link](https://drive.google.com/file/d/1aRTODhRf33Ut-B_uTInjHusLZdxs_qSV/view?usp=sharing)

This Webpage is still not compatible with mobile phone screen size, but it will be fixed soon.

## Supplies

The materials you need are just few :

- A working PC

## Step 1: Pre-Required Things

It will be better if you have gone through the basic tutorials of HTML, CSS and JavaScript. Tutorial sites like [W3Schools](https://www.w3schools.com/) may help.

## Step 2: Install a Editor

![Install a Editor](https://content.instructables.com/FJH/PQ5I/L4E6G6PF/FJHPQ5IL4E6G6PF.png?auto=webp&crop=1.2%3A1&frame=1&width=270)

First step to install a text editor other than NOTEPAD or any simple text editor. I am using Microsoft Visual Studio Code as its auto suggestions etc. help me a lot. The link to install Visual Studio Code if you haven't installed it yet is given.

[Visual Studio Code](https://code.visualstudio.com/)

## Step 3: Running Your Code

![Running Your Code](https://content.instructables.com/FWK/6TZQ/L4E6G6MK/FWK6TZQL4E6G6MK.png?auto=webp&crop=1.2%3A1&frame=1&width=270)![Running Your Code](https://content.instructables.com/FYX/KO47/L4E6G6MT/FYXKO47L4E6G6MT.png?auto=webp&crop=1.2%3A1&frame=1&width=270)

To run the code in Browser one may manually open the index.html document in the browser but after each change you have to refresh it to see changes. So it will be better to install the live server extension in the VS Code and get a live preview. After installing click Go Live in the bottom bar and your browser will open.

## Step 4: Start Making It

![Start Making It](https://content.instructables.com/FIH/R2LQ/L4E6FZXH/FIHR2LQL4E6FZXH.png?auto=webp&crop=1.2%3A1&frame=1&width=270)

Create a Folder in any accessible directory, preferably in Documents, and then give it a name you like. Then open Visual Studio Code (or other editor) and open the folder.

Then Create a new file, select language HTML, and save it named as - index (.html). Then in index.html, type "!" and press enter. The basic structure of HTML will appear.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

Start Typing in the body.

First we will create the background system in which colors will move randomly. in the body section we will create a div with class name "background" and inside it we will place 14 more div 's which will be the colored circles.

<div class="background">
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="circle c3"></div>
        <div class="circle c4"></div>
        <div class="circle c5"></div>
        <div class="circle c6"></div>
        <div class="circle c7"></div>
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="circle c3"></div>
        <div class="circle c4"></div>
        <div class="circle c5"></div>
        <div class="circle c6"></div>
        <div class="circle c7"></div>
    </div>

Place this inside the body tag.

This was the fixed background. Now we need to style it. Create a new file in the same directory. Just go to File > New File. Select language CSS and save it as style (.css).

To Link this style sheet place the following code inside the head tag :

<link rel="stylesheet" href="https://www.instructables.com/Making-a-HTML-Colors-Mixer/style.css">

In the document style.css, type the following code :

.background {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    opacity: 0.4;
}
.circle {
    position: absolute;
    height: 150px;
    width: 150px;
    filter: blur(25px);
    border-radius: 30%;
    transition-duration: 5s;
}
.c1 {background-color: violet;}
.c2 {background-color: indigo;}
.c3 {background-color: blue;}
.c4 {background-color: green;}
.c5 {background-color: yellow;}
.c6 {background-color: orange;}
.c7 {background-color: red;}

.background represents the element in the html document with class name "background". Here the position of the div with class name background is set to fixed and it's left alignment is 0px, top alignment is 0px and height is 100% , the whole screen height and width is 100%, the whole screen width. Then the opacity is set to 0.5 to make it a little lighter.

Then the circles are styled and their background colors are set to the colors of the rainbow.

**If you need the source code then it is provided at the beginning and end.**

## Step 5: Create the Random Movement of Colors

![Create the Random Movement of Colors](https://content.instructables.com/FGB/XSVO/L4E6G6PZ/FGBXSVOL4E6G6PZ.png?auto=webp&crop=1.2%3A1&frame=1&width=270)

Create another file, select language JavaScript and save it as script (.js). Link it to the main page by placing the following code in the head section.

<script src="https://www.instructables.com/Making-a-HTML-Colors-Mixer/script.js"></script>

Then on the body tag, place a onload event which will trigger a function when page is loaded, like this :-

<body onload="setPos()">
...
</body>

in the script put the following code :-

var left = 0;
const circles  = document.getElementsByClassName("circle");
function setPos() {
    for (var i = 0; i<15;i++) {
        var t = 0;
        t = Math.floor(Math.random() * 90);
        left = Math.floor(Math.random() * 90);
        circles[i].style.top = t +"%";
        circles[i].style.left = left+"%";
    }
}
setInterval(glide, 2000);
function glide() {
    var i = 0;
    var j = 0;
    var k = 0;
    var t = 0;
    i = Math.floor(Math.random() * 15);
    j = Math.floor(Math.random() * 15);
    k = Math.floor(Math.random() * 15);
    t = Math.floor(Math.random() * 90);
    left = Math.floor(Math.random() * 90);
    circles[i].style.top = t +"%";
    circles[i].style.left = left+"%";
    t = Math.floor(Math.random() * 90);
    left = Math.floor(Math.random() * 90);
    circles[j].style.top = t +"%";
    circles[j].style.left = left+"%";
    t = Math.floor(Math.random() * 90);
    left = Math.floor(Math.random() * 90);
    circles[k].style.top = t +"%";
    circles[k].style.left = left+"%";
}

Explanation :-

Declaring global variable left whose value is 0.

Declare constant circles, which is a collection of all elements, which have class name "circle".

Then starting the function setPos(), which will be triggered when the page loads.

In the function block, declaring local variable t whose value is 0.

Starting a for loop which will run 14 times, with value of i from 0 to 14.

In each loop, taking a random value of "t" and "left" between 0 to 89 and setting them as the top alignment value and left alignment value of the i th element of collection circles.

So now we get all the circles in a random position.

Then typing :-

setInterval(glide, 2000);

This calls the glide() function in an interval of 2000ms.

Typing the glide() function -

Same as before, defining variables and taking random values of top and left alignment and applying them to 3 random elements from the circles -collection at a time.

The background part is done. Let's proceed to the next part.

**If you need the source code then it is provided at the beginning and end.**

## Step 6: Create the Front Page With Title

![Create the Front Page With Title](https://content.instructables.com/FV2/1NC0/L4E6G1EJ/FV21NC0L4E6G1EJ.png?auto=webp&crop=1.2%3A1&frame=1&width=270)

Come back to index.html

After the div tag of the background, put the div tag containing front page like this :-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://www.instructables.com/Making-a-HTML-Colors-Mixer/style.css">
    <script src="https://www.instructables.com/Making-a-HTML-Colors-Mixer/script.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Handlee">
</head>
<body onload="setPos()">
    <div class="background">
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="circle c3"></div>
        <div class="circle c4"></div>
        <div class="circle c5"></div>
        <div class="circle c6"></div>
        <div class="circle c7"></div>
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="circle c3"></div>
        <div class="circle c4"></div>
        <div class="circle c5"></div>
        <div class="circle c6"></div>
        <div class="circle c7"></div>
    </div>
    <div class="front-page">
        <div class="title">Color Mixer</div>
    </div>
</body>
</html>

Styling the .front-page and .title div in style.css :-

.front-page {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
}
.title {
    font-size: 50px;
    font-family: Arial;
    margin-top: 30px;
    font-weight: bold;;
}

Z-index refers to the stacking level of the element.

Now if you open the index.html file in web browser or by live server extension in VS Code, it should look like the picture attached.

## Step 7: The Main Function

Now comes the main step. Making the Color Mixer UI. Now we need some input elements. The code follows, it will be easy to understand :-

<div class="box" id="box">
<div class="colors">
    <div class="display" id="display"></div>
    <div class="rgb" id="rgb">
        <div class="rgb-slider">
            <p class="sp sp-a">
             <input type="range" step="1" class="slider aio" id="aio" oninput="colorChangeAio()" max="255" min="0">
            </p>
            <p class="sp sp-r">
             <input type="range" step="1" class="slider red" id="red" oninput="colorChange()" max="255" min="0">
            </p>
            <p class="sp sp-g">
            <input type="range" step="1" class="slider green" id="green" oninput="colorChange()" max="255" min="0">
            </p>
            <p class="sp sp-b">
             <input type="range" step="1" class="slider blue" id="blue" oninput="colorChange()" max="255" min="0">
            </p>
        </div>
        <div class="rgb-number">
         <div class="list">RGB</div>
      <input type="number" class="ti-r text-input" min="0" max="255" id="text-input-red" oninput="colorChangeNI()">
    <input type="number" class="ti-g text-input" min="0" max="255" id="text-input-green" oninput="colorChangeNI()">
     <input type="number" class="ti-b text-input" min="0" max="255" id="text-input-blue" oninput="colorChangeNI()">
        </div>
    </div>
</div>
</div>

Here just taking div elements and placing them one inside another and finally coming to the inputs. Taking three range slider inputs and three number inputs. Giving them id and class names so that we may manipulate them with JavaScript.

So, the HTML part is done. Let's proceed on to style them.

Open style.css, Type the following (~~copy-paste~~) code in the style.css document (The final documents will be attached below) :-

.box {
    z-index: 1;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
    background-color: rgba(220, 220, 220, 0.375);
}
.colors {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 1000px) {
    .box {
        width: 80%;
    }
    .colors {
        flex-direction: column;
    }
}
@media only screen and (max-width: 500px) {
    .box {
        width: 100%;
    }
}
.display {
    height: 200px;
    width: 200px;
    margin: 10px;
    border: 2px solid black;
}
.rgb {
    position: relative;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    width: fit-content;
}
.rgb-slider {
    display: flex;
    flex-direction: column;
}
.rgb-number {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
.text-input {
    margin: 10px;
    width: 70px;
    padding: 5px;
    font-size: 25px;
    font-family: Handlee;
}
.sp {
    width: 250px;
    height: 30px;
    margin: 10px;
    padding: 10px;
}
.sp-r {margin-bottom: 0px !important;}
.sp-g {margin-bottom: 0px !important;}
.slider {
    -webkit-appearance: none;
    backdrop-filter: blur(5px);
    width: 100%;
    height: 10px;
    border-radius: 5px;
}
.red {background-color: rgb(255, 150, 150);}
.green {background-color: rgb(150, 255, 150);}
.blue {background-color: rgb(150, 150, 255);}
.aio::-moz-range-thumb {background-color: rgb(150, 150, 150);}
.aio::-webkit-slider-thumb {background-color: rgb(150, 150, 150);}
.red::-moz-range-thumb {background-color: rgb(255, 100, 100);}
.red::-webkit-slider-thumb {background-color: rgb(255, 100, 100);}
.green::-moz-range-thumb {background-color: rgb(100, 255, 100);}
.green::-webkit-slider-thumb {background-color: rgb(100, 255, 100);}
.blue::-moz-range-thumb {background-color: rgb(100, 100, 255);}
.blue::-webkit-slider-thumb {background-color: rgb(100, 100, 255);}
.slider::-webkit-slider-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
}


.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    cursor: pointer;
}
.list {
    width: 70px;
    margin: 10px;
    padding: 10px;
    font-size: 25px;
    font-family: Handlee;
    background-color: white;
    border: 1px solid black;
}

In between I have used Media Queries to adjust things when screen size gets down and ::-webkit-slider-thumb, ::-moz-range-thumb etc. used to style the range slider input, -webkit for Chrome, -moz for Firefox...

Proceeding to the scripting part.

function colorChange() {
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var redValue = document.getElementById("text-input-red");
    var greenValue = document.getElementById("text-input-green");
    var blueValue = document.getElementById("text-input-blue");
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;
    redValue.value = red;
    greenValue.value = green;
    blueValue.value = blue;
    document.getElementById("box").style.backgroundColor="rgba("+red+","+green+","+blue+", 0.62)";
    document.getElementById("display").style.backgroundColor="rgb("+red+","+green+","+blue+")";
}
function colorChangeAio() {
    var aioSlider = document.getElementById("aio");
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var aio = aioSlider.value;
    redSlider.value = aio;
    greenSlider.value = aio;
    blueSlider.value = aio;
    colorChange();
}
function colorChangeNI() {
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var redValue = document.getElementById("text-input-red");
    var greenValue = document.getElementById("text-input-green");
    var blueValue = document.getElementById("text-input-blue");
    var red = redValue.value;
    var green = greenValue.value;
    var blue = blueValue.value;
    redSlider.value = red;
    greenSlider.value = green;
    blueSlider.value = blue;
    document.getElementById("box").style.backgroundColor="rgba("+red+","+green+","+blue+", 0.62)";
    document.getElementById("display").style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

These functions are to be called when input if given to the input elements. Check out in the HTML document -

<input type="range" step="1" class="slider aio" id="aio" oninput="colorChangeAio()" max="255" min="0">

The "oninput" attribute calls the function colorChange() in this case.

In all the functions, at first we declare a bunch of variables which refers to the elements in the HTML document.

Then we get the values of the different inputs (range and number) and place them as values of rgb(red, green, blue).

And it is Done !

The original webpage -

To take a look at this project, visit my [Website](https://color-mixer-hritam.netlify.app/) - [https://color-mixer-hritam.netlify.app/](https://color-mixer-hritam.netlify.app/)

The original codes are at -

GitHub - [https://github.com/hritam-7005/rainbow-colors](https://github.com/hritam-7005/rainbow-colors)

Google Drive - [Link](https://drive.google.com/file/d/1aRTODhRf33Ut-B_uTInjHusLZdxs_qSV/view?usp=sharing)

(Download and Extract it from Google Drive)

## Step 8: Use It

![Use It](https://content.instructables.com/FBX/5P71/L4E6G71V/FBX5P71L4E6G71V.png?auto=webp&crop=1.2%3A1&frame=1&width=270)

Now as it is made, you can control the red, green, blue colors and get the rgb color codes which you may use.