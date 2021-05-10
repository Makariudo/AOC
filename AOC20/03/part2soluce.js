import fs from "fs";
var text = fs.readFileSync("input.txt", "utf-8");
var textByLine = text.split('\n');

function getTrees(across, down) {
    let indexLog = 0;
    let downPer = down - 1;
    let acrossPer = across;
    let trees = 0;

    for (let i = 0; i < textByLine.length; i++) {
        const slopeLength = textByLine[i].length;

	if (textByLine[i][indexLog] === "#") trees++;

	indexLog = (indexLog + acrossPer) % slopeLength;

	i = i + downPer;
    }

    return trees;
}
console.log(getTrees())