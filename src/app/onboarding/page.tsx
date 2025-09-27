"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if onboarding was already completed
    const onboardingCompleted = localStorage.getItem("onboarding-completed");

    if (onboardingCompleted === "true") {
      // Redirect to home if already completed
      router.push("/home");
    } else {
      // Start onboarding from the first question
      router.push("/onboarding/persona/1");
    }
  }, [router]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/onboarding-bg.jpg')`,
      }}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-8">Tale Threads</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-white/80">
          Starting your personalization journey...
        </p>
      </div>
    </div>
  );
}
