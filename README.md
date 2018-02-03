# FourWeeksOfCode
I've set myself a challenge to code for at least half an hour every day for four weeks.

Day 0: (JavaScript)A few HOF's(High Order Functions) mainly using filter, some and map.  


    Filter: Returns an array of all elements that return true from the passed function.  
    Some: Returns true if at least one element in the array returns true from the passed function.  
    Map: Returns an array as a result of applying the passed function to all elements in the initial array.  
    

Day 1: (JavaScript)More HOF’s using find, reduce and every.  


    Find: Returns the first element in an array where the passed function resolves true. Otherwise returns undefined.  
    Reduce: Returns a new array that is a modification / amalgammation of the original. Essentially it flattens the data of the object to be another set of data. Example: creating a tally of all differing types within an array.  
    Every: Returns a boolean as to whether EVERY element in an array is equal. Definition of equal is proposed in the passsed function.   
    

Day 2: (JavaScript)Stacking HOF's and using the spread operator.


    ...: The spread operator. Essentially used to spread an array or data type across input. IE instead of doing something like Math.max(list[0], list[1], list[2], so on and so forth) you can do Math.max(...list). Much easier syntax.
    
    
Day 3: (JavaScript / Project)Stacking HOF's again. Using EVERY and SOME more specifically.


    EVERY and SOME: This is a pretty powerful combination. You can end up with a function that essentially ensures there is at least one of what your looking for in a category and then checks thorugh all of those categorys to make sure that you have one of every category you need. 
    
    
> How could you use this in development?


    Take an example where you have two lists. Say one list is a set of colours and the other is a set of sports.   
    You want the user to select at least one from each list.
    A function coupling EVERY and SOME would only return true if the user has done exactly that by running every(some( // code )). 
    The SOME function only returns true if there is at least one item selected in the list and the EVERY function only returns true if the SOME function returns true for both lists.
    
    
Day 4: (JavaScript)Creating a deeper understanding of object manipulation and taking full advantage of Reduce().


> Basic reduce examples:


![alt text](https://raw.githubusercontent.com/CLLDesigns/FourWeeksOfCode/master/Resources/ReduceExample.jpg)
