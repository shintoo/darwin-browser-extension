const INAT_STUB = "https://www.inaturalist.org/people/"
const INAT_STUB2 = "https://www.inaturalist.org/users/"
const INAT_QUERY_STUB = "https://www.inaturalist.org/observations?"
const EBIRD_STUB = "https://ebird.org/checklist/"

async function getUrl() {
  let options = { active: true, currentWindow: true }
  let [tab] = await browser.tabs.query(options)
  return tab.url
}

function getImport(tabUrl, counter) {
  let text
  let url

  // Clean this up for gods sake
  if (tabUrl.includes(INAT_STUB)) {
    count = parseInt(counter.value)
    text = "Import " + count + " Observations"
    url = "https://darwintree.app/b/i/" + tabUrl.slice(INAT_STUB.length) + "/" + count
  } else if (tabUrl.includes(INAT_STUB2)) {
    count = parseInt(counter.value)
    text = "Import " + count + " Observations"
    url = "https://darwintree.app/b/i/" + tabUrl.slice(INAT_STUB2.length) + "/" + count
  } else if (tabUrl.includes(INAT_QUERY_STUB)) {
    count = parseInt(counter.value)
    text = "Import " + count + " Observations"
    url = "https://darwintree.app/b/i/query" + tabUrl.slice(INAT_QUERY_STUB.length - 1) + "&count=" + count
  } else if (tabUrl.includes(EBIRD_STUB)) {
    text = "Import eBird Checklist"
    url = "https:/darwintree.app/b/e/" + tabUrl.slice(EBIRD_STUB.length)
  } else {
    text = "Open Darwin"
    url = "https://darwintree.app/b/"
  }

  return {text, url}
}
