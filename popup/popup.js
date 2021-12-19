document.addEventListener("DOMContentLoaded", function() {
  let a = document.getElementById("import-anchor")
  let button = document.getElementById("import-button")
  let counter = document.getElementById("count")
  let iNatUI = document.getElementById("obs-count-input")

  counter.addEventListener("change", updateUrl)

  function updateUrl() {
    getUrl().then(tabUrl => {
      var {text, url} = getImport(tabUrl, counter)
      a.href = url
      button.textContent = text
      if (text.includes("Observations")) {
        iNatUI.style.display = "inline"
      } else {
        iNatUI.style.display = "none"
      }

      if (text.includes("Import")) {
        browser.browserAction.setBadgeText({
          text: "i"
        })
        browser.browserAction.setBadgeBackgroundColor({
          color: "#32B0F9",
        })
      } else {
        browser.browserAction.setBadgeText({
          text: ""
        })
      }
    })
  }
  updateUrl()
})
