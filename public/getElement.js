function getElement(selection) {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  }
  console.log('hello world');

  throw new Error(`No selection ${element} exist,Please check your selection and try again `)
}

export default getElement;