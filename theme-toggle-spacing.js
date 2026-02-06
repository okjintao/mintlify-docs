/**
 * Prevent tabs from overlapping with the theme toggle.
 * Finds the tabs container and adds right padding to reserve space.
 */
(function () {
  function addTabsSpacing() {
    var selectors = [
      '[class*="nav-tabs"]',
      '[class*="tabs-bar"]',
      'nav[class*="tab"]',
      '[class*="content-side-layout"] > div:first-child',
      '[class*="almond-layout"] > div:first-child'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var el = document.querySelector(selectors[i]);
      if (el && !el.dataset.tabsSpacing) {
        el.style.paddingRight = '5.5rem';
        el.style.boxSizing = 'border-box';
        el.dataset.tabsSpacing = '1';
      }
    }
  }
  function run() {
    addTabsSpacing();
    setTimeout(addTabsSpacing, 100);
    setTimeout(addTabsSpacing, 500);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
