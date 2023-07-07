

const mode = () => { window.localStorage.getItem('mode');

if (mode == 'dark') {
  modeBtn.checked = true;
  document.documentElement.classList.remove("light")
  document.documentElement.classList.add("dark")
}

if (mode == 'light') {
  modeBtn.checked = false;
  document.documentElement.classList.remove("dark")
  document.documentElement.classList.add("light")

};
};


export default mode;