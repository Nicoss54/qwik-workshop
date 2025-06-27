# The different kind of reactivity

The reactivity is an important part of a Qwik application. <br/><br/>
There are two different types of reactivity: <br/><br/>

- **static**: anything that can be serialized (string, number, object, array) <br/><br/>
- **dynamic**: create with the help of the function useSignal and useStore <br/><br/>

Please keep in mind that state in Qwik is not always a local state of a component, but could an app state more global
<!-- .element: class="important" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# UseSignal: a simple way to create dynamic variable

**useSignal** is a function that create a reactive signal <br/><br/>
**Reactive signal** is a kind of form state in other word it's a variable which is reactive;

- the return of useSignal is an object with a property value (value of the signal) <br/><br/>
- if you update the value, all component dependent on this signal will be updated <br/><br/>

```tsx
const count = useSignal(0);
const increment = () => {
  count.value++;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Best practice and antipatterns

```tsx
export default component$(() => {
  const count = useSignal(0);
  return (
    <>
      <!-- BAD PRACTICE -->
      <DisplayCount count={count} />
      <!-- GOOD PRACTICE -->
      <DisplayCount count={count.value} />
    </>
  );
});
```

<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="with-code inconsolata" -->

# UseStore, to declare reactive object

**UseStore** works very similar to useSignal but instead of taking a simple value, it takes an object as initial value , it returns a reactive object. <br/><br/>

Reactivity is propagated to the nested object and array by default. <br/><br/>

```tsx
export default component$(() => {
  const store = useStore({ count: 0 });
  const store2 = useStore(() => ({ disabled: true }))
  return (
    <>
      <h1>{store.count}</h1>
      <button type="button" name="increment" disabled={store2.disabled} onClick$={() => store.count++}>Increment</button>
    </>
  );
});
``` 

<!-- .element: class="big-code" -->

##==##

# useStore and the rerender

As explained above, useStore by default propagate the reactivity to the nested object and array. <br/><br/>
This means two important things: <br/><br/>

- if a property ot the nested object is updated, the component will be re-rendered <br/><br/>
- if the array is updated the component will be re-rendered <br/><br/>
  - **push** will trigger a rerender <br/><br/>
  - **splice** will trigger a rerender <br/><br/>
  - **map** will trigger a rerender <br/><br/>
  - **filter** will trigger a rerender <br/><br/>
  - **sort** will trigger a rerender <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Let have a concrete example

```tsx
export default component$(() => {
  const store = useStore({ user: { name: 'Nicolas', age: 30 }, hobbits: ['development'] });
  return (
    <>
      <h1>{store.user.name}</h1>
      <button type="button" name="update-name" onClick$={() => store.user.name = 'John'}>Change the name</button>
      <!-- This will trigger a rerender cause the name property is tracked by the reactivity -->
      <button type="button" name="ad a new hobbit" onClick$={() => store.hobbits.push('new hobbit')}>Add a new hobbit</button>
      <!-- This will trigger a rerender cause the hobbits array is tracked by the reactivity -->
      <ul>
        {store.hobbits.map((hobbit) => (
          <li>{hobbit}</li>
        ))}
      </ul>
    </>
  )
})
```

<!-- .element: class="big-code" -->


