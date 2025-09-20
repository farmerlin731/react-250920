console.log("hihi");
const f = document.getElementById("f");
const i = document.getElementById("i");
const u = document.getElementById("u");
const data = [];

const render = () => {
  u.innerHTML = data.map((e) => `<li>${e}</li>`).join("");
};

f.addEventListener("submit", (e) => {
  e.preventDefault();
  const v = i.value.trim();
  if (!v) return;
  data.push(v);
  i.value = "";
  render();
});
