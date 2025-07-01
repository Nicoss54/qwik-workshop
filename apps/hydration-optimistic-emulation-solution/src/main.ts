function initializeCounter(containerElement: HTMLDivElement, countId: string, buttonId: string) {
  const countElement = containerElement.querySelector(`#${countId}`);
  const incrementButton = containerElement.querySelector(`#${buttonId}`);
  const textContent = countElement?.textContent ?? '0';

  if (countElement && incrementButton) {
    let count = parseInt(textContent, 10);

    const handleIncrement = () => {
      count++;
      countElement.textContent = String(count);
      console.log(`Compteur "${countId}" mis à jour : ${count}`);
    };

    incrementButton.addEventListener('click', handleIncrement);
    console.log(`Compteur "${countId}" initialisé.`);
  } else {
    console.warn(
      `Impossible d'initialiser le compteur : éléments manquants pour ${countId} ou ${buttonId} dans le conteneur.`,
    );
  }
}

const DomContentLoaded = () => {
  const hydratingContainers = document.querySelectorAll<HTMLDivElement>('[data-hydrate]');
  hydratingContainers.forEach(container => {
    const hydrateType = container.dataset.hydrate;
    switch (hydrateType) {
      case 'counter-one':
        initializeCounter(container, 'count-one', 'increment-btn-one');
        break;
      case 'counter-two':
        if ('IntersectionObserver' in window) {
          const observer = new IntersectionObserver(
            (entries, observerSelf) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  console.log('Second compteur visible, hydratation en cours...');
                  initializeCounter(container, 'count-two', 'increment-btn-two');
                  observerSelf.unobserve(entry.target);
                }
              });
            },
            {
              rootMargin: '0px 0px -100px 0px',
            },
          );

          observer.observe(container);
        } else {
          console.warn('IntersectionObserver non supporté, hydratation immédiate du second compteur.');
          initializeCounter(container, 'count-two', 'increment-btn-two');
        }
        break;
      default:
        console.warn(`Type d'hydratation inconnu : ${hydrateType}`);
    }
  });
};

document.addEventListener('DOMContentLoaded', DomContentLoaded);

window.onbeforeunload = () => {
  document.removeEventListener('DOMContentLoaded', DomContentLoaded);
};
