export function addToArr(arr, v) {
  if (Array.isArray(v)) arr.push(...v);
  else arr.push(v);
}

export function faMoney(data) {
  return (data / 10)
    .toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function removeDuplicatesFromArr(arr) {
  return [...new Set(arr)];
}

export function createObjWithDefaultValues(self, defaults, options) {
  const res = Object.assign({}, defaults, options);
  Object.keys(defaults).forEach((k) => {
    self[k] = res[k];
  });
}

export function deleteKeyFromObj(obj, ...keys) {
  keys.forEach((k) => {
    delete obj[k];
  });
}
