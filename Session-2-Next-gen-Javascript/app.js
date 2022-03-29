function count() {
    document.getElementById('outputArr2').innerHTML = ''
    arr2 = document.getElementById('inputArr2').value
    arr = arr2.split("")
    arr= arr.sort()
    number = 0
    times = 0
    counting = 1
    for (let i= arr.length-1; i > 0; --i){
        if (arr[i] == arr[i-1]) {
        counting ++; }
        else {
             if (times < counting) {
                 number= arr[i]
                 times = counting
             }
        
     counting = 1
    }}
    document.getElementById('outputArr2').innerHTML += `Số ` +number +` xuất hiện nhiều nhất là `+ times +` lần`
 }