# Portfolio Website - Modular Structure

## File Structure

```
portfolio/
├── index.html              # Main page (Hero, About, Skills, Contact)
├── js/
│   └── load-content.js     # Loads project HTML files dynamically
└── projects/               # Individual project files
    ├── stafftrace.html
    ├── partstock.html
    ├── pong.html
    └── irc.html
```

## How It Works

The portfolio uses **dynamic content loading** to keep the structure modular:

1. **Main Page** (`index.html`) contains the static sections: Hero, About, Skills, Contact
2. **JavaScript Loader** (`js/load-content.js`) fetches each project HTML file
3. **Project Files** (`projects/*.html`) are standalone HTML snippets for each project
4. When the page loads, JavaScript injects all project files into the `#projects-container` div

## Editing Workflow

### To Edit a Project
1. Open the specific project file (e.g., `projects/partstock.html`)
2. Make your changes
3. Save the file
4. Refresh your browser to see changes

### To Add a New Project
1. Create a new HTML file in `projects/` folder (e.g., `projects/newproject.html`)
2. Open `js/load-content.js`
3. Add the filename (without .html) to the `projects` array:
   ```javascript
   const projects = [
       'stafftrace',
       'partstock',
       'pong',
       'irc',
       'newproject'  // Add here
   ];
   ```
4. Save and refresh

### To Remove a Project
1. Delete the HTML file from `projects/` folder
2. Remove the filename from the `projects` array in `js/load-content.js`

## Testing Locally

Since the JavaScript uses `fetch()` to load external files, you need a local server:

**Option 1 - Python** (if installed):
```bash
python -m http.server 8000
```
Then visit: http://localhost:8000

**Option 2 - Node.js** (if installed):
```bash
npx serve
```

**Option 3 - VS Code**:
Install "Live Server" extension, right-click index.html → "Open with Live Server"

## Deployment

This portfolio is designed for static hosting platforms:

### Netlify (Recommended)
1. Drag the entire `portfolio/` folder to https://netlify.com/drop
2. Get a free subdomain or connect your custom domain
3. HTTPS automatic and free

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the portfolio folder
3. Follow prompts to deploy

### GitHub Pages
1. Create a new repo
2. Upload all files
3. Enable Pages in repo Settings
4. Select main branch

## Benefits of This Structure

- **Easy maintenance**: Edit one project = edit one file
- **Clean separation**: Projects don't clutter main index.html
- **Scalable**: Add unlimited projects without touching main page
- **Version control friendly**: Git diffs show exactly what changed
- **No build process**: Plain HTML/CSS/JS, works everywhere
