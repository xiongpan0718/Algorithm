

function flatten(list, n){
  if(n===0) return list
  return list.reduce((prev, item) => {
    return [...prev, ...(Array.isArray(item) ? flatten(item, n - 1) : [item])]
    //   return prev.concat(flatten(item, n - 1))
    // }else{
    //   return prev.concat(item)
    // }
  }, [])
}

const arr= [1,2,3,[4,[5]],6]
console.log(flatten(arr, 1))
console.log(flatten(arr, 2))