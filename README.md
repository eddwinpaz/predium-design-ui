# Predium Design UI

Vue 3 component library inspired by Uber's [Base Web](https://baseweb.design) design system. 47 production-ready components built with **Tailwind CSS v4** and **TypeScript**.

## Features

- 47 components matching Base Web's design tokens (spacing, colors, typography)
- Vue 3 Composition API with full TypeScript support
- Tailwind CSS v4 - no runtime CSS-in-JS overhead
- Headless UI for accessible overlays (Modal, Select, Combobox, Drawer)
- Storybook documentation with interactive examples
- Tree-shakeable ES module exports

## Installation

```bash
npm install predium-design-ui
```

### Peer dependencies

```bash
npm install vue tailwindcss @tailwindcss/vite
```

## Setup

### 1. Import the CSS

In your app's main entry file (e.g., `main.ts`):

```ts
import 'predium-design-ui/style.css'
```

Or import the design tokens CSS directly for full token access:

```css
/* In your main CSS file */
@import 'predium-design-ui/tokens.css';
@import 'tailwindcss';
```

### 2. Use components

```vue
<script setup lang="ts">
import { Button, Input, Card, Badge } from 'predium-design-ui'
</script>

<template>
  <Card>
    <template #header>
      <h2>Create Shipment</h2>
    </template>

    <Input placeholder="Origin city" />
    <Input placeholder="Destination city" />

    <template #footer>
      <Button kind="primary">Book Shipment</Button>
      <Button kind="secondary">Cancel</Button>
    </template>
  </Card>
</template>
```

## Components (47)

### Inputs
| Component | Description |
|-----------|------------|
| `Button` | Primary, secondary, tertiary, minimal variants |
| `ButtonGroup` | Connected toggle button group |
| `Input` | Text input with enhancer slots |
| `Select` | Dropdown select with Headless UI |
| `Combobox` | Searchable select |
| `Textarea` | Multi-line text input |
| `Checkbox` | Checkbox with label and description |
| `Radio` | Radio button group |
| `Toggle` | On/off switch |
| `Slider` | Range slider |
| `DatePicker` | Calendar date picker |
| `PinCode` | PIN code input |
| `PhoneInput` | Phone with country code |
| `FileUploader` | Drag and drop file upload |
| `FormControl` | Label + error wrapper |

### Display
| Component | Description |
|-----------|------------|
| `Badge` | Status badge (positive, warning, negative) |
| `Tag` | Selectable chip/pill |
| `Avatar` | User avatar with initials |
| `Typography` | 15-variant type scale |
| `Spinner` | Loading spinner |
| `Skeleton` | Loading placeholder |
| `ProgressBar` | Progress indicator |
| `Rating` | Star rating |
| `KpiCard` | Metric card with trends |
| `MessageCard` | Promotional card |

### Layout
| Component | Description |
|-----------|------------|
| `Card` | Container with header/footer |
| `Tile` | Selectable option card |
| `Tabs` | Tab navigation |
| `Accordion` | Collapsible sections |
| `Separator` | Horizontal/vertical divider |
| `List` | List with items |
| `Table` | Data table with custom cells |
| `Stepper` | Horizontal step indicator |
| `ProgressSteps` | Vertical steps with content |
| `TreeView` | Collapsible tree |

### Navigation
| Component | Description |
|-----------|------------|
| `NavHeader` | Top navigation bar |
| `Breadcrumbs` | Breadcrumb trail |
| `Link` | Styled anchor/router-link |
| `Pagination` | Page navigation |

### Overlay
| Component | Description |
|-----------|------------|
| `Modal` | Dialog with Headless UI |
| `Drawer` | Side panel |
| `Popover` | Popover dropdown |
| `Menu` | Action menu |
| `Tooltip` | Hover tooltip |

### Feedback
| Component | Description |
|-----------|------------|
| `Notification` | Inline alert banner |
| `Toast` | Snackbar notification |
| `Banner` | Full-width announcement |

## Design Tokens

Base Web's exact token system available via Tailwind classes:

### Spacing (4px grid)
```
p-scale100=4px  p-scale200=8px  p-scale300=12px  p-scale400=16px
p-scale600=24px p-scale800=32px p-scale1200=48px p-scale1600=64px
```

### Component Sizing
```
h-size400=36px (compact)  h-size600=48px (default)  h-size700=56px (large)
```

### Input States (Base Web pattern)
| State | Background | Border |
|-------|-----------|--------|
| Default | `#f6f6f6` (gray) | transparent |
| Hover | `#eeeeee` | transparent |
| Focus | `#ffffff` (white) | `2px solid #000` |
| Error | `#ffffff` | `2px solid #e11900` |

## Storybook

```bash
npm run storybook
```

Opens at `http://localhost:6006` with interactive docs for all 47 components.

## Development

```bash
git clone https://github.com/eddwinpaz/predium-design-ui.git
cd predium-design-ui
npm install
npm run dev          # Dev server
npm run storybook    # Component docs
npm run build        # Build library
npm run type-check   # TypeScript check
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub Release
3. The `publish.yml` workflow automatically publishes to npm

Or manually:

```bash
npm run build
npm publish --access public
```

## License

MIT
