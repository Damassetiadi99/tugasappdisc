const divideAndSort = (inputan) => {
  let result = [];
  let sorting = inputan.toString().split('0');
  
  for (let i = 0; i < sorting.length; i++) {
    let sortir = sorting[i].split('').sort((a, b) => a - b).join('');
    result.push(sortir);
  }

  let output = result.join('');
  console.log(output);
};

divideAndSort(5956560159466056);