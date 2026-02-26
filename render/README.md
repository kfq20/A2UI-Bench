# A2UI Bench Render

This folder provides a minimal A2UI render harness plus a Playwright pipeline to turn A2UI turns into UI screenshots.

## Setup

```bash
cd /Users/fancy/Desktop/会议/icml26/InfoPO/A2UI-Bench/render
npm install
```

## Render all dialogues

```bash
npm run render -- --input /Users/fancy/Desktop/会议/icml26/InfoPO/multiwoz/output_full/test/all_dialogues.json \
  --out /Users/fancy/Desktop/会议/icml26/InfoPO/A2UI-Bench/render/output
```

## Render a subset

```bash
npm run render -- --start 0 --limit 10
```

## Render a single dialogue

```bash
npm run render -- --dialogue-id MUL1234
```

## Interface

The automation exposes a reusable function:

```ts
import { renderDialogue } from "./scripts/render";
```

`renderDialogue(page, dialogue, { outputDir })` returns the list of image paths generated for that dialogue.
