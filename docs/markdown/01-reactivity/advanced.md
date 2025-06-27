# Computed value, make your app more reactive

In Qwik, it exists two-way to create computed values <br/><br/>

- **useComputed$**: this is the preferred way to create computed value. Use it when the computed value can be derived synchronously <br/><br/>
- **useResource$**: this is for asynchronous computation. Use it when the computed value is asynchronous or the state comes from outside the application <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Example of useComputed$

<br/><br/>

```tsx
export default component$(() => {
  const count = useSignal(0);
  const doubleCount = useComputed$(() => count.value * 2);
  return (
    <>
      <h1>{doubleCount}</h1>
      <button type="button" name="increment" onClick$={() => count.value++}>
        Increment
      </button>
    </>
  );
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Example of useResource$

<br/><br/>

```tsx
import { useResource$, useSignal } from '@builder.io/qwik';
import { track } from 'mdast-util-to-markdown/lib/util/track';

export default ccomponent$(() => {
  const postId = useSignal(12);
  const post = useResource$(async () => {
    track(() => postId.value);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);
    return await response.json();
  })

  return (
    <>
      <input type="number" bind:value={postId} max={100} min={0} />
      <h1>Post#{postId}:</h1>
      <Resource
        value={postTitle}
        onPending={() => <p>Loading...</p>}
        onResolved={(post) => <h2>{post.author}</h2>}
      />
    </>
  );
})
```

<!-- .element: class="medium-code" -->




