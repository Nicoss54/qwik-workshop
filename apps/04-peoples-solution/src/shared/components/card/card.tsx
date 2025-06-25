import { component$ } from '@builder.io/qwik';
import { People } from '../../models/people';
import { Button, Card, Heading } from 'flowbite-qwik';

export interface PersonCardProps {
  person: People;
}

export const PersonCard = component$(({ person }: PersonCardProps) => {
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
