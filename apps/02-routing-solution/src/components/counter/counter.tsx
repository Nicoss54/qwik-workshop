import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const counter = useSignal(0);
  return (
    <>
      <h1>Counter: {counter.value}</h1>
      <button type="button" name="increment" onClick$={() => counter.value++}>
        Increment
      </button>
    </>
  );
});
