# Sysco frontend task

Frontend technical challenge from Sysco.  
Estimated time: 1-2 hours

## Assignment description:

1. Your task is to take the data from the above API and display it in a table. This is a GitHub API that returns the most popular repositories on the platform related to javascript. You need to display the name, description, URL, and number of stars.
2. We also want you to allow the user to select a programming language from a dropdown and update the table based on the response.  
   Some example languages: javascript, java, PHP, dart, go
3. Finally, we want some statistics. Display the total number of open issues count for all repositories in the given request.

You may use any of the big frameworks like Vue, Angular React, Svelte, Web Components, or just pure JS. We suggest using the one you are most comfortable in. This is not a design task, but it should still look decent.

## My solution

I solved the assignment using React JS with Material UI for the frontend components and Graph JS to display the statistics. Axios was used to fetch the JSON data from the given API.  
The app was created using 'npx create-react-app'.  
Material UI Core NPM: https://www.npmjs.com/package/@material-ui/core  
Chart JS NPM: https://www.npmjs.com/package/react-chartjs-2  
Axios NPM: https://www.npmjs.com/package/axios
