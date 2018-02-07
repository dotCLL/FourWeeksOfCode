# FourWeeksOfCode
I've set myself a challenge to code for at least half an hour every day for four weeks.

## Day 0: (JavaScript)A few HOF's(High Order Functions) mainly using filter, some and map.  


    Filter: Returns an array of all elements that return true from the passed function.  
    Some: Returns true if at least one element in the array returns true from the passed function.  
    Map: Returns an array as a result of applying the passed function to all elements in the initial array.  
    

## Day 1: (JavaScript)More HOF’s using find, reduce and every.  


    Find: Returns the first element in an array where the passed function resolves true. Otherwise returns undefined.  
    Reduce: Returns a new array that is a modification / amalgammation of the original. Essentially it flattens the data of the object to be another set of data. Example: creating a tally of all differing types within an array.  
    Every: Returns a boolean as to whether EVERY element in an array is equal. Definition of equal is proposed in the passsed function.   
    

## Day 2: (JavaScript)Stacking HOF's and using the spread operator.


    ...: The spread operator. Essentially used to spread an array or data type across input. IE instead of doing something like Math.max(list[0], list[1], list[2], so on and so forth) you can do Math.max(...list). Much easier syntax.
    
    
## Day 3: (JavaScript / Project)Stacking HOF's again. Using EVERY and SOME more specifically.


    EVERY and SOME: This is a pretty powerful combination. You can end up with a function that essentially ensures there is at least one of what your looking for in a category and then checks thorugh all of those categorys to make sure that you have one of every category you need. 
    
    
> How could you use this in development?


    Take an example where you have two lists. Say one list is a set of colours and the other is a set of sports.   
    You want the user to select at least one from each list.
    A function coupling EVERY and SOME would only return true if the user has done exactly that by running every(some( // code )). 
    The SOME function only returns true if there is at least one item selected in the list and the EVERY function only returns true if the SOME function returns true for both lists.
    
    
## Day 4: (JavaScript)Creating a deeper understanding of object manipulation and taking full advantage of Reduce().


> Basic reduce examples:


![Example of how javascript's reduce function works](https://raw.githubusercontent.com/CLLDesigns/FourWeeksOfCode/master/Resources/ReduceExample.jpg)


## Day 5: (JavaScript)Overthinking, back to basics and yes more HOF's.


    In the time I had for today I completed two challenges. Coding to solve a problem is almost always down to how you attack the problem. Today I should have finished four of the challenges but they seemed too easy so I started to over think them and kept pushing down paths using the arsenal of HOF's that I've been learning when the solutions ended up being dead simple and essentially as logical as possible. 


> Don't overthink it. Take a step back, analyse and then attack it again.


## Day 6: (JavaScript)Putting it to work to create a Photoshop script.


> Photoshop can take scripts to automate otherwise menial tasks.
  I needed a set of images that had the same foreground but a differing background for an array of colours.
  Using Photoshop to load the JavaScript file I could then export all of the pictures I needed
  ready to go for http://brushandbristle.com.au
  
  
    Annoyingly Photoshop doesn't seem to like ES6 notation so I couldn't use as much of what
    I've learned so far. It's still great to use coding to really help solve a problem
    and save a lot of my own time either way.
    
    
## Day 7: Sprint to the final challenge. Understanding .sort()


    The last set of challenges enhanced my confidence in using reduce, filter and just generally 
    understanding more about the syntax used to manipulate objects.
    The final challenge was by far the toughest.
    I was already feeling quite confident with using sort as it's quite similar to how other 
    languages employ a standard sorting algorithm. The tricky part came when I hit sorts within
    sorts. That's where I learned about localeCompare.
    
    
> Basic localeCompare. 
    
    
    Syntax: referenceString.localeCompare(compareString)
    referenceString = compareString returns 0
    referenceString < compareString returns negative number
    referenceString > compareString returns positive number


