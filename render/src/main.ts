import "@a2ui/lit/ui";
import { A2UIRenderer } from "./a2ui-renderer.js";

const surfaceContainer = document.getElementById("surface-container");
if (!surfaceContainer) {
  throw new Error("Missing #surface-container element");
}

const renderer = new A2UIRenderer(surfaceContainer);

function hasDelete(messages: unknown[]): boolean {
  return messages.some((msg: any) => msg?.deleteSurface !== undefined);
}

function waitForFrames(count = 2): Promise<void> {
  return new Promise((resolve) => {
    const step = (remaining: number) => {
      if (remaining <= 0) {
        resolve();
        return;
      }
      requestAnimationFrame(() => step(remaining - 1));
    };
    step(count);
  });
}

const renderApi = {
  reset(): void {
    renderer.clear();
  },
  async processTurn(messages: unknown[]): Promise<{ shouldCapture: boolean }>{
    if (!messages || messages.length === 0) {
      return { shouldCapture: false };
    }

    const deleted = hasDelete(messages);
    renderer.processTurn(messages);
    await waitForFrames(2);

    return { shouldCapture: !deleted };
  },
};

// @ts-expect-error - exposed for Playwright automation
window.__A2UI_RENDER__ = renderApi;
