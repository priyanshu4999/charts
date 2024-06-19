function generateRandomArray(n){

    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(Math.random());
    }

} 
 
const sampleData = [
    {
    id : 1,
    year : 2016,
    gain : 80000,
    loss : 20000
    },
    {
    id : 2,
    year : 2017,
    gain : 90000,
    loss : 30000
    },
    {
    id : 3,
    year : 2018,
    gain : 100000,
    loss : 40000
    },
    {
    id : 4,
    year : 2019,
    gain : 110000,
    loss : 50000
    },
    {
    id : 5,
    year : 2020,
    gain : 120000,  
    loss : 60000
    }
]

export {sampleData , generateRandomArray}