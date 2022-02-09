import { LightningElement } from 'lwc';

export default class MyHero extends LightningElement {
    // function to handle the click event on the home button to smooth scroll back to top
    handleScrollCourses() {
        const topDiv = this.template.querySelector('[data-id="courseTop"]');
        topDiv.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    /*
    function to handle the click event on the courses button 
    to smooth scroll to the top of the courses compnent
    */
    handleScrollHome() {
        const topHome = this.template.querySelector('[data-id="homeTop"]');
        topHome.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}
