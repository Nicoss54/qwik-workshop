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

export function qwikWorkshop() {
  return [...introduction(), ...bootstrap(), ...reactivity()];
}
