import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';
import { qwikWorkshop } from './qwik-workshop.js';

function qwikWorkshopMain() {
  return qwikWorkshop().map(slidePath => ({ path: slidePath }));
}

SfeirThemeInitializer.init(qwikWorkshopMain);
