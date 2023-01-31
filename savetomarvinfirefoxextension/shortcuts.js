const closeShortcuts = function() {  
  window.location.href="popup.html";
};

const bButton = document.getElementById('backButton');
bButton.onclick = closeShortcuts;