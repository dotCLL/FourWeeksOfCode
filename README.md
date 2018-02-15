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


## Day 8: (React/Redux) controlled fields, middleware and this.


    So that I can be completely prepared for my upcoming project I decided to delve into a 
    smaller project to understand the finer details of using Redux with React.
    
    Controlled fields: A controlled field is a form element where the value of the input is 
    dictated by the state of the component and not the other way around.
    
    Middleware: simply functions where actions pass through them before hitting the reducer.
    
    Binding 'this': Take the existing function, bind said function to 'this' and then replace the
    existing function with the now bound to 'this' version of that same function.
    
    
## Day 9: (React/Redux) State manipulation, promises and the exclusion of components from overall state.
    
    
    A great library to use is redux-promise. Then you can use JavaScript as you would asynchronously but
    with also having pauses in checking of data until the data is there like a true promise as you could
    use from other langauges. Check it out on npm.
    
    The only place components are supposed to get their information from is their props.
    Hence why the container uses its mapXToProps functions with Redux so that the component can just worry
    about rendering and how to handle events.
    
    Never change state directly. Always create a new version of state and overwrite the previous state. Redux is
    smart enough to know that when you call setState() there are parts that have changed and parts that haven't
    so let it do the work for efficiency first of all. Second of all it's much more predicatable and reliable.
    Reducers in Redux are pure functions("A pure function is a function where the return value is only determined 
    by its input values, without observable side effects"). By manipulating your application state directly you're
    taking away the purity of your Reducers leaving yourself open for bugs that are much harder to track down.
    
    
A quote from Dan Abramov(Co-author of Redux) regarding the why behind state manipulation.
> "...state is not deeply cloned on every action. Only the parts that changed are cloned (again, not deeply—depends on what changed). For example, when a todo is edited in TodoMVC app, only that todo object is cloned. The rest of the todo objects are the same. Of course, a root new todo list array is created, pointing to the new object, but the objects themselves are not cloned if they have not changed. Therefore it's not as expensive as it may seem. Furthermore, when it gets expensive (e.g. fast array changes), you can start using a library like Immutable.js that has very fast copying thanks to structural sharing. With Immutable.js, copying even large arrays isn't really that expensive because large chunks of the memory are reused. Finally, whether with or without Immutable.js, immutability helps us efficiently rerender the app because we know what exactly has changed thanks to the objects not being mutated."

## Day 10 / 11: (Redux) Custom Redux Actions


![Why Redux is awesome.](https://raw.githubusercontent.com/CLLDesigns/FourWeeksOfCode/master/Resources/Redux.jpg)    

    I can see just how powerful Redux can be and I think that this picture really shows how and why it should be 
    used in any system that requires a lot of component-component state changes.
    
    
## Day 12: (React/Redux) Modifying CSS with state.


    Adding on to what I discovered from the past two days, using Redux to move state around is super beneficial, even
    for smaller applications like ReactReduxWeather. I wanted to make a transition where the search bar was situated 
    in the middle of the users view and moved into position once they had decided to search. With Redux I could pass
    a state through to the components required to have their styles modified to then know when to change. Powerful.

![ReactReduxWeather w/ graphs](https://raw.githubusercontent.com/CLLDesigns/FourWeeksOfCode/master/Resources/withGraphs.jpg) 


## Day 13: (React/Redux) Redux, Middlewares, Reusable componentry and another project finished.


    The mini live weather app is finished. It's looking pretty decent and has served it's purpose of teaching me
    the basics of application level state changes using Redux with React. 
    
    Here are some of my key takeaways:
    
    **** ES6 Syntax ****
    Instead of:
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
    Do:
        const { lon, lat } = cityData.city.coord;
        
    Instead of:
        function mapStateToProps(state) {
            return {
                weather: state.weather
            };
        }
    Do:
        function mapStateToProps({ weather }) {
            return { weather };
        }

    **** React ****
    A controlled field is a form element where the value of the input is dictated by the state
    of the component and not the other way around.
    
    Ref allows to get a reference to a html element that has been rendered to the page.
        this.refs.map => direct reference to this html element.
        
    **** Redux ****
    FLOW:
        > A trigger of state change(user click, data load) results in calling an action creator.
        > The action creator returns an action.
        > The action is modified by any applicable middleware.
        > The action is also then automatically sent to all reducers.
        > All of the Reducers use that action to create their new state which will be all combined 
        together to then notify the complete application and re-render any containers that require 
        re-rendering.
    
    **** Packages ****
    axios: creates shorthand AJAX requests.
    
    redux-promise: let us use promises when using packages like AXIOS to grab data using GET requests. 
    Redux-promise helped me to cause my application to stop an action, wait for the promise to resolve and then
    once resolved it set that data as the payload and passed on that data to all of the reducers in my 
    application.
    
![ReactReduxWeather w/ maps](https://raw.githubusercontent.com/CLLDesigns/FourWeeksOfCode/master/Resources/withGMaps.jpg)


## Day 14: (React/Redux/Sketch/Invision Freehand) Component VS Container.


Building a website, app, product or solution always turns out better and can be completed much faster
with proper planning. Before I started coding up [Air](https://github.com/CLLDesigns/FourWeeksOfCode/tree/master/Air/air-app) I spent the time to break down the design I had created in Sketch into what I would see as the most logical items to work as either a standard component or a state-driven container.
    
    
> Redux docs: Presentational Component vs Container Component


| | Presentational Components | Container Components |
| --- | --- | --- |
| Purpose | How things look (markup, styles) | How things work (data fetching, state updates) |
| Aware of Redux | No | Yes |
| To read data | Read data from props | Subscribe to Redux state |
| To change data | Invoke callbacks from props | Dispatch Redux actions |
| Are written | By hand | Usually generated by React Redux |

![Sketch component vs container layout](https://raw.githubusercontent.com/CLLDesigns/FourWeeksOfCode/master/Resources/componentVsContainer.jpg)


## Day 15: (React) Component State and refs.


    I wanted to test out how a state change could bring on more CSS manipulations. The state change for the
    app will ultimately come from another component but whilst I was creating my aircraft take-off scene I
    wanted to test it as a standalone component. To do this I needed to make my component aware of the height
    of one of it's child elements. That's where refs come in.


> React; Refs and the DOM: "...there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch."


    So by passing the childs data to the components props I could then access that data to modify the scene.
    

## Day 16: (Redux) StateToProps vs DispatchToProps.


I spent most of my time with the layout of JSX and basic CSS but looked into more of the difference between Redux's functions, mapStateToProps and mapDispatchToProps and here is the best way I can outline the difference.


    ...every time your state is changed, mapStateToProps will be called with your new state and subsequently
    as your props update, your component will run its render function to re-render your component in the browser.
    mapDispatchToProps however is more about having access to the store without a local variable. This means
    that with this dispatcher referenced in the component(read container), you can call(dispatch) an action 
    creator to effect changes to state.
