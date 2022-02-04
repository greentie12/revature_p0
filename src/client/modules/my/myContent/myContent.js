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

    courseInfo(e) {
        console.log(e.target.textContent);
        e.target.textContent = 'Description here';
    }

    courses = [
        {
            id: 1,
            name: 'Your first Web Page with HTML & CSS',
            level: 'Beginner',
            img: 'resources/html.png',
            info: 'This is the info section'
        },
        {
            id: 2,
            name: 'Web Development (HTML, CSS & JS)',
            level: 'Beginner',
            img: 'resources/webdev.png'
        },
        {
            id: 3,
            name: 'Intermediate JavaScript',
            level: 'Intermediate',
            img: 'resources/js.png'
        },
        {
            id: 4,
            name: 'React - Beginner to Advanced',
            level: 'Intermediate - Advanced',
            img: 'resources/react.png'
        }
    ];

    courses2 = [
        {
            id: 5,
            name: 'Learn SQL with PostgreSQL',
            level: 'Beginner',
            img: 'resources/sql.png'
        },
        {
            id: 6,
            name: 'Understanding UX Design',
            level: 'Beginner - Intermediate',
            img: 'resources/ux.png'
        }
    ];
}
