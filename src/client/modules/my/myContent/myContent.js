import { LightningElement } from 'lwc';

export default class MyContent extends LightningElement {
    showCourses = false;

    handleChange() {
        if (!this.showCourses) {
            this.showCourses = true;
        } else {
            this.showCourses = false;
        }
    }

    courses = [
        {
            name: 'course1'
        },
        {
            name: 'course2'
        },
        {
            name: 'course3'
        },
        {
            name: 'course4'
        },
        {
            name: 'course5'
        },
        {
            name: 'course6'
        }
    ];

    courses2 = [
        {
            name: 'course7'
        },
        {
            name: 'course8'
        },
        {
            name: 'course9'
        },
        {
            name: 'course10'
        },
        {
            name: 'course11'
        },
        {
            name: 'course12'
        }
    ];
}
