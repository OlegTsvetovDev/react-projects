function componentToHex(c) {
  const hex = c.toString(16)
  return (hex.length === 1) ? '0' + hex : hex
}

function rgbToHex(arr) {
  return '#' + componentToHex(arr[0]) + componentToHex(arr[1]) + componentToHex(arr[2])
}


export default rgbToHex
