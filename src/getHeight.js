const getHeight = (document, el) => {
  let height = 0;
  if (!el.children) {
    return height;
  }
  for (let i = 0; i < el.children.length; i += 1) {
    height = Math.max(height, getHeight(document, el.children[i]) + 1);
  }
  return height;
};

export default getHeight;
