// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // declare an empty array
    const chunked = [];
    
    // for loop for each element in the unchunked array
    for (let element of array) { 
        
        // retrieve the last element in 'chunked'
        const last = chunked[chunked.length - 1];
         
         // if the last element does not exist, or if its length is equal to the chunk size
        if (!last || last.length === size) {
            
            /* then push a new chunk into 'chunked' with the current element */ 
            chunked.push([element]);
            
          // Else add the current element into the chunk
           
        } else {
            last.push(element);
        }
    }
        
        return chunked;
    }

module.exports = chunk;
