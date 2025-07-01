# Workshop: Optimistic Hydration Emulation

Welcome to the Optimistic Hydration workshop! In this session, you will learn how to implement an optimistic hydration strategy to improve web performance by deferring the hydration of non-critical components.

## Your Task

Your goal is to modify the existing code to achieve two things:

1. **Initial Implementation**: Complete the `initializeCounter` function to make both counters work with a simple, immediate hydration strategy.
2. **Optimistic Hydration**: Refactor your code to use an `IntersectionObserver` to delay the hydration of the second counter until it becomes visible in the viewport.

## Step-by-Step Guide

### Part 1: Basic Hydration

1. Open the `src/main.ts` file.
2. Complete the `initializeCounter` function. You need to:
  - Select the `countElement` and `incrementButton` from the `containerElement`.
  - Initialize a `count` variable from the element's text content.
  - Add a `click` event listener to the button that increments the count and updates the UI.
3. In the `DomContentLoaded` function, call `initializeCounter` for both `counter-one` and `counter-two`.

### Part 2: Optimistic Hydration

Now, let's refactor to implement optimistic hydration for the second counter.

1. In the `DomContentLoaded` function, modify the logic to handle the two counters differently.
2. For `counter-one`, the hydration should remain immediate.
3. For `counter-two`, create a new `IntersectionObserver`. The observer's callback should call `initializeCounter` for the second counter only when it enters the viewport.
4. Make sure the observer unobserves the target element after hydration to avoid unnecessary work.
5. Add a fallback for browsers that do not support `IntersectionObserver`.

## Running the Project

**Start the development server**:

```bash
   bunx nx dev hydration-optimistic-emulation
```

## Stuck? Find the Solution

If you get stuck or want to compare your work with the final version, you can find the complete solution in the following directory:

`apps/hydration-optimistic-emulation-solution`

Good luck!
