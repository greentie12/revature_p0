import { LightningElement } from 'lwc';

export default class MyTutor extends LightningElement {
    isContact = false;
    seeMore = 'Contact Me';

    handleChange() {
        if (!this.isContact) {
            this.isContact = true;
            this.seeMore = 'Close Form';
        } else {
            this.isContact = false;
            this.seeMore = 'Contact Me';
        }
    }
}
