# Why events ?

For a **web application** to be interactive, there needs to be a way to respond to user events

Technically this is just a callback function to register in the jsx template <br/><br/>

As I explained, Qwik is build on top of React to render the components, it's with no surprise that event have the same syntax as react with a very light difference <br/><br/>
<!-- .element: class="important" -->

##==##


<!-- .slide: class="with-code inconsolata" -->

# The comeback of the famous $

To have the maximum of performance, Qwik create a specific chunk file for each event. If you remember, to do that Qwik need the suffix $ to use
the optimizer for creating the specific chunk file <br/><br/>

With that in mind, syntax of event in Qwik will become **on{eventName}$** <br/><br/>

```tsx
export default component$(() => {
  return <button type="button" name="increment" onClick$={() => console.log('increment')}>Increment</button>
})
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# What if I want to reuse a function in multiple events ?

Cause Qwik use the optimizer to create a specific chunk for each event handler, we can't reuse a function like we can do in other framework <br/><br/>

We need to wrap the function in a **$** operator <br/><br/>

```tsx
export default component$(() => {
  const increment = $(() => console.log('increment'))
  return (
    <>
      <button type="button" name="increment" onClick$={increment}>Increment</button>
    </>
  )
})
``` 

<!-- .element: class="big-code" -->
