"use client";

import { useClerk } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../theme/ModeToggle";
import LandingPage from "@/app/LandingPage/LandingPage";

export function ModNavBar() {
  // ✅ Call the hook at the top level of the component
  const { signOut } = useClerk();

  // Make handler async and await signOut before redirect
  async function sendToLandingPage() {
    try {
      await signOut();
      // redirect after sign out
      window.location.href = "/LandingPage";
    } catch (err) {
      console.error("Sign out failed:", err);
      // fallback redirect anyway or show toast
      window.location.href = "/";
    }
  }

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {/* attach the onClick to an interactive element */}
          <NavigationMenuItem>
            <button
              onClick={sendToLandingPage}
              className="w-full text-left px-2 py-1"
              type="button"
            >
              Landing Page
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </>
  );
}
