# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a static HTML/CSS website with no build system. To develop and test:

- Open any HTML file directly in a web browser (e.g., `index.html`) to view the site.
- For proper link testing and to avoid CORS issues with local assets, serve the directory with a simple HTTP server:
  - Python: `python -m http.server 8000` (then visit http://localhost:8000)
  - Node.js: `npx serve` or `npx http-server`
  - Alternatively, use the Live Server extension in VS Code.

## Code Architecture & Structure

### File Organization
- All HTML files are in the root directory: `index.html` (homepage) and section pages:
  - `wars.html` - Major wars throughout history
  - `battles.html` - Famous battles
  - `leaders.html` - Military leaders
  - `weapons.html` - Weapons & equipment
  - `uniforms.html` - Uniform history
  - `memorials.html` - Memorials & remembrance
  - `resources.html` - Additional resources
- Single stylesheet: `styles.css` contains all styling
- No JavaScript files - site is purely HTML/CSS

### Consistent Structure
Each page follows the same structure:
1. **Header**: Site title and tagline
2. **Navigation**: Horizontal menu with links to all sections (active page not highlighted)
3. **Main Content**:
   - Homepage (`index.html`): Grid of content cards linking to each section
   - Section pages: Page-specific content (text, images, timelines)
4. **Footer**: Copyright, dedication, and social media links

### Styling Approach
- CSS variables in `:root` for easy color/font changes:
  - `--primary-color`: Dark blue-gray (#2c3e50)
  - `--secondary-color`: Slightly lighter blue-gray (#34495e)
  - `--accent-color`: Military red/brown (#c0392b)
  - `--background-color`: Light gray (#ecf0f1)
  - `--text-color`: Dark blue-gray (#2c3e50)
  - `--border-color`: Light gray (#bdc3c7)
  - Fonts: Times New Roman (primary), Georgia (secondary)
- Responsive design with media breakpoint at 768px:
  - Stacks navigation vertically on mobile
  - Content grid changes to single column
  - Timeline items full width
- Visual traditions: Military aesthetic with accent color highlights, subtle textures, and hover effects

### Key Components
- **Navigation**: Flexbox-based horizontal list with hover effects (background change, underline animation, slight lift)
- **Content Cards**: Used on homepage for section previews (image, title, description, read-more button)
- **Timeline**: Used on some section pages for historical progression (alternating left/right positioning with connecting line)
- **Sections**: Clear hierarchy with section titles (h2) and accent color underline

## Common Tasks

### Adding New Content
1. Create new HTML file following existing structure (copy from similar page)
2. Add link to navigation in all HTML files (maintain consistency)
3. For homepage: Add new content card in `.content-grid`
4. Ensure image placeholders are replaced with actual images (currently using via.placeholder.com)

### Styling Changes
- Modify CSS variables in `:root` for theme changes
- Adjust layout properties in relevant selectors (e.g., `.content-grid`, `nav`, `.timeline`)
- Maintain mobile responsiveness when changing layouts

### Navigation Updates
- When adding/removing sections, update:
  1. `<nav><ul>` in every HTML file
  2. Homepage content grid
  3. Ensure file names match exactly
