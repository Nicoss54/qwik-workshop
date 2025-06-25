import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { People } from '../../shared/models/people';
import { PersonCard } from '../../shared/components/card/card';

const usePeoplesLoader = routeLoader$(async () => {
  const people: People[] = await (await fetch('http://localhost:9000/api/peoples')).json();
  return people;
});

export default component$(() => {
  const peopleSignals = usePeoplesLoader();
  return (
    <section class="flex flex-wrap gap-2 h-full overflow-auto">
      {peopleSignals.value.map(person => (
        <PersonCard person={person} />
      ))}
    </section>
  );
});
