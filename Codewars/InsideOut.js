function insideOut(x){
    return x.split(' ').map(el => {
      let arr = el.split('');
      return (arr.length % 2 === 0) ? arr.slice(0, arr.length/2).reverse().join('') + arr.slice(arr.length/2).reverse().join('')
      : arr.slice(0, Math.floor(arr.length/2)).reverse().join('') + arr[Math.floor(arr.length/2)] + arr.slice(Math.ceil(arr.length/2)).reverse().join('') 
    }).join(' ');
  }