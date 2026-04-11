# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`publish-commons` is a Vue 3 component library that wraps and extends Ant Design Vue components. It provides 30+ components for forms, data display, feedback, and advanced functionality like rich text editing and image cropping.

**Location**: `/Users/liyujie/trea/publish-commons/`

## Common Commands

```bash
# Development
npm run dev              # Start Vite dev server for examples

# Building
npm run build            # Build library to dist/ (ES + UMD)
npm run build:check      # Run type check then build
npm run typecheck        # TypeScript type checking only

# Code Quality
npm run lint             # ESLint with auto-fix
npm run format           # Prettier format
npm run format:check     # Prettier check

# Testing
npm run test             # Run vitest in watch mode
npm run test:run         # Run vitest once
npm run test:coverage    # Run with coverage report

# Documentation
npm run docs:dev         # VitePress dev server
npm run docs:build       # Build VitePress docs
npm run docs:preview     # Preview built docs
```

## Architecture

### Component Structure

Each component lives in `src/components/ComponentName/` with this structure:

```
XButton/
├── XButton.vue          # Main component file
├── types.ts             # TypeScript types/interfaces
├── index.ts             # Component export
└── style.less           # Component styles (optional)
```

### Component Categories

| Category | Components |
|----------|------------|
| Basic | XButton, XTooltip, XPopover, XPopconfirm, XFloatButton, XNotification |
| Form | XInput, XInputFloat, XInputNeg, XInputNum, XSelect, XDatePicker, XMonthPicker, XRangePicker, XTimePicker, XYearPicker, XBothTimePicker, XTextarea, XForm, XCascader, XCheckbox, XCheckboxGroup, XRadio, XRadioGroup |
| Data Display | XTree, XTreeSelect, XTable, XChart |
| Advanced | XEditor (wangEditor), XImageCropper (vue-cropper), XTableSearch |

### Key Dependencies

- **Vue 3.3+** with Composition API and `<script setup>`
- **Ant Design Vue 4.x** - Base UI components
- **vxe-table** - Table component foundation
- **wangEditor** - Rich text editor
- **vue-cropper** - Image cropping
- **ECharts 6.x** - Charts

### Build Configuration

- **Entry**: `src/index.ts`
- **Output**: `dist/` (ES + UMD formats)
- **External deps**: vue, ant-design-vue, @ant-design/icons-vue, dayjs
- **Type declarations**: Generated via `vite-plugin-dts`

### Path Aliases

- `@/` maps to `src/`

### Style System

- Uses **Less** preprocessor
- Global variables in `src/styles/variables.less`
- Auto-injected to all components via Vite config
- Main styles entry: `src/styles/index.less`

## Utility Functions

The library exports several utility functions:

```typescript
// File operations
import { previewFile, downloadFile, printFile } from 'publish-commons'

// Modal operations
import { openModal, closeAllModals, closeModalById } from 'publish-commons'

// Notification
import { notification } from 'publish-commons'
notification.success({ title: 'Success', message: 'Operation completed' })
```

## Working with Components

### Adding a New Component

1. Create directory in `src/components/ComponentName/`
2. Create `types.ts` with props/emits/slots types
3. Create component Vue file
4. Create `index.ts` exporting the component
5. Add to `src/index.ts` imports and exports
6. Add to `install` function for global registration
7. Create demo in `examples/ComponentNameDemo.vue`
8. Add VitePress docs in `docs/components/componentname.md`

### Component Conventions

- Use `<script setup lang="ts">` syntax
- Define props with TypeScript interfaces from `types.ts`
- Emit events using `defineEmits`
- Export types from component's `types.ts`
- Follow Ant Design Vue patterns for consistency

### Testing Components

Tests should be placed in `src/components/__tests__/` or co-located. Uses Vitest with happy-dom environment and `@vue/test-utils`.

## Examples

The `examples/` directory contains demo files for each component (e.g., `XButtonDemo.vue`). Import the library components and test them in a real Vue app context.

## Documentation

VitePress docs are in `docs/`:
- `docs/components/` - Component documentation
- `docs/guide/` - Usage guides
- `docs/.vitepress/config.ts` - VitePress configuration
