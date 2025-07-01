function initializeCounter(containerElement: Document, countId: string, buttonId: string) {
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
  initializeCounter(document, 'count-one', 'increment-btn-one');
  initializeCounter(document, 'count-two', 'increment-btn-two'); // Le second compteur est hydraté immédiatement
  console.log('Hydratation simple complète.');
};

document.addEventListener('DOMContentLoaded', DomContentLoaded);

window.onbeforeunload = () => {
  document.removeEventListener('DOMContentLoaded', DomContentLoaded);
};
