# Javascript One on One

Let's start by getting the necessary files for this one on one.
Please run this code in your terminal:
`bash <(curl -L http://bit.ly/2N1YZVN); cd week5OneOnOne/technical_one_on_ones/javascript/week5/AsyncJs_React`
The downloaded code contains **two** projects.
We are going to start with the H2G2 one. Go ahead and open it in your text editor (even if you use VSCode 🙄).

## The DOM
------------------------------------------------------------------

<details>
  <summary><u>Assessed Objectives</u></summary>
  
1. Explain what `asynchronous` programming stands for
1. Explain what the `DOM` is
1. Read the DOM
1. Modify the DOM
1. Listen for `events` and attach `callbacks`
1. Placing of `<script>`
</details>

------------------------------------------------------------------
## Asynchronous Javascript
------------------------------------------------------------------

<details>
<summary><u>Assesed Objectives</u></summary>
  
1. Explain what a `promise` is
1. Create an Axios request
1. Modify the DOM based on a Promise's response
</details>

------------------------------------------------------------------

### Oral Response

1. What does **asynchronous programming** mean?
1. Explain what the `DOM` is.

In the H2G2 project:
Look at the elements in the page and run the HTML. The game is simple:
  1. User clicks on start
  1. An object falls
  1. User clicks on weird button to change falling object so as to not kill the character.
As of now, falling object does not change. That's where you come in. You need to:

1. You will write your code in the `scripts.js` file.
1. First of all make sure your `scripts.js` is properly linked to your HTML document.
1. Select the falling image from the `DOM` and assign it into a variable for later usage.
1. Do the same with the _weird button_ (blue button).
1. Set an event listener that listens for a **click** event on the blue button. This event listener will take an `improbabilityDrive` callback function.
1. Now you are going to create an **arrow function**. Call this function `improbabilityDrive`.

Here you are going to use some _functions_ that have already been defined for you so please read carefully.

Inside of your `improbabilityDrive` function, you are going to do the following:

1. First, invoke the `removeClass` function (this one has already been defined). The `removeClass` function takes no arguments.
1. Then, create an `axios` request to [THIS URL](https://gist.githubusercontent.com/izzycode/5898c24e5c0a3620de5e31274a07ddab/raw/b2dcad17f163709223eafa68b83b4d6c7da88c0d/h2g2image.json).
  1. Look at the content of the response and identify the data structure at its different levels.
1. Grab a _random_ object from the **response**.
1. Now you need to call the `delayedPopSound` _pre-defined_ method. This method takes **one** argument: A "pop" sound Url.

1. Still in the method, grab the targeted image you selected earlier and:
  1. add a class of `animate-me` to it. A quick google should show you the way.
  1. assign the _random object's_ **image URL** as a value for the `src` attribute.
  1. assign the _random object's_ **name** as a value for the `alt` attribute.

- Test

You are all done with this part.

## React

------------------------------------------------------------------

<details>
  <summary><u>Assessed Objectives</u></summary>
  
1. Create a component
1. Create a component as a function
1. Write JSX and render HTML from component
1. Passing data between components using props
1. Update a Component's State
1. Add CSS to a Component
</details>

------------------------------------------------------------------

Time to switch to your second project. Change directories into the `TicTacToe` folder you downloaded earlier.
Now you are handed an incomplete game. As you can see the game's functionality is incomplete and is missing a player turn message, as well as the winner message.

### Components
First things first. We need to toggle between players after each play. After a click event in every `<Box/>` component, some events take place:
  a) the play is saved to the corresponding player
  b) the game needs to check if anybody won. If nobody won, the current player needs to switch.
In order to switch players, just define an object with two properties where the property names are the names of the players ("Cross", "Circle") and their values are the names of the opposite player. Assign the new `player` state using your object and the current value of the `player` **state** as property key.
- Test it

Now we need to add some messages. Look at your `<ScoreBoard />` component. Inside of the return (or in a separate method called from within, it's up to you) show a `<PlayerTurnMessage />` component that takes the `player` value as a prop if the `winner` `prop` is null, otherwise it shows the `<WinnerMessage />` component. `<WinnerMessage />` takes the value of winner as a prop.
The final product should look like this:

![game design 1](https://i.imgur.com/wGCXEyi.png)
![game design 2](https://i.imgur.com/SkTBq5p.png)

- Since these components will only **render** JSX, we will declare them as functions.

- In order for your text to look like the images. Use the predefined `neon` class on your text container. This class is in the `Neon.css` file in the `css` folder.
