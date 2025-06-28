# Middleware in Qwik

<br/><br/>

Qwik City comes with server middleware that allows you to centralize and chain logic such as authentication, security, caching, redirects, and logging.

##==##

<!-- .slide: class="with-code inconsolata" -->

# Define a middleware

Middleware is defined by exporting a function called onRequest (or onGet, onPost, onPut, onPatch, and onDelete)
in the layout.tsx or index.tsx file inside of src/routes folder.

```tsx
import type { RequestHandler } from '@builder.io/qwik-city';

export const onRequest: RequestHandler = async ({ next, url }) => {
  console.log('Before request', url);
  await next();
  console.log('After request', url);
};
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Intercept a specific method

If you want to intercept a specific HTTP method you can use one of these variations.
If you use both onRequest and onGet for example then both will execute but onRequest will execute before onGet in the chain. <br/><br/>

```ts
export const onGet: RequestHandler = async (requestEvent) => {
}
export const onPost: RequestHandler = async (requestEvent) => {
}
export const onPut: RequestHandler = async (requestEvent) => {
}
export const onPatch: RequestHandler = async (requestEvent) => {
}
export const onDelete: RequestHandler = async (requestEvent) => {
}
```

<!-- .element: class="big-code" -->

##==##

# Order of middleware invocation

Middleware is executed in the order they are defined in the layout.tsx or index.tsx file.

![center h-600](assets/images/middleware_invocation.png)

##==##

<!-- .slide: class="with-code inconsolata" -->

# Redirection Middleware

To redirect a request you can use the `redirect` function.

```tsx
export const onRequest: RequestHandler = async ({ redirect }) => {
  if (!isLoggedIn()) {
    throw redirect(308, '/login');
  }
};

function isLoggedIn() {
  return true;
}
```

<!-- .element: class="big-code" -->

