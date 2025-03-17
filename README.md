# Modern Portfolio Template

A beautiful, responsive portfolio template built with React, TypeScript, and Tailwind CSS. Features dark mode support, smooth animations, and a modern design.

**View Live Demo Here:**
https://personal-website-template.netlify.app/

## Features

- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Built with Vite for fast development
- 🎨 Tailwind CSS for styling
- 💻 TypeScript for type safety
- 🔥 Modern animations
- 📝 Blog section
- 📄 Downloadable resume
- 📧 Contact form

**Hero Section - Light Mode**
![image](https://github.com/user-attachments/assets/5ae5d825-c5c2-45e1-9eea-6add0567d5f0)

**Hero Section - Dark Mode**
![Screenshot 2025-03-17 135035](https://github.com/user-attachments/assets/d564c6bc-9f05-4bbb-a979-daa86cd4ecd1)

**Projects Section**
![Screenshot 2025-03-17 135228](https://github.com/user-attachments/assets/67c0973d-eb32-40bc-b380-e938dbde02f7)

**Blog Page**
![Screenshot 2025-03-17 135316](https://github.com/user-attachments/assets/aea540fc-610b-4eaa-8d6e-b6e0f84c712e)

**Blog Post**
![image](https://github.com/user-attachments/assets/6d734952-6afb-4c8b-82ef-60f0f2216f9f)

**Testimonials Section**
![Screenshot 2025-03-17 135237](https://github.com/user-attachments/assets/f8dc8123-c1f1-47b9-bec2-b6f6d7a86432)

**Resume Page with PDF Download Option**
![Screenshot 2025-03-17 135356](https://github.com/user-attachments/assets/9b3f183f-93c3-4b91-b149-f87e048cee5b)

**Contact Page**
![Screenshot 2025-03-17 135249](https://github.com/user-attachments/assets/cff99303-22bb-49b4-95f4-5337bd3b6676)


## Getting Started

### Option 1: Edit with Stackblitz by Forking this Repo

https://stackblitz.com/~/github.com/dporkka/personal-website-template
![Screenshot 2025-03-17 143013](https://github.com/user-attachments/assets/9d1caf1b-3ddb-4f43-90c3-1ccab79b9eff)

## Option 2: Clone this repo from Github

1. Open your Terminal and Clone the repository:
```bash
git clone https://github.com/dporkka/personal-website-template.git
```

2. Install dependencies:
```bash
cd portfolio-template
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Development

### Editing with Cursor

[Cursor](https://cursor.sh/) is a powerful AI-powered code editor that can help you customize this template efficiently:

1. Open the project in Cursor:
   ```bash
   cursor .
   ```

2. Use Cursor's AI features:
   - Press `Cmd/Ctrl + K` to get AI suggestions
   - Use `/edit` command to modify code with natural language
   - Use `/doc` to generate documentation
   - Press `Cmd/Ctrl + L` for line-by-line explanations

3. Take advantage of Cursor's TypeScript and React support:
   - Get intelligent autocomplete
   - See real-time type checking
   - Access component documentation
   - Quick-fix common issues

### Editing with Windsurf

[Windsurf](https://www.windsurf.io/) offers a great experience for editing Tailwind CSS projects:

1. Open the project in Windsurf:
   - Launch Windsurf
   - Select "Open Project"
   - Navigate to your project directory

2. Use Windsurf's features:
   - Live preview with hot reload
   - Visual Tailwind class editor
   - Class suggestions and documentation
   - Color palette management
   - Responsive design preview

3. Best practices with Windsurf:
   - Use the class inspector to understand styles
   - Leverage the component library
   - Test responsive layouts in real-time
   - Export optimized Tailwind configurations

## Deployment

### Deploy to Netlify

1. Fork this repository to your GitHub account

2. Sign up for a Netlify account at https://www.netlify.com

3. From your Netlify dashboard:
   - Click "Add new site"
   - Select "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your forked repository

4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or your preferred version)

5. Click "Deploy site"

### Setting Up Form Submissions

1. Your contact form is already configured to work with Netlify Forms. After your first deployment, Netlify will automatically detect the form.

2. To view form submissions:
   - Go to your site's Netlify dashboard
   - Click "Forms"
   - You'll see all form submissions listed here
   - Enable email notifications for new submissions in Form Settings

3. Optional: Add spam protection
   - Go to Form Settings
   - Enable reCAPTCHA or Honeypot protection
   - Netlify's spam filtering is automatically enabled

## Customization

1. Update personal information in the components:
   - Edit `src/components/Hero.tsx` for the main header section
   - Modify `src/components/About.tsx` for your bio
   - Update `src/components/Skills.tsx` with your skills
   - Add your projects in `src/components/Projects.tsx`
   - Customize testimonials in `src/components/Testimonials.tsx`
   - Update contact information in `src/components/Contact.tsx`

2. Replace the profile image:
   - Update the image URL in `src/components/Hero.tsx`
   - Use your own image hosted on a CDN or update the local assets

3. Customize the theme:
   - Modify colors in `tailwind.config.js`
   - Update animations in `src/index.css`

## Support the Developer

If you find this template helpful, consider supporting the developer (David Porkka):

[Make a Donation](https://buy.stripe.com/cN26oM84c2oT772dQX)

## Support

If you have any problems or need help with the template, please email davidporkka@gmail.com.

## License

MIT License - feel free to use this template for your personal portfolio!
