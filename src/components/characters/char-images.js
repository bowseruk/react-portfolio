import char0 from './char-0.png';
import char1 from './char-1.png';
import char2 from './char-2.png';
import char3 from './char-3.png';
import char4 from './char-4.png';
import char5 from './char-5.png';
import char6 from './char-6.png';
import char7 from './char-7.png';
import char8 from './char-8.png';
import char9 from './char-9.png';
import char10 from './char-10.png';
import char11 from './char-11.png';
import char12 from './char-12.png';
import char13 from './char-13.png';
import char14 from './char-14.png';
import char15 from './char-15.png';
import char16 from './char-16.png';
import char17 from './char-17.png';
import char18 from './char-18.png';
import char19 from './char-19.png';
import char20 from './char-20.png';
import char21 from './char-21.png';
import char22 from './char-22.png';
import char23 from './char-23.png';
import char24 from './char-24.png';
import char25 from './char-25.png';
import char26 from './char-26.png';
import char27 from './char-27.png';
import char28 from './char-28.png';
import char29 from './char-29.png';

const chars = [
    char0,
    char1,
    char2,
    char3,
    char4,
    char5,
    char6,
    char7,
    char8,
    char9,
    char10,
    char11,
    char12,
    char13,
    char14,
    char15,
    char16,
    char17,
    char18,
    char19,
    char20,
    char21,
    char22,
    char23,
    char24,
    char25,
    char26,
    char27,
    char28,
    char29
]

export default function getChar(index) {
    console.log(index % chars.length)
    return chars[((index > 0) ? index % chars.length : 0)]
}