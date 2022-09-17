//Here we will check if a user has the auth as true and if yes, show user their dashboard
//If !auth is true, then we will have to push the user back to the home page
//Here only have a text field from a form

//Then
//Create a useAuth custom hook!(what!!!? Yay!!)
//Here wrap useContext into a useAuth hook that returns the current state of a user session and also, lets you logout users from
//anywhere on the platform
//Need to move the Firebase config vars to an env file inside next and then use NEXT_PROCESS_...
//See the auth notes in the next steps doc