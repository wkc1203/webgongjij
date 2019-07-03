type mk = {
  val: string,
}

export function validate(item: mk[], fn?: (...rest: any) => any) {
  for (let index = 0; index < item.length; index++) {
    if (item[index].val === '') {
      fn && fn(item[index])
      return false
    }
  }
  return true
}