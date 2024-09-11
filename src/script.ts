const IframeInjector = (function () {
  // Private variables
  const encodedUrl: string =
    "aHR0cHM6Ly9teS5zcGxpbmUuZGVzaWduL25leGJvdHJvYm90Y2hhcmFjdGVyY29uY2VwdC01NTFkODNhNDM2NjM3ZDQyZjAxYjU1Mjk1MDhiMWI0Yi8=";

  // Private method to decode Base64
  function decodeBase64(encoded: string): string {
    return atob(encoded);
  }

  // Private method to create and inject iframe
  function injectIframe(containerSelector: string, url: string): void {
    const container = document.querySelector(containerSelector);
    if (container) {
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("frameborder", "0");
      container.appendChild(iframe);
    } else {
      console.error(
        `Container element with selector '${containerSelector}' not found.`
      );
    }
  }

  // Public API
  return {
    init: function (containerSelector: string): void {
      document.addEventListener("DOMContentLoaded", function () {
        const decodedUrl = decodeBase64(encodedUrl);
        injectIframe(containerSelector, decodedUrl);
      });
      // Adding a passive wheel event listener for demonstration
      document.addEventListener(
        "wheel",
        function (event: WheelEvent) {
          console.log("Wheel event triggered");
        },
        { passive: true }
      );
    },
  };
})();

// Initialize the module
IframeInjector.init(".container");
