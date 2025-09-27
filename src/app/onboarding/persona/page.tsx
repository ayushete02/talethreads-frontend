"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PersonaSetupPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new dynamic routing structure
    router.push("/onboarding/persona/1");
  }, [router]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/onboarding-bg.jpg')`,
      }}
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white/80">Redirecting to onboarding...</p>
      </div>
    </div>
  );
}
