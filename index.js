//QUESTION 1

// Mutating methods are those that change the objects after a method has been used while non-mutating methods are those that don't change the object even after the methods has been used.
// 5 arrays for mutating methods are; array.prototype.push(), array.prototype.shift(),array.protype.reverse(), array.prototype.sort(),array.prototype.unshift()
//5 arrays for non-mutating methods are; prototype.slice(), prototype.concat(), prototype.filter(),prototype.map()

//QUESTION 2

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

languages.push('Kotlin');
languages.splice(3, 0, 'Java');
languages.shift();
languages.unshift('Scala', 'Swift');
languages.splice(4, 1, 'Go', 'Rust');

console.log(languages);


//Question 3
//The value of fruit after calling changeFruit will be 
//changeFruit( fruit );
		//console.log( fruit );

//QUESTION 4

function max(numbers) {
    let maxValue = -Infinity;
    for (let i=0; i< numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue=numbers[i];
        }
    }

    return maxValue;
}

// Question 5

valTimesIndex([1,2,3]) 
function valTimesIndex(arr)
    return arr.map(function(val,idx){
        return val * idx;
    });
