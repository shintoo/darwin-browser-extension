function handleTabChange(activeInfo) {
  getUrl().then(tabUrl => {
    console.log("got url ", tabUrl, " for new tab")
    let {text, url} = getImport(tabUrl, 1)

    if (text.includes("Import")) {
      browser.browserAction.setBadgeText({
        text: "i"
      })
      browser.browserAction.setBadgeBackgroundColor({
        color: "#32B0F9",
      })
      browser.browserAction.setBadgeTextColor({ color: "#ffffff" })
    } else {
      browser.browserAction.setBadgeText({ text: "" })
    }
  })
}

browser.tabs.onUpdated.addListener(handleTabChange)
browser.tabs.onActivated.addListener(handleTabChange)
