const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
};

const remove = (items, item) => {
  const foundItemIdx = items.findIndex((element) => element === item);
  if (foundItemIdx !== -1) {
    const itemFound = items.splice(foundItemIdx, 1);
    return itemFound[0];
  }
};

export { remove, choice };
