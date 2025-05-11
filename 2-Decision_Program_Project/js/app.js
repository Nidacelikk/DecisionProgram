// app.js - Olayları yönetir

import { getOptions, saveOptions, addToHistory } from "./storage.js";
import { renderOptions, renderHistory } from "./ui.js";
import { randomIndexfnct } from "./utils/randomindex.js";

const optionInput = document.getElementById("optionInput");
const optionList = document.getElementById("optionList");
const historyList = document.getElementById("historyList");
const resultDiv = document.getElementById("result-btn");

document.getElementById("addBtn").addEventListener("click", () => {
  const value = optionInput.value.trim();
  if (value) {
    getOptions().push(value);
    saveOptions();
    renderOptions(optionList);
    optionInput.value = "";
  }
});

document.getElementById("decideBtn").addEventListener("click", () => {

  const options = getOptions();
  if (options.length === 0) {
    resultDiv.classList.remove("d-none");
    resultDiv.classList.replace("alert-info", "alert-warning");
    resultDiv.textContent = "Seçenek listesi boş!";
    return;
  }

  const decision = randomIndexfnct(options);

  resultDiv.classList.remove("d-none");
  resultDiv.classList.replace("alert-warning", "alert-info");
  resultDiv.textContent = `🎯 Kararın: ${decision}`;

  addToHistory(decision);
  renderHistory(historyList); // Geçmişi yeniden render et
});


// Sayfa yüklenince çalıştır
document.addEventListener("DOMContentLoaded", () => {
  renderOptions(optionList);
  renderHistory(historyList);
});


