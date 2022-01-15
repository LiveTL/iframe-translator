import { LoadedPacket, TranslateRequest } from './types';

export function getClient(
  host='https://kentonishi.github.io/iframe-translator'
  // host='http://localhost:8000/iframe-translator/'
): Promise<{
  translate: (text: string, targetLanguage: string) => Promise<string>;
  destroy: () => void;
}> {
  return new Promise(resolveParent => {
    const iframe: HTMLIFrameElement =
      document.querySelector('#iframe-translator') || document.createElement('iframe');
    iframe.src = host;
    iframe.id = 'iframe-translator';
    iframe.style.position = 'fixed';
    iframe.style.top = '0px';
    iframe.style.left = '0px';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.zIndex = '1000000000';
    iframe.style.pointerEvents = 'none';
    iframe.style.border = 'none';
    iframe.style.filter = 'opacity(0)';

    let callbacks: { [key: string]: CallableFunction } = {};

    function translate(
      text: string,
      targetLanguage = 'en',
    ): Promise<string> {
      const id = `iframe-translator-${Date.now()}`;
      return new Promise(resolve => {
        callbacks[id] = resolve;
        iframe.contentWindow.postMessage(JSON.stringify({
          messageID: id,
          type: 'request',
          targetLanguage,
          text
        } as TranslateRequest), '*');
      });
    }

    function onMessage(event: MessageEvent) {
      try {
        const data = JSON.parse(event.data) as LoadedPacket | TranslateRequest;
        if (data.type === 'loaded') {
          resolveParent({
            translate,
            destroy
          });
          return;
        }
        const {
          messageID,
          type,
          text,
        } = data;
        if (type === 'response') {
          callbacks[messageID](text);
          delete callbacks[messageID];
        }
      } catch (e) {
      }
    }

    window.addEventListener('message', onMessage);

    function destroy() {
      document.body.removeChild(iframe);
      callbacks = {};
      window.removeEventListener('message', onMessage);
    }

    document.body.appendChild(iframe);
  });
}