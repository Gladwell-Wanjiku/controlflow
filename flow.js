function myNumbers(arr){
    const fourNums = arr.slice(0,4).map(
        item => item*item);
        console.log(fourNums)
        const lastNums = arr.slice(-2).map(
            item =>item+10);
            const middleNum = arr.slice(4,-2)
            const newArr = fourNums
            +(middleNum)+(
                lastNums)
                console.log(newArr)
}
myNumbers([11,12,13,14,15,16])

//2
let arrayNum = [1,2,3,4,5,6,7,8,9];
let i= 0;
while(i<arrayNum.length){
    if (arrayNum[i]===arrayNum[3]){
        break;
    }
    console.log(arrayNum[i]);
    i++;
}

//3
function thisFruits(arr){
    for (let i=0; i<arr.length; i ++){
        if (i===1){
            continue;
        }
        console.log(arr[i]);
    }
}
let fruits = ['apple','plum', 'banana','strawberries','kiwi']
thisFruits(fruits)

//4
function stringArr(arr){
    for (let i = 0; i<arr.length;i++){
        console.log(`names; ${arr[i]}`);
    }
}
let colors = ["purple", "maroon", "white", "gold"]
stringArr(colors);

//5
function stringReverse(String){
    let stringReverse = ""
    var i = String.length -1;
    while (i>=0){
        stringReverse += String[i];
        i--;
    }
    return stringReverse;
}
let originalStr = 'javascript';
let m = stringReverse(originalStr);
console.log(m);
