import { LightningElement } from 'lwc';

export default class MyHero extends LightningElement {
    handleScroll() {
        const topDiv = this.template.querySelector('[data-id="grayDiv"]');
        topDiv.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}
