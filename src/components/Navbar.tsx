"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Our Work", href: "#work" },
  { name: "Blogs", href: "#blogs" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-normal px-4 md:px-8",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between w-full max-w-[1200px] glass rounded-pill px-6 transition-all duration-normal",
          isScrolled ? "py-3 shadow-md" : "py-4 shadow-sm"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Hexagon className="w-8 h-8 text-primary transition-transform duration-normal group-hover:rotate-12" />
          <span className="font-satoshi font-bold text-xl tracking-tight hidden sm:block">
            CodeCubes
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-fast relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-normal group-hover:w-full opacity-0 group-hover:opacity-100 rounded-full shadow-glow"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full glass hover:bg-[rgba(255,255,255,0.08)] light:hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-fast text-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>

          <Button variant="primary" className="hidden sm:inline-flex rounded-pill px-8">
            Get Free Audit
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+16px)] left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-normal">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-fast block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="w-full rounded-pill">
            Get Free Audit
          </Button>
        </div>
      )}
    </header>
  );
}
