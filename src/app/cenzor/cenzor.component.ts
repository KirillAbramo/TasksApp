import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {

  badWords: Array<string> = [];
  badWord: string = '';
  allWordArray: Array<string> = [];
  allWord: string = '';
  placeholder = 'word here';
  placeholder2 = 'text here';
  color = 'lightskyblue';
  color2 = 'lightskyblue';
  badWordList: string;
  constructor() { }

  ngOnInit() {
  }

  addBadWords() {
    if (this.badWord === '') {
      this.color = 'red';
      this.placeholder = 'Please, write a word';
    }
    else {
      this.badWords.push(this.badWord);
      this.badWordList = this.badWords.join(', ');
      this.badWord = '';
      this.color = 'lightskyblue';

    }

  }

  addAllWords() {
    if (this.allWord == '') {
      this.color2 = 'red';
      this.placeholder2 = 'Please, write some text';
    }
    else {
      this.allWordArray = this.allWord.split(' ');
      console.log(this.allWordArray);
      for (let i = 0; i < this.allWordArray.length; i++) {
        for (let j = 0; j < this.badWords.length; j++) {
          if (this.allWordArray[i] == this.badWords[j]) {
            this.allWordArray[i] = '*'.repeat(this.allWordArray[i].length);
          }
        }
      }
      this.allWord = this.allWordArray.join(' ');
      this.color2 = 'lightskyblue';
    }

  }

  reset() {
    this.badWords.splice(0);
    this.badWordList = '';
    this.allWordArray.splice(0);
    this.allWord = '';
    this.placeholder = 'word here';
    this.placeholder2 = 'text here';
    this.color = 'lightskyblue';
    this.color2 = 'lightskyblue';
  }

}
