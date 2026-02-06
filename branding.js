/**
 * Berachain branding override - replaces Mintlify Starter Kit text in topbar
 * Mintlify loads .js files from the content directory on every page
 */
(function () {
  function replaceTopbarText() {
    var textNodes = [];
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    var node;
    while ((node = walker.nextNode())) {
      if (node.textContent && node.textContent.includes("Mintlify Starter Kit")) {
        node.textContent = node.textContent.replace(/Mintlify Starter Kit/g, "Berachain");
      }
      if (node.textContent && node.textContent.includes("Mint Starter Kit")) {
        node.textContent = node.textContent.replace(/Mint Starter Kit/g, "Berachain");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", replaceTopbarText);
  } else {
    replaceTopbarText();
  }

  // Also run after a short delay for dynamically rendered content
  setTimeout(replaceTopbarText, 500);
  setTimeout(replaceTopbarText, 1500);
})();
