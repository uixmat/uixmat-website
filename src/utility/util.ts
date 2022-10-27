export function cursorHandlerAdd(cursorClassName: any) {
  const cursor = document.getElementById("cursor")
  if (cursor != null) {
    cursor.classList.add(cursorClassName)
  }
}
export function cursorHandlerRemove(cursorClassName: any) {
  const cursor = document.getElementById("cursor")
  if (cursor != null) {
    cursor.classList.remove(cursorClassName)
  }
}