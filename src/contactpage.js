/* eslint-disable no-mixed-spaces-and-tabs, import/prefer-default-export, no-param-reassign */
export const Contact = (() => {
  const loadContactPage = (contentDiv, arg) => {
    contentDiv.innerHTML = arg;
  };
  return { loadContactPage };
})();
