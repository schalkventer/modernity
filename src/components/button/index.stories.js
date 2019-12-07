import html from 'html-template-tag';
import { button } from '..';

export default { title: 'button' };

export const withText = () =>
  html`
    $${button}
  `;
