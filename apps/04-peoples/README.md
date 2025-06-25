# People List Exercise

## Overview

Create a responsive web application that displays a list of people in card format. Each card will show key information about a person, including their photo, name, and email. The data will be fetched from a REST API endpoint.

## Objectives

- Display person information in an attractive card format
- Fetch and display data from a REST API
- Implement proper TypeScript interfaces
- Use Qwik's built-in features for data loading

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Basic knowledge of TypeScript and React/JSX

### Project Structure

```
apps/04-peoples/
├── public/
├── src/
│   ├── shared/
│   │   └── components/
│   │       └── card/
│   │           └── card.tsx
        models/
│       └── people.ts
│   └── routes/
│       ├── index.tsx
│       ├── layout.tsx
│       └── peoples/
│           └── index.tsx
```

## Step 1: Set Up the People Interface

1. Create a new file at `src/shared/models/people.ts`
2. Define the `People` interface based on the API response structure:

```typescript
export interface People {
  id: string;
  photo: string;
  firstname: string;
  lastname: string;
  email: string;
  // Add other fields as needed
}
```

## Step 2: Create a Person Card Component

1. Create a new file at `src/shared/components/card/card.tsx`
2. Implement a card component that displays a person's information:

```tsx
import { component$ } from '@builder.io/qwik';
import { People } from '../../models/people';

export interface PersonCardProps {
  person: People;
}

export const PersonCard = component$<PersonCardProps>(({ person }) => {
  return (
    <Card class="w-1/5">
      <div class="flex flex-col items-center pb-10">
        <img alt="Bonnie image" height="96" src={person.photo} width="96" class="mb-3 rounded-full shadow-lg" />
        <Heading tag="h5" class="mb-">
          {person.firstname} {person.lastname}
        </Heading>
        <span class="text-sm text-gray-500 dark:text-gray-400">{person.email}</span>
        <div class="mt-4 flex space-x-3 lg:mt-6">
          <Button href="#">Details</Button>
          <Button href="#" color="light">
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
});
```

## Step 3: Create the People List Page

1. Create a new file at `src/routes/peoples/index.tsx`
2. Implement the page component that fetches and displays the list of people:

```tsx
import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { People } from '../../models/people';
import { PersonCard } from '../../components/card/card';

const usePeoplesLoader = routeLoader$(async () => {
  const response = await fetch('http://localhost:9000/api/peoples');
  const data: People[] = await response.json();
  return data;
});

export default component$(() => {
  const peopleSignals = usePeoplesLoader();

  return (
    <div class="people-container">
      {peopleSignals.value.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
});
```

## Step 4: Run the Application

1. Make sure the API server is running at `http://localhost:9000`
2. Start the development server:
   ```bash
   bunx nx serve 04-peoples
   ```
3. Open your browser to `http://localhost:5173`

## Bonus Features

1. **Search Functionality**: Add a search bar to filter people by name or email
2. **Pagination**: Implement pagination for large lists
3. **Sorting**: Add the ability to sort by different fields
4. **Responsive Design**: Ensure the layout works well on all screen sizes
5. **Loading States**: Add loading indicators while data is being fetched

## API Endpoint

The application will fetch data from:

```
GET http://localhost:9000/api/peoples
```

## Expected Output

The application should display a responsive grid of cards, with each card showing:

- Person's photo
- Full name
- Email address
- Any other relevant information you choose to include

## Tips

- Use Qwik's `routeLoader$` for data fetching
- Implement proper TypeScript types for better developer experience
- Make the UI responsive using CSS Grid or Flexbox
- Add error handling for API requests
- Consider accessibility when implementing the UI

## Troubleshooting

- If you see CORS errors, ensure the API server is running and properly configured
- Check the browser's developer tools for any error messages
- Verify that the API endpoint is correct and accessible

## Resources

- [Qwik Documentation](https://qwik.builder.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

Happy coding!
