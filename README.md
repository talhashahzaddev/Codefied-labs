# Codified Labs - Professional Software Development Website

A modern, responsive website for Codified Labs, a custom software development and augmentation service company. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **SEO Optimized**: Complete meta tags, structured data, and optimized content
- **Performance**: Fast loading with Next.js optimizations
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Interactive**: Smooth animations and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Multiple Pages**: Home, Services, About, Portfolio, Contact pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Heroicons, Font Awesome)
- **Fonts**: Inter (Google Fonts)
- **Form Handling**: React Hook Form (ready for implementation)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
codifiedlabs-web/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── about/            # About page components
│   ├── contact/          # Contact page components  
│   ├── services/         # Services page components
│   ├── CTA.tsx           # Call-to-action component
│   ├── Features.tsx      # Features section
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation bar
│   ├── Services.tsx      # Services preview
│   └── Testimonials.tsx  # Client testimonials
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/codifiedlabs-web.git
   cd codifiedlabs-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`. Main colors:

- **Primary**: Blue shades (#3B82F6 and variants)
- **Dark**: Gray shades for text and backgrounds
- **Accent**: Various colors for different sections

### Content

Update content in the respective component files:

- **Company Info**: `components/Footer.tsx`, `components/about/CompanyStory.tsx`
- **Services**: `components/services/ServicesList.tsx`
- **Team Members**: `components/about/Team.tsx`
- **Testimonials**: `components/Testimonials.tsx`
- **Contact Info**: `components/contact/ContactInfo.tsx`

### Images

Replace placeholder images with your actual images:

- Add images to the `public/` directory
- Update image paths in components
- Optimize images for web (WebP format recommended)

## 📧 Contact Form Setup

The contact form is ready but needs backend integration. Options:

### Option 1: Vercel Form Handling
```bash
# No additional setup needed - forms work automatically on Vercel
```

### Option 2: Email Service (Resend, SendGrid, etc.)
```bash
npm install resend
# or
npm install @sendgrid/mail
```

### Option 3: Database Integration
```bash
npm install prisma @prisma/client
# Follow Prisma setup for your preferred database
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Other Platforms

The site can be deployed to any platform supporting Next.js:

- **Netlify**: Use `@netlify/plugin-nextjs`
- **AWS Amplify**: Follow Next.js deployment guide
- **Railway**: Connect GitHub repository
- **DigitalOcean App Platform**: Use Next.js preset

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Email Service (if using)
RESEND_API_KEY=your_resend_api_key
SENDGRID_API_KEY=your_sendgrid_api_key

# Database (if using)
DATABASE_URL=your_database_url

# Analytics (optional)
GOOGLE_ANALYTICS_ID=your_ga_id
```

## 📱 Mobile Optimization

The website is fully responsive with:

- **Mobile-first design approach**
- **Touch-friendly interactions**
- **Optimized images and fonts**
- **Fast loading on mobile networks**
- **Proper viewport configuration**

## 🔍 SEO Features

- **Meta tags**: Complete title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine crawling instructions

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build

# Production test
npm run start
```

## 📈 Performance Optimization

- **Image optimization**: Next.js Image component
- **Font optimization**: Google Fonts with display swap
- **Code splitting**: Automatic with Next.js
- **Bundle analysis**: `npm run analyze` (after setup)
- **Caching**: Optimized cache headers

## 🎯 Business Customization

To customize for your business:

1. **Update company information** in all components
2. **Replace testimonials** with real client feedback
3. **Update team members** with your actual team
4. **Modify services** to match your offerings
5. **Add your portfolio projects**
6. **Update contact information**
7. **Replace social media links**
8. **Add your logo and branding**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- **Email**: hello@codified-labs.com
- **Documentation**: Check component comments
- **Issues**: GitHub Issues tab

## 🔄 Updates

Keep your website updated:

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Update Next.js
npm install next@latest
```

---

**Built with ❤️ by Codified Labs**

Transform your business with cutting-edge custom software development solutions. 