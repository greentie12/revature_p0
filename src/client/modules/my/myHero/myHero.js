import { LightningElement } from 'lwc';

export default class MyHero extends LightningElement {
    // @api
    // isContact = false;
    // handleClick() {
    //     if (!this.isContact) {
    //         this.isContact = true;
    //     } else {
    //         this.isContact = false;
    //     }
    // }

    handleScrollCourses() {
        const topDiv = this.template.querySelector('[data-id="courseTop"]');
        topDiv.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    handleScrollHome() {
        const topHome = this.template.querySelector('[data-id="homeTop"]');
        topHome.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}
