export const setMenuStore = (menuName: string[]) => {
  if (menuName) {
    localStorage.setItem('menuName', JSON.stringify(menuName))
  }
}

export const getMenuStore = () => {
  const menuName = localStorage.getItem('menuName')
  if (menuName) {
    try {
      return JSON.parse(menuName)
    } catch (error) {
      return []
    }
  }
  return []
}
