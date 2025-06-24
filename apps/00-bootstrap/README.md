# Creating Your First Qwik Component

This guide will walk you through creating your first Qwik component and integrating it into your application.

## Overview

In this tutorial, you will:

1. Create a new `HelloWorld` component in a separate file
2. Import and use the component in your root application
3. Test your changes using the development server

## Step 1: Create the HelloWorld Component

Create a new file called `hello-world.tsx` in the same directory as your `root.tsx` file (typically in `apps/00-bootstrap/src/`).

Add the following code to `hello-world.tsx`:

```tsx
import { component$ } from '@builder.io/qwik';

export const HelloWorld = component$(() => {
  return (
    <div>
      <h1>HelloWorld! </h1>
      <p> Welcome
        to
        your
        first
        Qwik
        component! 🎉</p>
    < /div>
  )
    ;
});
```

### Key Points About Qwik Components:

- **`component$()`**: This is Qwik's way of creating components. The `$` suffix indicates lazy loading
- **Export**: Make sure to export your component so it can be imported elsewhere
- **JSX**: Qwik uses JSX syntax similar to React, but with Qwik-specific optimizations

## Step 2: Import and Use the Component

Now, update your `root.tsx` file to import and use the new `HelloWorld` component.

1. Add the import statement at the top of the file:

```typescript
import { HelloWorld } from './hello-world';
```

2. Replace the text `It's time to create your first component and display your first hello world` with:

```tsx
<HelloWorld />
```

Your updated `root.tsx` should look like this:

```tsx
import { component$, useStyles$ } from '@builder.io/qwik';
import { ServiceWorkerRegister } from '@builder.io/qwik-city';

import globalStyles from './global.css?inline';
import { HelloWorld } from './hello-world';

export default component$(() => {
  /**
   * The root of a QwikCity site always starts with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <>
      <head>
        <title>Boostrap
          Step </title>
        < meta />
        <link rel="manifest"
              href="/manifest.json" />
      </head>
      <body
        lang="en">
        <HelloWorld />
        <ServiceWorkerRegister />
      </body>
    </>
  );
});
```

## Step 3: Test Your Development

Use the following commands to test your changes:

### Development Server (Hot Reload)

```bash
bunx nx serve 00-bootstrap
```

This command starts a development server with hot reload, so you can see changes instantly as you develop.

### Preview Build

```bash
bunx nx preview 00-bootstrap
```

This command builds your application for production and serves it locally, allowing you to test the optimized version.

## Expected Result

After completing these steps, you should see:

- A "Hello World!" heading
- A welcome message with a celebration emoji
- Your component is rendered in place of the original placeholder text

## Next Steps

Now that you've created your first component, you can:

- Add more props to make it dynamic
- Style your component with CSS
- Create more complex components with state and interactivity
- Explore Qwik's unique features like resumability and fine-grained reactivity

## Troubleshooting

- **Import Error**: Make sure the file path in your import statement matches the actual file location
- **Component Not Rendering**: Ensure you're using the `component$()` function correctly
- **Build Errors**: Check that all imports are correct and the syntax is valid TypeScript/JSX

Happy coding with Qwik! 🚀
