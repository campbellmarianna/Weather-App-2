# Weather My Mood - Weather App
1. Using the weather API return the weather associated with a given mood
2. Is the weather output an integer, string or both? Integers
    - What is the data type of the input? String
    - How many moods can a user input? For the number of temperatures there are
    - What if I'm given a number what should be the output? Invalid Input Error Message (only if you have extra time)
3. Stating Assumptions
    - String -> Integer
    - I: Mood -> O: Weather
3. Brainstorm solutions
    - Provide user with a list of words they can use to describe their mood and have those strings associated with temperatures - using a dictionary
    - Use Binary Search have three temperature descriptions and depending on the first letter of the input using BS determine (using alphabetical order) if it is Very Hot, Cool, or Very Cold
    - Depending on the number of weather and moods grow beyond 10 we can use a hash table to story the information
4. Explain my rationale
    - Specify how much data were going to contain, direct connect mood to weather
    - Reduce the amount of data to be searched and make it a faster experience
    - Make the search faster for the user
5. Discuss tradeoffs
    - Linear time and works for smaller amounts of data but is very slow for large amounts
    - Will work and be faster but don’t  handle lots of data
    - The searching via may not be as useful depending on the data we have
6. Suggest improvements
    - Use BS (log)  and figure out a way to handle more data by depending on the input mood search to different dictionaries or lists for the mood (linear)
7. Generate reasonable test inputs
    - ‘Very Happy’ -> 80°
    - 'Extremely Angry' -> 0°
    - 'Cool' -> 50°
8. Understand the problem - Solve it!
    - Simplify the problem if needed
9. Find a pattern in your solution
    - Checking each variable for the
10. Make a plan - Write pseudocode
    - Found in app.js
11. Follow your plan - Write real code
12. Check your work - Test your code

Notes:
- Implement a Giphy in your README to show that it works
- Give time complexity analysis and suggestions on how to make it (the app) better

Goal: Finish in 2 hours

## Requirements
- use backend framework
- use OpenWeatherMap API

JavaScript:
Pro:
- It will improve my JavaScript skills for building mobile apps in React Native (JavaScript)
- Have Projects to reference - Implement an API pull, gain user input, return output before

Con:
- learning curve associated moods with API data

Python:
Pro:
- Run in terminal (Don't have to deploy)
- Have Code files to reference - loop through data to get return a value

Con:
- Learning curve to implement API
