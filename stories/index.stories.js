import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { UvalibMenuBar } from '../src/UvalibMenuBar.js';
import '../uvalib-menu-bar.js';

storiesOf('uvalib-menu-bar', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(UvalibMenuBar))
  .add(
    'Alternative Title',
    () => html`
      <uvalib-menu-bar .title=${'Something else'}></uvalib-menu-bar>
    `,
  );
