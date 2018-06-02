##BITMAP TRANSFORMER LAB
Khoa Huynh and Autumn Curtis

##High-Level Overview
We created an app that takes in user input from a CLI in the following format
*Node
*Starter JS file
*A current BMP file
*New file name 
*Chosen transformation for file

##Exported Modules
*Our app module exports four functions...lighten, darken, invert and random-color


##Random Function
*The random function looks at each [i] and then subtracts the original [i] value from a randomly generated number that is multiplied by 255.  This creates an image with random pixel value.

##Invert Function
*The invert function looks at each [i] and subtracts the value (RGB) from 255, giving us an inverted image.

##Darken Function
*The darken function looks at each [i] and divides in half the value (RGB) from 255, giving us an darkened image.

##Lighten Function
*The lighten function looks at each [i] and returns the lowest number +50, if that number exceeds 50, it will return to 255... giving us a lightened image.
