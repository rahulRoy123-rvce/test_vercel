"use client";

// import { DotBackground } from "../../components/ui/dot-background";
import {ContactForm}  from "../../components/contactform";
import Link from "next/link";
import SiteHeader  from "../../components/site-header";
import { motion } from "framer-motion";

export default function ScheduleDemoPage() {
  return (
    <div>
      {/* Header/Navigation */}
     <SiteHeader/>

      <main className="relative text-white">
        <ContactForm />
      </main>
    </div>
  );
}