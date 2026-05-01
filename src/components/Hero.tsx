import * as React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <Section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", 
            backgroundSize: "32px 32px" 
          }}
        />
        
        {/* Radial Top Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        
        {/* Secondary floating glow */}
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen animate-pulse duration-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse delay-1000 duration-slow" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill glass mb-8 animate-in fade-in slide-in-from-bottom-4 duration-normal">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium tracking-wide">
            AI-Powered Digital Agency
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-[1000px] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-normal delay-150 fill-mode-both">
          Build High-Converting Websites That Actually{" "}
          <span className="text-transparent bg-clip-text bg-gradient-primary relative whitespace-nowrap">
            Generate Revenue
            {/* Subtle text glow behind gradient */}
            <span className="absolute inset-0 bg-gradient-primary blur-2xl opacity-40 -z-10" aria-hidden="true">
              Generate Revenue
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-[600px] text-lg md:text-xl text-secondary mb-12 animate-in fade-in slide-in-from-bottom-8 duration-normal delay-300 fill-mode-both">
          We combine cutting-edge design, AI automation, and engineering excellence to build digital experiences that scale your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-normal delay-500 fill-mode-both">
          <Button variant="primary" size="lg" className="w-full sm:w-auto rounded-pill group">
            Get Free Audit
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-normal group-hover:translate-x-1" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-pill">
            View Our Work
          </Button>
        </div>

        {/* Trust Row */}
        <div className="mt-20 pt-10 border-t border-[rgba(255,255,255,0.08)] w-full max-w-[800px] animate-in fade-in duration-slow delay-700 fill-mode-both">
          <p className="text-sm font-medium text-muted uppercase tracking-widest mb-6">
            Trusted by fast-growing companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-normal">
            {/* Minimal logo placeholders (text for now) */}
            <span className="text-xl font-satoshi font-bold">Acme Corp</span>
            <span className="text-xl font-satoshi font-bold tracking-tighter">GlobalScale</span>
            <span className="text-xl font-satoshi font-bold italic">Nexus</span>
            <span className="text-xl font-satoshi font-bold">Quantum</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
