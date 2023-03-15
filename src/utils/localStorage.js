export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("notes")) !== null
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
};

export const updateLocalStorage = (arr) => {
  localStorage.setItem("notes", JSON.stringify(arr));
};
