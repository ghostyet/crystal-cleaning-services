# Crystal Cleaning Services

A modern, professional website for Crystal Cleaning Services built to showcase cleaning solutions and enable customers to book services online.

## 📋 Project Overview

Crystal Cleaning Services is a web application designed to provide a seamless experience for customers seeking professional cleaning services. The platform offers service information, pricing details, and an easy booking system.

## ✨ Features

- **Service Showcase**: Display of various cleaning service packages
- **Online Booking System**: Easy-to-use interface for customers to schedule services
- **Responsive Design**: Mobile-friendly interface that works across all devices
- **Professional Branding**: Clean and modern UI reflecting the brand identity
- **Customer Management**: Manage and track customer inquiries and bookings
- **Service Pricing**: Clear pricing information for different service tiers
- **Contact & Support**: Multiple channels for customer inquiries

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ghostyet/crystal-cleaning-services.git
   cd crystal-cleaning-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment configuration**
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your configuration values

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
crystal-cleaning-services/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── styles/          # CSS and styling
│   ├── utils/           # Utility functions
│   └── config/          # Configuration files
├── tests/               # Test files
├── .env.example         # Environment variables template
├── package.json         # Project dependencies
└── README.md           # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run test suite
- `npm run lint` - Run linting

## 🎨 Technology Stack

- **Frontend**: React.js, Next.js
- **Styling**: CSS3, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Hosting**: Vercel/Netlify

## 📖 Usage

### Creating a New Service

1. Navigate to the admin dashboard
2. Click on "Add Service"
3. Fill in service details including name, description, and pricing
4. Upload service images
5. Save and publish

### Managing Bookings

- View all bookings in the admin panel
- Update booking status
- Send notifications to customers
- Generate booking confirmations

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=mongodb://localhost:27017/crystal-cleaning
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@crystalcleaning.com
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

For coverage report:

```bash
npm run test:coverage
```

## 🐛 Known Issues

- None currently reported

## 📝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a new branch for your feature
2. Make your changes
3. Commit with clear, descriptive messages
4. Push to your fork
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Support

For support, please contact:
- Email: support@crystalcleaning.com
- Issues: GitHub Issues

## 🔗 Links

- [Live Website](https://www.crystalcleaning.com)
- [Documentation](./docs)
- [Changelog](./CHANGELOG.md)

---

**Last Updated**: December 17, 2025
**Maintainer**: ghostyet
