# Tic-Tac-Toe Project

## Summary of Project

The purpose of this project was to increase competence with HTML, CSS, and javascript
by creating a Single Page Application that allows a user to create a user account,
make changes to that account, and create and play unique games of Tic-Tac-Toe.
My SPA allows a user to sign up and log in with a unique user email and password.
When a user is logged in, it renders an input field to change their password,
a sign out button, a new game button, and a button that allows a user to see how
many games they have played signed in under their unique user ID. A user is then
given the instruction that X will go first and they may click on any square within
the tic-tac-toe board to start a game. The moves alternate between X and O and each
move is updated through a PATCH request to a unique game ID. The game engine includes
a measure of what constitutes a win for X, a win for O, and a tie. A user is notified
of the win or tie. If they try to proceed, they are notified that they may start
a new game or sign out. All the game history is logged under their user ID as specific
individual games with unique IDs.


## User Stories

User stories include the following:

As a user, I should be able to create a unique account for the SPA that generates
a unique user token to allow for access of account data such as passwords and
game histories.

As a user, I should be able to create a unique user with an email address and password.

After the completion of each game, a message will display letting me know if I won,
the other user won, or no one won.

As a user, I will be able to log out of my account and log in as another unique user.

After each move I take, the move history will be added to the unique game history through
the API.

## Wireframes

See included as PNG files in repository under wireframes folder.

## Technologies used

I used HTML to create the buttons, input fields, and Tic-Tac-Toe board on the page.
I used bootstrap to create the 3x3 board and adjusted the borders with CSS, so
that it resembled a tic-tac-toe board. I used CSS to format the page and also
to set certain IDs or classes as having no display when a user is not logged in.
Within the HTML I created mainly classes to utilize for my work with CSS and
mainly IDs for my work with javascript and jQuery.

I used javascript to create the game engine logic. The logic determines if a user
is logged in and starts a game if they are. Using jQuery, it also pushes each individual move to
the board and also to a global game array that is assigned X's and O's at specific
indexes based on which box is clicked. The logic triggers an API PATCH request to log each
move based on it's index position and X or O value. It also logs whether the game is
over or not after each move.

API requests are also issued for when a user signs up for a new account, when they sign
in, and when they change their password. After the success of the API requests, UI is
triggered that changes the CSS display values of certain input fields and buttons as well
as hiding or showing certain messages for the user. The final API request developed was
to GET data on how many unique games were started by the user. This request is issued on
a button click and it displays as a message for the user.

## Unsolved Problems

Some issues I ran into revolved around scope and being able to adjust global
variables across mutliple files. I ran some workarounds in situations where I wasn't
able to resolve this issue. One example centers on the way that I prevented a user
from playing a game without signing in first. I had aimed to create a global variable
set as false when a user was not logged in and then flipped to true within the
sign in success UI, but I ran into difficulty making that work. Instead,
I created a method by which the function to create a new game and to start playing
a game looked at the specific user message present above the game board and if it
did not meet a certain string value, both functions would not run.

Another issue I ran into was regarding naming of classes and IDs. In some of the HTML
there are very similar ID names, especially around the input forms due to the need to
generate certain messages for each user action. That could cause confusion in the future
when looking to adjust what messages are rendered for successful of unsuccessful form
submissions.
