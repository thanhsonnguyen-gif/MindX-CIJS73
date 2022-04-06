function count() {
  document.getElementById("outputArr3").innerHTML = "";
  arr2 = document.getElementById("inputArr3").value;
  arr = arr2.split("");
  arr = arr.sort();
  let M =[0,0];
  let counter =1;
  for (let i = arr.length - 1; i > 0; --i) {
    if (arr[i] == arr[i - 1]) {
      counter++;
    } else {
      if (M[0] < counter) {
        M[1] = arr[i];
        M[0] = counter;
      }

      counter = 1;
    }
  }
  document.getElementById("outputArr3").innerHTML +=
    `Số ` + M[1] + ` xuất hiện nhiều nhất là ` + M[0] + ` lần`;
}

function reverseString() {
  document.getElementById("reverseString").innerHTML = "";
  let inputstring = document.getElementById("inputText").value;
  document.getElementById("reverseString").innerHTML += inputstring
    .split("")
    .reverse()
    .join("");
}

function uniqueArr() {
  document.getElementById("UniqueArr").innerHTML = "";
  let inputArr = document.getElementById("inputArr").value;
  let arrOld = inputArr.split("");
  let setArr = new Set(arrOld);
  let newArr = [...setArr];
  document.getElementById("UniqueArr").innerHTML += newArr.join("");
}