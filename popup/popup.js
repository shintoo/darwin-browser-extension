const INAT_STUB = "https://www.inaturalist.org/people/"
const EBIRD_STUB = "https://ebird.org/checklist/"

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
    })
  }

  updateUrl()
})

async function getUrl() {
  let options = { active: true, currentWindow: true }
  let [tab] = await browser.tabs.query(options)
  return tab.url
}

function getImport(tabUrl, counter) {
  let text
  let url

  if (tabUrl.includes(INAT_STUB)) {
    count = parseInt(counter.value)
    text = "Import " + count + " Observations"
    url = "https://darwintree.app/b/i/" + tabUrl.slice(INAT_STUB.length) + "/" + count
  } else if (tabUrl.includes(EBIRD_STUB)) {
    text = "Import eBird Checklist"
    url = "https:/darwintree.app/b/e/" + tabUrl.slice(EBIRD_STUB.length)
  } else {
    text = "Open Darwin"
    url = "https://darwintree.app/b/"
  }

  return {text, url}
}
