import { LightningElement } from 'lwc';

export default class MyContent extends LightningElement {
    showCourses = false;
    seeMore = 'Show more courses';

    handleChange() {
        if (!this.showCourses) {
            this.showCourses = true;
            this.seeMore = 'Show less';
        } else {
            this.showCourses = false;
            this.seeMore = 'Show more courses';
        }
    }

    courses = [
        {
            name: 'Build your first Web Page with HTML & CSS',
            level: 'Beginner',
            img: 'resources/html.png'
        },
        {
            name: 'Web Development (HTML, CSS & JS)',
            level: 'Beginner',
            img: 'resources/webdev.png'
        },
        {
            name: 'Intermediate JavaScirpt',
            level: 'Intermediate',
            img: 'resources/js.png'
        },
        {
            name: 'React - Beginner to Pro',
            level: 'Intermediate - Advanced',
            img: 'resources/react.png'
        }
    ];

    courses2 = [
        {
            name: 'Learn SQL with MySQL',
            level: 'Beginner',
            img: 'resources/sql.png'
        },
        {
            name: 'Understanding UX Design',
            level: 'Beginner - Intermediate',
            img: 'resources/ux.png'
        }
    ];
}
