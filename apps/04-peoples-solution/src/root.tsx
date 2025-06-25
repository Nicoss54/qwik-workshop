import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import { RouteHeader } from './core/components/route-header/route-header';
import globalStyles from './global.css?inline';
import { FlowbiteProvider } from 'flowbite-qwik';

export default component$(() => {
  /**
   * The root of a QwikCity site always starts with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <title>04-Peoples Project</title>
        <meta />
        <link rel="manifest" href="/manifest.json" />
        <RouteHeader />
      </head>
      <body lang="en">
        <FlowbiteProvider theme="blue">
          <RouterOutlet />
        </FlowbiteProvider>
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
