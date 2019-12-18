export const Contact = (() => {
  const loadContactPage = (contentDiv, arg) => {
    contentDiv.innerHTML = arg;
  }; 
  return { loadContactPage };
})();

