import { redirect } from 'next/navigation';


export default function LandingPage() {
  // For development, redirect to login
  // In production, this would be a proper landing page
  redirect('/login');
}
