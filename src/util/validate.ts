type mk = {
  val: string,
  pla: string
}

export function validate(item: mk[], fn?: (...rest: any) => any) {
  console.log(111)
  for (let index = 0; index < item.length; index++) {
    if (item[index].val === '') {
      fn && fn(item[index])
      return false
    }
  }
  return true
}