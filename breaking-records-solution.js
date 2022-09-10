'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let max= scores[0]; // set the max score as the first element in the array
    let min =scores[0]; // set the min score as the first element in the array
    let minCount=0; // set the count of min scores
    let maxCount=0; // set the count of max scores
    let result=[]; // have an empty array for the maxCount and minCount
    for(let i=0; i<scores.length; i++){
        if(scores[i]>max){
            max = scores[i]; // everytime you go through the loop and 
            //find the scores[i] is greater than the previous scores[i] we set it as our new max
            maxCount++;
        }else if(scores[i]<min){
            min=scores[i];// everytime you go through the loop and 
            //find the scores[i] is less than the previous  scores[i] we set it as our new min
            minCount++;
            
        }
    }
    result.push(maxCount,minCount); // we push our result to the empty array
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
