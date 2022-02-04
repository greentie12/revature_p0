import { LightningElement } from 'lwc';

export default class MyReviews extends LightningElement {
    reviews = [
        {
            headline: 'Great tutor!',
            review: 'Had a great time during my tutoring session with Taino. He is very kind, patient, and smart! I would definitely recommend him to anyone who is in need of web design help.',
            student: 'Charles, 8 lessons in',
            topic: ' Web Development'
        },
        {
            headline: 'Very perceptive',
            review: 'Taino was very knowledgeable in the subject. He was also easy to understand. He slowed down the explanation when I needed it as well as the opposite. I understand the subject much clearer now and if I have any more questions I will most likely be asking him for help again.',
            student: 'John, 1 lesson in',
            topic: ' JavaScript & React'
        },
        {
            headline: 'Knowledgeable and Accommodating',
            review: 'Taino and I went over HTML coding and CSS styling. He provided me with multiple ways to solve the problem I was running into and also taught me about CSS in the process. He is able to meet students where they are and is incredibly patient in his explanations for why code should be structured a certain way. I appreciated his help and will be working with him long-term now.',
            student: 'Daniel, 3 lessons in',
            topic: ' Web Development'
        },
        {
            headline: 'Patient Tutor',
            review: 'Taino came prepared to help me complete my project. He took the time to explain everything that we had done which made me feel as though I actually learned something to take forward in the future. Thanks again Taino',
            student: 'Anthony, 7 lessons in',
            topic: ' React & SASS'
        }
    ];
}
