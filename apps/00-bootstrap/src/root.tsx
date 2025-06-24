import { component$, useStyles$ } from '@builder.io/qwik';
import { ServiceWorkerRegister } from '@builder.io/qwik-city';

import globalStyles from './global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always starts with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <>
      <head>
        <title>Boostrap Step</title>
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
