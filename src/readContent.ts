import Paragraph from "./paragraph";
import TypeIt from "typeit";
import {state} from './data';
import {updateStoryBook} from "./updateDOM";
import {getDate} from './date'

/*
    Function which open modals and read paragraph in cases such as:
    -Move on board and get content (puzzle/card/clue/nothing)
    -Solve puzzle
    @param {paragraph} - paragraph object
*/
export const read = (paragraph: Paragraph): void => {
  (document.querySelector(".paragraph") as HTMLElement).style.display = "block";
  (document.querySelector('.paragraph__text') as HTMLElement).innerHTML = '';
  //Slow type effect
  new TypeIt(".paragraph__text", {
    strings: `${paragraph.text}`,
    speed: 80,
    loop: false,
  }).go();

  const date: string = getDate().toString();
  state.addPage(date,paragraph.text);
  updateStoryBook();
};

/*
    Read stressCard
    @param {stressParagraphs} - array of stress paragraphs
*/

export const readStressParagraph = (stressParagraphs: string[]) : void =>{

  const index = Math.floor(Math.random() * (stressParagraphs.length));

  (document.querySelector(".paragraph") as HTMLElement).style.display = "block";
  (document.querySelector('.paragraph__text') as HTMLElement).innerHTML = '';

  //Slow type effect
  new TypeIt(".paragraph__text", {
    strings: `${stressParagraphs[index]}`,
    speed: 80,
    loop: false,
  }).go();
}

/*
    Function with notification that the solution of a puzzle is incorrect
*/
export const incorrectPuzzle = (): void => {
  console.log("Password is incorrect");
};

/*
    Notification that the player has not enough points
*/
export const notEnoughPoints = (): void => {
  console.log("Not enough points");
};

/*
    Notification that area is already explored
*/
export const areaExplored = (): void => {
  console.log("area is already explored");
};
