chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == 'install'){
        chrome.storage.local.set({
            isnewtab: false,
            isdefaultfont: false,
            ischeckip: true,
            ishideblock: true,
            isblockmobile: false,
            isnickid: true,
            ispagination: true,
            isdarkmode: false,
            isrefresh: false,
            refreshtime: "10",
            isblockcategory: false,
            blockcategorylist: "",
        })
    } else if(details.reason == "update"){
        chrome.storage.local.get('isblockmobile',(val) => {
            if(val.isblockmobile === undefined){
                chrome.storage.local.set({
                    isblockmobile: false
                });
            }
            if(val.isdarkmode === undefined){
                chrome.storage.local.set({
                    isdarkmode: false
                });
            };
            if(val.ispagination === undefined) {
                chrome.storage.local.set({
                    ispagination: false
                });
            }
        });
    }
});

chrome.declarativeContent.onPageChanged.removeRules(async () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostPrefix: 'gall.dcinside.com' },
        }),
      ],
      actions: [
        new chrome.declarativeContent.SetIcon({
          imageData: {
            16: await loadImageData('icon/icon_16.png'),
            32: await loadImageData('icon/icon_32.png'),
          },
        }),
        chrome.declarativeContent.ShowAction
          ? new chrome.declarativeContent.ShowAction()
          : new chrome.declarativeContent.ShowPageAction(),
      ],
    }]);
  });
  
  async function loadImageData(url) {
    const img = await createImageBitmap(await (await fetch(url)).blob());
    const {width: w, height: h} = img;
    const canvas = new OffscreenCanvas(w, h);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);
    return ctx.getImageData(0, 0, w, h);
  }

/*chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        /(http|https):\/\/gall.dcinside.com\/.+/.test(tab.url) && chrome.pageAction.show(tabId);       
    }
);*/