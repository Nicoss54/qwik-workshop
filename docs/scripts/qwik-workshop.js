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

export function qwikWorkshop() {
  return [...introduction(), ...bootstrap()];
}
