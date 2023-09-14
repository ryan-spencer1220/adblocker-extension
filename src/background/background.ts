chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url;
    const filters = ["googleadservices", "g.doubleclick", "googlesyndication"];
    for (const filter of filters) {
      if (url.indexOf(filter) !== -1) {
        console.log("Blocked: " + url);
        return {
          cancel: true,
        };
      }
    }
    return {
      cancel: true,
    };
  },
  {
    urls: [
      "*://*.googleadservices.com/*",
      "*://*.tpc.googlesyndication.com/*",
      "*://*.g.doubleclick.net/*",
    ],
  },
  ["blocking"]
);
