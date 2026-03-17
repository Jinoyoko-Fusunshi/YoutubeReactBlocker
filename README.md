# Youtube React Blocker

A chrome extension that blocks videos, playlists, channels and shorts suggestions for your search containing any keywords related to reaction content.

## Functionality

It blocks reaction content by simply serachin the youtube DOM for react keywords and toggling the HTML elements to have a **display: none** CSS attribute. 

As of right now it is a simple method but still effecticve.

## Installation

Currently this extension is not uploaded to the Chrome Web Store, but you can locally install it by yourself.

* Clone the repository:
```sh
git clone https://github.com/Jinoyoko-Fusunshi/YoutubeReactBlocker.git
```

* Open the chromes extensions in your chromium based browser by typing and submitting the url: **chrome://extensions/** in the search bar.
* On the right of the webpage enable developer mode by clicking the **Developer mode** toggle button.
* Click on the **Load unpacked** button and choose the **chrome-extension** subdirectory from your locally cloned repository directory
* After this the extension will be locally installed and already active as **YouTube React Blocker**.
