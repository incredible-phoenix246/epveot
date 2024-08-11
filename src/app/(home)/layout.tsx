import { Suspense } from "react";
import {  Navbar } from "@/components/nav";
import { SkeletonNavbar } from "@/components/skelton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<SkeletonNavbar />}>
        <Navbar />
      </Suspense>
      {children}
    </>
  );
}
