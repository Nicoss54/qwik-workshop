import { component$ } from '@builder.io/qwik';
import Counter from '../components/counter/counter';
import { RequestEvent } from '@builder.io/qwik-city';

export const onGet = ({ redirect }: RequestEvent) => {
  throw redirect(302, '/peoples');
};

export default component$(() => {
  return <Counter />;
});
