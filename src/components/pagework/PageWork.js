import {PageBase} from '@core/PageBase';
import {pageWorkLayout} from '@/components/pagework/pageWorkLayout';
import {buttonEnable} from '@/components/pagework/utilPageWork';
import {state} from '@core/state';
// import {state} from '@core/state';

export class PageWork extends PageBase {
  constructor($root, quiz) {
    super($root, quiz, {
      name: 'PageWork',
      listeners: ['click'],
    });
  }

  onClick(event) {
    if (event.target.type === 'radio') {
      this.quiz.setResponse = event.target.dataset.answer;
      buttonEnable();
    }

    if (event.target.dataset.button === 'next') {
      this.quiz.next();
      if (!this.quiz.isEnd) {
        this.destroy();
        this.$root.clear();
        this.render();
      } else state.handlerNextPage();
    }
  }

  toHTML() {
    console.log(this.quiz.current());
    return pageWorkLayout(
        this.quiz.getName,
        this.quiz.current().id,
        this.quiz.getAmount,
        this.quiz.current().question,
        this.quiz.current().answers,
    );
  }
}
