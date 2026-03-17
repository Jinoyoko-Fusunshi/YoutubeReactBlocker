const forbidden = /\b(reagier(t|e|en|ung|ungen)?|reaktion(en)?|meinung(en)?|senf|guckt|schaut|react(s|ing|ion|ions)?|watching|opinion|thoughts|respond|response)\b|take on|view on|original video|originaler kanal|original link|check out the original/i;

function purgeUniversal() {
    // 1. Wir suchen nach den von dir gefundenen speziellen Tags + Standard-Tags
    const selectors = [
        'ytm-shorts-lockup-view-model',
        'ytm-shorts-lockup-view-model-v2',
        'ytm-video-with-context-renderer', // Mobil-Video-Container
        'ytd-rich-item-renderer',
        'ytd-video-renderer',
        'ytd-reel-item-renderer',
        'ytd-compact-video-renderer',
        'yt-lockup-view-model',
        'ytd-channel-renderer',
        'ytd-grid-video-renderer'
    ];

    const containers = document.querySelectorAll(selectors.join(','));
    containers.forEach(container => {
        const content = container.innerText || "";
        const ariaLabel = container.getAttribute('aria-label') || "";
        const metadata = container.querySelector('.metadata-text, .headline')?.innerText || "";

        const combinedText = (content + " " + ariaLabel + " " + metadata).toLowerCase();

        if (forbidden.test(combinedText)) {
            if (container.style.display !== 'none') {
                container.style.setProperty('display', 'none', 'important');
            }
        }
    });

    const links = document.querySelectorAll('a[href*="/shorts/"], a[href*="/watch"]');
    links.forEach(link => {
        const title = link.innerText || "";
        if (forbidden.test(title)) {
            const parent = link.closest(selectors.join(','));
            if (parent) {
                parent.style.setProperty('display', 'none', 'important');
            }
        }
    });
}

const observer = new MutationObserver(purgeUniversal);
observer.observe(document.body, { childList: true, subtree: true });

setInterval(purgeUniversal, 1000);
purgeUniversal();