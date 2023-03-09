import { Arguments }  from './arguments'

function convert(s: string, numRows: number) {
    if (numRows === 1) {
        return s
    }
    let refinedString = s;
    const j = s.length <= 2*numRows-1 ? (2*numRows-1)-s.length : (s.length-1) % (2*numRows-2)
    for (let i = 0; i < j; i += 1 ) {
        refinedString = refinedString.concat('$');
    }
    const index: number[] = [];
    for (let i = 0; i < refinedString.length; i += (2*numRows-2) ) {
        index.push(i);
    }
    for (let i = 0; i < index.length; i += 1) {
        if (index[i] - 1 > 0 && !index.includes(index[i]-1)) {
            index.push(index[i]-1)
        }
        if (index[i] + 1 < s.length && !index.includes(index[i]+1)) {
            index.push(index[i]+1)
        }
    }
    index.forEach((i)=> { if(refinedString[i] !== '$') { console.log(refinedString[i]) }});
}

convert(Arguments.s, Arguments.numRows);
