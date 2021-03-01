chrome.contextMenus.create ({

    "title": "View Top Posts From This Subreddit",
    "contexts": ["selection"],
    "onclick" : openTab()


});

function openTab(){
    return function (info, tab){

        let text = info.se
    }
}