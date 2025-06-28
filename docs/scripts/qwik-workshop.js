function introduction() {
  return ['presentation/welcome_school.md', 'presentation/introduction.md'];
}

function bootstrap() {
  return [
    '00-bootstrap/transition_slide.md',
    '00-bootstrap/introduction.md',
    '00-bootstrap/structure.md',
    '00-bootstrap/lab.md',
  ];
}

function reactivity() {
  return ['01-reactivity/transition_slide.md', '01-reactivity/introduction.md', '01-reactivity/advanced.md'];
}

function events() {
  return ['02-events/transition_slide.md', '02-events/introduction.md', '02-events/lab.md'];
}

function routing() {
  return [
    '03-routing/transition_slide.md',
    '03-routing/introduction.md',
    '03-routing/configuration.md',
    '03-routing/lab-01.md',
    '03-routing/redirection.md',
    '03-routing/lab-02.md',
    '03-routing/loader.md',
    '03-routing/lab-03.md',
  ];
}

export function qwikWorkshop() {
  return [...introduction(), ...bootstrap(), ...reactivity(), ...events(), ...routing()];
}
