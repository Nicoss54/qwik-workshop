# Counter Component Exercise

## Overview

In this exercise, you will learn about Qwik reactivity by replacing the existing HelloWorld component with a new Counter component.

## Instructions

### Step 1: Remove the HelloWorld Component

The current application includes a simple HelloWorld component that displays "Hello World" on the screen. Your first task is to remove this component as we'll be replacing it with our Counter component.

### Step 2: Create a Counter Component

Create a new file called `counter.tsx` in the `src` directory with a Counter component that:

- Displays a counter initialized to 0
- Includes a button that increments the counter when clicked
- Updates the display when the counter-value changes

The Counter component should use Qwik's reactivity system to manage and update the counter-state.

### Step 3: Update the Root Component

Modify the `root.tsx` file to:

- Remove the import for the HelloWorld component
- Import your new Counter component
- Replace the HelloWorld component with your Counter component in the JSX

## Verification

To verify your implementation works correctly, run the following commands:

```bash
# Start the development server
bunx nx serve 01-basics-reactivity

# OR preview the production build
bunx nx preview 01-basics-reactivity
```

Your application should now display:

1. A counter showing the initial value of 0
2. A button that, when clicked, increments the counter
3. The counter-value should update immediately when the button is clicked

## Expected Result

When you have successfully completed the exercise:

- The HelloWorld component should be removed
- The Counter component should be functioning correctly
- The counter should increment each time the button is clicked
- The UI should update to reflect the current counter-value

This exercise will help you understand the basics of Qwik's reactivity system and how to create interactive components.
