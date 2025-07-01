# Workshop: Emulating a Hydration Issue

Welcome to the hydration issue emulation workshop! In this exercise, you will learn about the concept of "hydration" in web development and see how it is typically handled in traditional frameworks. This will serve as a foundation for understanding the benefits of Qwik's resumability.

## What is Hydration?

Most modern web frameworks render HTML on the server to provide a fast initial page load (First Contentful Paint). However, this server-rendered HTML is not interactive. To make it interactive (e.g., to make buttons clickable), the framework needs to download the application's JavaScript and attach event listeners to the corresponding DOM elements. This process is called **hydration**.

In this exercise, we will manually implement hydration for a simple counter application.

## Your Task

Your goal is to make the two counters on the page interactive. All the work will be done in the `src/main.ts` file.

**Open `src/main.ts`**.
You will see a `initializeCounter` function that is currently empty.

**Implement the `initializeCounter` function**.
Follow the comments in the code to complete the function. You will need to:

- Use `querySelector` to get the count display element and the increment button.
- Read the initial count value from the DOM.
- Create a `count` variable.
- Add a `click` event listener to the button.
- Inside the listener, increment the `count` and update the text content of the count display element.

**Call the function for both counters**.
Inside the `DomContentLoaded` function, call `initializeCounter` for both `count-one` and `count-two`.

## Running the Application

To see your changes, run the development server:

```bash
bunx nx dev hydration-issue-emulation 
```

Navigate to the URL provided in your terminal. If you've implemented the logic correctly, both counters should now be fully interactive.

## The "Issue" with Traditional Hydration

Once you have the counters working, open your browser's developer tools and look at the console logs. You will see that both counters are initialized immediately on page load.

This demonstrates the standard "eager" hydration approach. The browser has to:

1. Download the entire `main.ts` JavaScript bundle.
2. Execute the script to attach the event listeners.

While this works perfectly for our two simple counters, imagine a large, complex application. The browser would have to download and execute a significant amount of JavaScript for every component on the page, even if the user never interacts with them. This can lead to a slow Time to Interactive (TTI) and a poor user experience.

This is the core problem that Qwik's "resumability" solves by avoiding hydration altogether.

## Solution

If you get stuck, you can find the complete code in the `@/apps/hydration-issue-emulation-solution` directory for reference.
