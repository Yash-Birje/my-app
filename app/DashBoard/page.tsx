"use client"
import Dashboard from "@/app/DashBoard/DashBoard";
import Link from "next/link";
import { GamificationProvider, useGamification } from "@/context/GamificationContext";
export default function Page() {
  return <>
  <GamificationProvider>
  <Dashboard />
  If you want to go back to home, <Link href="/">Click here</Link>
  </GamificationProvider>
  </>;
}