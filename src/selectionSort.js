function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let itemsSorted = [];

  for(let i = 0; i < arr.length; i++){

    let minItem = arr[i];
    let oldIndex = i;

    for(let j = i; j < arr.length; j++){
      if(arr[j] < minItem){
        minItem = arr[j];
        oldIndex = j;
      }
    }

    arr[oldIndex] = arr[i];
    arr[i] = minItem;

  }

  return arr;
}
