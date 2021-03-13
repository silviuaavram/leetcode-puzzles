/**
 * @param {any[]} values
 */
module.exports = function(...values) {
  if (!values || !values.length) {
    return {}
  }

  const head = {}
  let current = head

  for (let index = 0; index < values.length; index++) {
    current.val = values[index]
    current.next =  index === values.length - 1 ? null : {}
    current = current.next
  }

  return head
}
