let dataSet = [10, 5, 3, 6, 2, 14];

const findIndex = (searchElement) => {
    for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

// insertAt (10, 3)
const insertAt = (data, index) => {
    for (let i = dataSet.length; i > index; i--) {
        dataSet[i] = dataSet[i-1];
    }
    dataSet[index] = data;
}

const reverse = () => {
    let end = dataSet.length-1;
    let temp = null;

    for (let i= 0,j = end; i < j; i++, j--) {
        temp = dataSet[i];
        dataSet[i] = dataSet[j];
        dataSet[j] = temp;
    }
}

insertAt(10, 3);
console.log(...dataSet);

reverse();
console.log(...dataSet);