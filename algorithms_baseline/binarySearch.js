function createArray(count) {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push( i*2);
    }
    return array;
 }


 function binarySearch(array, searchValue){
     let mid = Math.floor(array.length / 2);
     let max = array.length;
     let min = 0;
     while(true){
         if(array[mid] < searchValue){ // right
             min = mid;
             mid = Math.floor(min + ((max - min) / 2));
         } else if(array[mid] > searchValue){ // left
            max = mid;
            mid = Math.floor(max / 2);
         } else if(array[mid] === searchValue){
             return array[mid]
         } else if(mid <= 1){
             return false
         }
     }
 }
  
 // Инициализируем массив для поиска
 const array = createArray(50000000);
 const searchValue = 10000000;
  
 // Замерять скорость выполнения поиска через some
 console.time("some")
 const result1 = array.some(v => v === searchValue);
 console.timeEnd("some")
  console.log(result1)
 // Замерять скорость выполнения поиска через binarySearch
 // Функцию binarySearch необходимо реализовать
 // Time O(log n), Space O(1)
 console.time("binary")
 const result2 = binarySearch(array, searchValue);
 console.timeEnd("binary")
 console.log(result2)
 