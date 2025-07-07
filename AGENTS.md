# Agent Guidelines for Portfolio Project

## Build/Lint/Test Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Run Biome linting and formatting
- No test framework configured

## Code Style Guidelines
- **Package Manager**: Use `pnpm` exclusively
- **Formatting**: Biome with 2-space indentation, double quotes for JS/TS
- **Imports**: Use `@/` path alias for src directory, organize imports automatically
- **Types**: Use TypeScript with explicit types, prefer `type` over `interface`
- **Components**: Export as named exports (e.g., `export const About = () => {}`)
- **Styling**: Tailwind CSS with `cn()` utility from `@/lib/utils` for class merging
- **File Structure**: Components in `/components`, utilities in `/lib`, pages in `/app`
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Error Handling**: Use optional chaining and nullish coalescing where appropriate

## Biome Configuration
- Sorted Tailwind classes enforced via `useSortedClasses` rule
- Import organization enabled
- Recommended rules active with nursery rules for class sorting