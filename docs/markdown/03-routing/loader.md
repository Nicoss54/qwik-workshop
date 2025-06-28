# Route Loader

<br/><br/><br/>
Route Loaders load data in the server so it becomes available to use inside Qwik Components.
They trigger when SPA/MPA navigation happens so they can be invoked by Qwik Components during rendering.

##==##

# Constraint with route loaders

<br/><br/>

Route loaders should be exported only from layout.tsx or index.tsx files.
But they can be declared in any valid way ES modules allow.

To reuse a route loader across multiple layout.tsx or index.tsx files, define it in a separate file, export it, then import it in layout.tsxorindex.tsx files and re-export it as a named export.

##==##

<!-- .slide: class="with-code inconsolata" -->

# Example of route loader

<br/><br/>

```tsx
export const useProductDetails = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const res = await fetch(`https://fakestoreapi.com/products/${requestEvent.params.productId}`);
  const product = await res.json();
  return product as Product;
});

export default component$(() => {
  const signal = useProductDetails();
  return <p>Product name: {signal.value.product.name}</p>;
});
```

<!-- .element: class="big-code" -->
