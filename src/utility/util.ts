const cursor = document.getElementById("cursor")

export function cursorHandlerAdd(cursorClassName: any) {
  if (cursor != null) {
    cursor.classList.add(cursorClassName)
  }
}
export function cursorHandlerRemove(cursorClassName: any) {
  if (cursor != null) {
    cursor.classList.remove(cursorClassName)
  }
}