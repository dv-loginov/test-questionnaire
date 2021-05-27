import {DomListener} from '@core/DomListener';
import {$} from '@core/dom';

export class PageBase extends DomListener {
  constructor($root, quiz, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.quiz = quiz;
  }

  toHTML() {
    return ``;
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }

  getContent() {
    const $content = $.create('div', 'container');
    $content.html(this.toHTML());
    return $content;
  }

  render() {
    this.$root.append(this.getContent().$el);
    this.init();
  }
}
