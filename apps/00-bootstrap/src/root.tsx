import { component$, useStyles$ } from '@builder.io/qwik';
import { ServiceWorkerRegister } from '@builder.io/qwik-city';

import globalStyles from './global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);
  return (
    <>
      <head>
        <title>00-Bootstrap Project</title>
        <meta />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body lang="en">
        It's time to create your first component and display your first hello world
        <ServiceWorkerRegister />
      </body>
    </>
  );
});
