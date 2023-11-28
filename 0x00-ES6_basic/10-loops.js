export default function appendToEachArrayValue(array, appendString) {
  const newarr = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    newarr[idx] = appendString + value;
  }

  return newarr;
}
