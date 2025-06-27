# What this bin will generate for you

![center](assets/images/structure.png)

##==##

# whaoouuu this generates lot of thinks, let's see how it works

Qwik is a framework for building interactive server side rendering applications with a focus on speed and performance. <br/><br/>
Initially there is three important files: <br/><br/>

- **root.tsx**: this files is the root of the application tree. It's the first component that will render <br/><br/>
- **entry.ssr.tsx**: this files is the common server entry point when the application is render outside the browser. <br/><br/>
- **entry.dev.tsx**: this files is the common development entry point when the application is render as a client side rendering application. <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Content of the root.tsx

```tsx
export default component$(() => {
  return (
    <>
      <head>
        <title>00-Bootstrap Project</title>
        <meta />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body lang="en">
        It's time to create your first component and display your first hello world
        <ServiceWorkerRegister />
      </body>
    </>
  );
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Content of the entry.ssr.tsx

```tsx
export default function(opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: 'en-us',
      ...opts.containerAttributes,
    },
  });
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# What is component$?

**component$** is a function that let you create a new Qwik component. <br/><br/>
This function needs to return a "template" <br/><br/>

```tsx
export default component$(() => {
  return <></>
});
```

<!-- .element: class="big-code" -->

<br/><br/>

Why $, it will be easier to have just component in your code. <br/><br/>
<!-- .element: class="important" -->

##==##

# Dude, you can't image the importance of the $

Qwik splits up your application into many small pieces called symbols. For example a component could be broken up
into many symbols. In other words, symbol is a smaller than a component and a component is composed of many symbols. <br/><br/>

The splitting up is performed by the Qwik Optimizer.
<!-- .element: class="important" -->




