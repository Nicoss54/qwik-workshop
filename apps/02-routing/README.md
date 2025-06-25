# Qwik Routing Exercise

This exercise will guide you through implementing routing in a Qwik application. By the end of this exercise, you'll understand how Qwik's file-based routing system works and how to organize your application using layouts and routes.

## Objective

Transform the starter project into a properly routed Qwik application by:

1. Setting up QwikCity routing
2. Creating a layout component
3. Moving components to appropriate directories
4. Implementing file-based routing

## Step-by-Step Instructions

### Step 1: Set up QwikCity Provider

First, we need to set up the QwikCity provider in the root component:

1. Open `src/root.tsx`
2. Import the necessary components from Qwik City:

```tsx
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
```

3. Wrap your application with the `QwikCityProvider` component:

```tsx
return (
  <QwikCityProvider>
    <head>
      <title>02-Routing Project</title>
      <meta />
      <link rel="manifest" href="/manifest.json" />
    </head>
    <body lang="en">
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  </QwikCityProvider>
);
```

4. Replace the direct `Counter` component with `RouterOutlet`, which will render the appropriate route component based on the URL

### Step 2: Create a Components Directory

Organize your components by creating a dedicated component's directory:

1. Create a new directory: `src/components`
2. Create a subdirectory for the counter component: `src/components/counter`
3. Move the `counter.tsx` file from `src` to `src/components/counter/counter.tsx`
4. The counter component code remains the same

### Step 3: Create a Layout Component

Layouts in Qwik City allow you to define a consistent structure for your pages:

1. Create a new file: `src/routes/layout.tsx`
2. Implement a basic layout component:

```tsx
import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <Slot />
    </main>
  );
});
```

1. The `Slot` component is where child route content will be rendered

### Step 5: Update the Index Route

Modify the index route to use the counter component:

1. Open `src/routes/index.tsx`
2. Update it to import and use the Counter component:

```tsx
import { component$ } from '@builder.io/qwik';
import Counter from '../components/counter/counter';

export default component$(() => {
  return <Counter />;
});
```

## Key Concepts to Understand

1. **File-based Routing**: Qwik City uses a file-based routing system where the directory structure in the `routes` folder determines the URL structure of your application.

2. **Layouts**: Layout components allow you to define a consistent structure for multiple pages. The `Slot` component is used to render the child route content.

3. **QwikCityProvider**: This component is required at the root level to enable routing functionality.

4. **RouterOutlet**: This component renders the appropriate route component based on the current URL.

5. **Link Component**: For client-side navigation between routes, use the `Link` component from `@builder.io/qwik-city`.

## Testing Your Implementation

After implementing these changes, you should be able to:

1. Navigate to the root URL and see the counter component
2. If you implemented additional routes, navigate to those routes and see their content
3. Use the navigation links to move between routes without a full page reload

## Verify your work with the following commands

```bash
bunx nx serve 02-routing
```

```bash
bunx nx preview 02-routing
```

## Conclusion

By completing this exercise, you've learned how to implement routing in a Qwik application using Qwik City. You now understand how to organize your application using layouts and routes, and how to navigate between different pages.
