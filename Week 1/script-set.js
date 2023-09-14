// SET - brukes hvis vi har en array som vi kun vil ha unike verdier fra.



// const numbers = [0, 0, 0, 1, 1, 1, 2, 2, 2];

// const myNumberSet = new Set();

// for (let i = 0; i < numbers.length; i++) {
//     myNumberSet.add(numbers[i]);
// }

// console.log(myNumberSet);



//----------------------------



const transactions = [
    {
        userId: 1,
        withdraw: 100,
    },
    {
        userId: 199,
        withdraw: 1000,
    },
    {
        userId: 1,
        withdraw: 1000000,
    },
    {
        userId: 1,
        withdraw: 1000,
    },
];

const usersWhoTransacted = new Set();

for (let i = 0; i < transactions.length; i++) {
    usersWhoTransacted.add(transactions[i].userId);
}

console.log(usersWhoTransacted);