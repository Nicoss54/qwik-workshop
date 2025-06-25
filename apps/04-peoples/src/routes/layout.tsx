import { component$, Slot } from '@builder.io/qwik';
import { RequestEvent } from '@builder.io/qwik-city';

export const onGet = ({ cacheControl }: RequestEvent) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <main>
      <Slot />
    </main>
  );
});
