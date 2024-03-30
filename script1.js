document.addEventListener("DOMContentLoaded", function() {
  const navbarContainer = document.createElement("div");
  navbarContainer.id = "navbar-container";
  document.body.insertBefore(navbarContainer, document.body.firstChild);

  const navbarFrame = document.createElement("iframe");
  navbarFrame.src = "navbar.html";
  navbarFrame.frameBorder = "0";
  navbarFrame.width = "100%";
  navbarFrame.height = "80";
  navbarContainer.appendChild(navbarFrame);
});
