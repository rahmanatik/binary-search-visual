import './styles.scss';
import * as R from 'ramda';

const NUMBER_LINE_ID = 'number-line';
const numberLineTarget = () => document.getElementById(NUMBER_LINE_ID);
const SEARCH_INPUT_ID = 'search-input';
const searchInputTarget = () => document.getElementById(SEARCH_INPUT_ID);
const LIST_RANGE = 19;
const W = window as any;
const numbersArr = R.range(0, LIST_RANGE);

let activeIndex = -1;
let target = -1;
let searched = [];
let foundIndex = -1;

const reset = () => {
    activeIndex = -1;
    target = -1;
    searched = [];
    foundIndex = -1;
}

const binarySearch = (start, end) => {
    setTimeout(() => {
        activeIndex = Math.floor((start + end) / 2);
        console.log(numbersArr[activeIndex], target);
        if (numbersArr[activeIndex] === target) {
            foundIndex = activeIndex;
        } else {
            searched.push(activeIndex);
            if (numbersArr[activeIndex] > target) {
                binarySearch(start, activeIndex - 1);
            } else {
                binarySearch(activeIndex + 1, end);
            }
        }
        render();
    }, 1000);
}

const search = () => {
    reset();
    activeIndex = -1;
    const searchInput = searchInputTarget() as HTMLInputElement;
    target = Number.parseInt(searchInput.value);
    if (!target || target < 0 || target > 20) {
        return;
    }

    binarySearch(0, numbersArr.length - 1);
}

const render = (): void => {
    const numberLine = numberLineTarget();
    numberLine.innerHTML = '';
    numbersArr.forEach((x, i) => {
        const element = document.createElement('span');
        element.innerHTML = `${x}`;
        if (i === foundIndex) {
            element.classList.add('found');
        } else if (searched.indexOf(numbersArr[i]) > -1) {
            element.classList.add('searched');
        }
        numberLine.append(element);
    });
}

const main = function(): void {
    render();
}

W.search = search;

main();
