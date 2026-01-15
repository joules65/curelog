
<div align="center">
  <h1>🏥 CURELOG</h1>
  <p><strong>Modern Healthcare Management System</strong></p>
  <p>A comprehensive healthcare appointment management platform designed for African healthcare systems</p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
  ![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Error Monitoring](#-error-monitoring)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Overview

**CURELOG** is a modern healthcare management system that streamlines the appointment booking process for patients and healthcare providers across Africa. Built with Next.js 14 and powered by Appwrite, it offers a seamless experience for managing medical appointments, patient registration, and administrative tasks.

### Why CURELOG?

- **Patient-Centric**: Easy appointment scheduling with doctors of choice
- **Real-time Updates**: Instant appointment confirmations and notifications
- **Admin Dashboard**: Comprehensive admin panel for appointment management
- **Secure**: Built-in authentication and data protection
- **Scalable**: Modern architecture ready for growth

---

## ✨ Features
<img width="1910" height="880" alt="Screenshot 2024-10-15 173400" src="https://github.com/user-attachments/assets/278e3dba-7031-401f-867c-24fc68058814" />
<img width="1893" height="882" alt="Screenshot 2024-10-15 173538" src="https://github.com/user-attachments/assets/b68488e8-a732-4b48-9e52-e76bd6be8784" />

### For Patients
- 👤 **Patient Registration** - Secure registration with medical information
- 📅 **Appointment Booking** - Schedule appointments with preferred doctors
- 🔄 **Reschedule/Cancel** - Flexible appointment management
- 📱 **OTP Verification** - Secure access with one-time passwords
- 📄 **Document Upload** - Upload medical documents and identification
- ✅ **Appointment Status** - Track appointment status in real-time

### For Administrators
- 📊 **Admin Dashboard** - Overview of all appointments and statistics
- ✅ **Appointment Management** - Schedule, confirm, or cancel appointments
- 🔍 **Patient Search** - Quick access to patient information
- 📈 **Analytics** - Track appointment trends and statistics
- 🔐 **Secure Access** - Passkey-protected admin panel

### Technical Features
- 🌙 **Dark Mode Support** - Theme switching with next-themes
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Server Actions** - Optimized data mutations
- 🛡️ **Type Safety** - Full TypeScript coverage
- 🎨 **Modern UI** - Built with shadcn/ui components
- 🐛 **Error Tracking** - Integrated Sentry monitoring

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Tables**: [TanStack Table](https://tanstack.com/table)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & Services
- **Backend**: [Appwrite](https://appwrite.io/) - Open-source backend server
- **Monitoring**: [Sentry](https://sentry.io/) - Error tracking and performance monitoring
- **File Upload**: React Dropzone
- **Date Handling**: React Datepicker

### Additional Libraries
- **3D Graphics**: Spline React
- **Phone Input**: React Phone Number Input
- **OTP Input**: Input OTP
- **Animations**: Tailwind CSS Animate
- **Class Utilities**: clsx, tailwind-merge, class-variance-authority

---

## 📁 Project Structure

```
curelog/
├── app/                          # Next.js App Router
│   ├── patients/[userId]/        # Patient routes
│   │   ├── new-appointment/      # Book appointment
│   │   └── register/             # Patient registration
│   ├── admin/                    # Admin dashboard
│   ├── api/                      # API routes
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   │   ├── forms/                # Form components
│   │   ├── CustomFormField.tsx   # Custom form fields
│   │   ├── FileUploader.tsx      # File upload component
│   │   ├── PasskeyModal.tsx      # Admin passkey modal
│   │   ├── StatCard.tsx          # Statistics card
│   │   └── SubmitButton.tsx      # Form submit button
│   ├── table/                    # Table components
│   │   ├── columns.tsx           # Table column definitions
│   │   └── DataTable.tsx         # Data table component
│   ├── AppointmentModal.tsx      # Appointment management modal
│   └── StatusBadge.tsx           # Status display badge
├── lib/                          # Utilities and actions
│   ├── actions/                  # Server actions
│   │   ├── appointment.actions.ts
│   │   └── patient.actions.ts
│   ├── appwrite.config.ts        # Appwrite configuration
│   ├── utils.ts                  # Utility functions
│   └── validation.ts             # Zod schemas
├── constants/                    # App constants
│   └── index.ts
├── types/                        # TypeScript types
│   ├── appwrite.types.ts
│   └── index.d.ts
├── public/                       # Static assets
│   └── assets/
│       ├── icons/
│       ├── images/
│       └── gifs/
└── [config files]                # Configuration files
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** / **yarn** / **pnpm** / **bun**
- **Appwrite** account and project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/curelog.git
   cd curelog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory (see [Environment Variables](#-environment-variables) section)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Appwrite Configuration
NEXT_PUBLIC_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_PROJECT_ID=your_project_id
API_KEY=your_api_key
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=your_patient_collection_id
DOCTOR_COLLECTION_ID=your_doctor_collection_id
APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
NEXT_PUBLIC_BUCKET_ID=your_bucket_id

# Admin Passkey
NEXT_PUBLIC_ADMIN_PASSKEY=your_admin_passkey

# Sentry Configuration (Optional)
SENTRY_DSN=your_sentry_dsn
SENTRY_ORG=your_sentry_org
SENTRY_PROJECT=your_sentry_project
```

### Appwrite Setup

1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io/) or self-host
2. Create a new project
3. Set up the following collections in your database:
   - **Patients**: Store patient information
   - **Doctors**: Store doctor information
   - **Appointments**: Store appointment data
4. Create a storage bucket for file uploads
5. Copy your credentials to `.env.local`

---

## 💻 Usage

### For Patients

1. **Register**: Fill out the patient registration form with personal and medical information
2. **Book Appointment**: Select a doctor, choose date/time, and provide reason for visit
3. **Confirmation**: Receive confirmation upon admin approval
4. **Manage**: View, reschedule, or cancel appointments as needed

### For Administrators

1. **Access**: Navigate to `/admin` and enter the admin passkey
2. **Dashboard**: View appointment statistics and pending appointments
3. **Manage Appointments**: 
   - Schedule appointments
   - Confirm or cancel appointments
   - View patient details
4. **Search**: Find specific appointments or patients quickly

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

The application can be deployed on any platform that supports Next.js:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Render**

Refer to [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

---

## 🐛 Error Monitoring

This project uses **Sentry** for error tracking and performance monitoring.

### Features:
- Real-time error tracking
- Performance monitoring
- Release tracking
- User feedback
- Source maps support

Error boundaries are configured for:
- Client-side errors (`sentry.client.config.ts`)
- Server-side errors (`sentry.server.config.ts`)
- Edge runtime errors (`sentry.edge.config.ts`)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**David Chukwuebuka Achibiri**

- GitHub: [@ebukae](https://github.com/david-ac1)
- Company: EBUKAE Tech Projects
- Email: davidachibiri8@gmail.com
- LinkedIn: davidachibiri1

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Appwrite](https://appwrite.io/) for the backend infrastructure
- [Vercel](https://vercel.com/) for hosting solutions

---

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Contact: [davidachibiri8@gmail.com]

---

<div align="center">
  <p>Made with ❤️ for African Healthcare</p>
  <p>© 2025 CURELOG. All rights reserved.</p>
</div>

