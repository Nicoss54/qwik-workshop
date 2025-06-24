import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);

  return (
    <div>
      <h1>Counter: {count.value}</h1>
      <button onClick$={() => count.value++}>Increment</button>
    </div>
  );
});
