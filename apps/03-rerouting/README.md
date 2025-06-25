# Exercise: Automatic Redirection in Qwik

## Objective
The goal of this exercise is to implement an automatic redirection from the root URL (`/`) to the `/peoples` page when someone visits the application.

## Prerequisites
- Basic understanding of Qwik framework
- Familiarity with routing in Qwik applications

## Exercise Steps

1. **Understand the Current Structure**
   - The application has a root route (`/`) that currently renders a `Counter` component
   - The goal is to automatically redirect visitors from the root URL to the `/peoples` page

2. **Implementation Steps**:
   - In the `src/routes/index.tsx` file, you'll need to:
     1. Import the necessary modules for handling the request and redirection
     2. Implement the `onGet` function to handle the GET request
     3. Use the `redirect` function to redirect to the `/peoples` route

3. **Key Concepts**:
   - **Server-Side Handling**: The redirection happens on the server side before any client-side code is executed
   - **HTTP Status Code**: Use status code `302` for temporary redirects
   - **Route Handlers**: Qwik uses route handlers like `onGet` to handle HTTP methods

4. **Verification**:
   - Start the development server
   - Visit the root URL (`/`)
   - The browser should automatically redirect to `/peoples`

## Solution Overview
The solution involves adding an `onGet` handler to the root route that performs the redirection:

```tsx
import { RequestEvent } from '@builder.io/qwik-city';

export const onGet = ({ redirect }: RequestEvent) => {
  throw redirect(302, '/peoples');
};
```

## Key Learning Points
- How to handle server-side redirects in Qwik
- The use of route handlers in Qwik applications
- Understanding the difference between client-side and server-side routing
- Proper use of HTTP status codes for redirections

## Additional Notes
- The redirection happens before any client-side JavaScript is loaded, making it efficient
- The `302` status code indicates a temporary redirect, which is appropriate for this use case
- Make sure to test the redirection in different scenarios (direct navigation, page refresh, etc.)

## Next Steps
- Try implementing client-side navigation using the `useNavigate` hook
- Explore other route handlers like `onPost`, `onPut`, etc.
- Learn about route guards and authentication patterns in Qwik