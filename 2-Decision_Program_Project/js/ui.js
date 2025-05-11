// ui.js - Arayüzü güncelleme


import { getOptions, saveOptions, getHistory } from "./storage.js";

export const renderOptions = (optionList) => {
  optionList.innerHTML = "";
  
  getOptions().forEach((opt, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = opt;

    const btn = document.createElement("button");
    btn.className = "btn btn-danger btn-sm";
    btn.textContent = "Sil";
    btn.onclick = () => {
      const options = getOptions();
      options.splice(index, 1);
      saveOptions();
      renderOptions(optionList);
    };

    li.appendChild(btn);
    optionList.appendChild(li);
  });
};

export const renderHistory = (historyList) => {
  historyList.innerHTML = "";
  const history = getHistory();
  history.slice().reverse().forEach((record) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `🎯 ${record.text} (${record.date})`;
    historyList.appendChild(li);
  });
};

                      