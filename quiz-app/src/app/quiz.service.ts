import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question:'How many times has India won the Cricket World Cup?',
      answer:[
        { option:'1', correct: false},
        { option:'2', correct: true},
        { option:'3', correct: false},
        { option:'4', correct: false}
      ]
    },
    {
      question:'Which Indian Costume Designer won an Oscar for their work on the film Gandhi in 1983?',
      answer:[
        { option:'Ritu Kumar', correct: false},
        { option:'Bhanu Athaiya', correct: true},
        { option:'Ritu Beri', correct: false},
        { option:'Vaishali Kasaravalli', correct: false}
      ]
    },
    {
      question:'Which of these actors was originally known as Shivaji Rao Gaekwad?',
      answer:[
        { option:'Mohanlal', correct: false},
        { option:'Mammootty', correct: false},
        { option:'Rajnikanth', correct: true},
        { option:'Vikram', correct: false}
      ]
    },
    {
      question:'Which cell phone company has the slogan, "Can you hear me now?',
      answer:[
        { option:'T-Mobile', correct: false},
        { option:'Sprint', correct: false},
        { option:'Verizon', correct: true},
        { option:'AT&T', correct: false}
      ]
    },
    {
      question:'Which of these appliances draws the most power in the house?',
      answer:[
        { option:'A/C', correct: true},
        { option:'Refrigerator', correct: false},
        { option:'Stove', correct: false},
        { option:'Washer & Dryes', correct: false}
      ]
    },  
    {
      question:'Marie Curie is well-known for her research on which element?',
      answer:[
        { option:'Radium', correct: true},
        { option:'Radon', correct: false},
        { option:'Rhodium', correct: false},
        { option:'Rubidium', correct: false}
      ]
    },
    {
      question:'Which of the following is the closest to the North Pole?',
      answer:[
        { option:'Iceland', correct: false},
        { option:'Greenland', correct: false},
        { option:'Russia', correct: false},
        { option:'Canada', correct: true}
      ]
    }, 
    {
      question:'Which of these spices is not typically used to season tacos?',
      answer:[
        { option:'Cumin', correct: false},
        { option:'Paprika', correct: false},
        { option:'Chili Powder', correct: false},
        { option:'Saffron', correct: true}
      ]
    },
    {
      question:'In the Men in Black Franchise, Will Smith plays a character named Agent _____ ?',
      answer:[
        { option:'Kay', correct: true},
        { option:'Jay', correct: false},
        { option:'Ell', correct: false},
        { option:'Dre', correct: false}
      ]
    },
    {
      question:'Which of the following is used to measure the atmospheric pressure?',
      answer:[
        { option:'Thermometer', correct: true},
        { option:'Barometer', correct: true},
        { option:'Seismometer', correct: false},
        { option:'Tropometer', correct: false}
      ]
    },   
    

  ]
  constructor() {}

  getQuizzes(){
    return this.quizzes;
  }
}
