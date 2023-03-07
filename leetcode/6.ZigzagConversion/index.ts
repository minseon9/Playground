import { Arguments }  from './arguments'

function convert(s: string, numRows: number): string {
    const index: number[] = [];
    for (let i = 0; i < s.length; i +=(2*numRows-2) ) {
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
    index.forEach((i)=> console.log(s[i]));
}

convert(Arguments.s, Arguments.numRows);
