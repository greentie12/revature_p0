import { LightningElement } from 'lwc';

export default class testScroll extends LightningElement {
    handleScrollClick() {
        const topDiv = this.template.querySelector('[data-id="grayDiv"]');
        topDiv.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
    }
}
