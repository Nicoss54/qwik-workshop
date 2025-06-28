# Which file to configured ?

- **root.tsx**: this file is the entry component of your application. it's in this file that the routing will be defined.<br/><br/>
- **layout.tsx**: This file give you the configuration of All your page, it's like your main structure

##==##

<!-- .slide: class="with-code inconsolata" -->

# QwikCityProvider: Initialize Qwik City

The **QwikCityProvider** component initializes Qwik City and provides the necessary context for your application to work correctly.<br/><br/>

```tsx
export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
})

```

<!-- .element: class="medium-code" -->

<br/><br/>

**RouterOutlet**: This component is where the navigated component of your application will be rendered.

##==##

<!-- .slide: class="with-code inconsolata" -->

# Create your main layout

**layout.tsx** file let you create the main layout of your application <br/><br/>

```tsx
export default component$(() => {
  return (
    <main>
      <Slot />
    </main>
  );
});
```

<!-- .element: class="big-code" -->

<br/><br/>

**Slot**: This component is where RouterOutlet will be rendered. 

