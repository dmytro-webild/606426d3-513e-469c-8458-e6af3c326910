"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Link, Search, Settings } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Process",
          id: "services",
        },
        {
          name: "Results",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Strive Digitals"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="Increase Your Website Visibility"
      description="We craft data-driven SEO strategies that put your brand at the top of search results—and keep it there."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-technology-digital-wave-particle-background_1048-12583.jpg",
          imageAlt: "SEO Growth",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-communications-design-structure-with-connecting-lines-dots_1048-13854.jpg",
          imageAlt: "SEO Growth",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-data-technology-background-with-low-poly-plexus-design_1048-18066.jpg",
          imageAlt: "SEO Growth",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-digital-futuristic-technology-background_53876-102622.jpg",
          imageAlt: "SEO Growth",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-dark-background-with-purple-lines-generative-ai_169016-30670.jpg",
          imageAlt: "SEO Growth",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-modern-techno-background-with-particles-with-shallow-depth-field_1048-12266.jpg",
          imageAlt: "Analytics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-cyber-particles-background-with-flowing-dots_1048-12410.jpg",
          imageAlt: "Analytics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-futuristic-background-with-particle-design_1048-11886.jpg",
          imageAlt: "Analytics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-background-with-flowing-digital-particles-design_1048-15280.jpg",
          imageAlt: "Analytics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139330.jpg",
          imageAlt: "Analytics",
        },
      ]}
      tag="Award-Winning SEO Agency"
      buttons={[
        {
          text: "Get a Free Quote",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/sad-gloomy-office-manage-frowning-standing-tired-against-white-background_1258-113713.jpg",
          alt: "Client review",
        },
        {
          src: "http://img.b2bpic.net/free-photo/angry-man-roll-up-sleeves-looking-offended-getting-ready-fight-standing-white-background_1258-112755.jpg",
          alt: "Client review",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-bald-senior-dressed-stylish-suit-posing-against-dark-background_613910-17578.jpg",
          alt: "Client review",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bearded-man-brown-suit-wearing-glasses-looking-camera-happy-positive-with-arms-crossed-standing-purple-background_141793-110749.jpg",
          alt: "Client review",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-1524.jpg",
          alt: "Client review",
        },
      ]}
      avatarText="Trusted by 200+ brands"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Results that Actually Matter"
      description="Dominate search engine results pages with our comprehensive and data-driven approach."
      accordionItems={[
        {
          id: "1",
          title: "Search Visibility",
          content: "Dominate SERPs with targeted keyword strategies that get your brand seen.",
        },
        {
          id: "2",
          title: "Brand Trust",
          content: "Build unshakeable domain authority through quality backlinks.",
        },
        {
          id: "3",
          title: "Content Marketing",
          content: "Strategic content that attracts, engages, and converts.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/office-worker-analyzing-business-charts-laptop-using-paperwork-research-information-make-data-report-working-from-home-startup-analysis-with-web-graphs-browsing-internet_482257-50961.jpg"
      mediaAnimation="slide-up"
      imageAlt="Performance analytics dashboard"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "200+",
          description: "Clients Served",
        },
        {
          id: "2",
          value: "94%",
          description: "Retention Rate",
        },
        {
          id: "3",
          value: "5x",
          description: "Average ROI",
        },
      ]}
      title="Proven Growth Metrics"
      description="Our success is measured by the growth of our partners."
    />
  </div>

  <div id="services" data-section="services">
      <AboutMetric
      useInvertedBackground={false}
      title="Our SEO Process"
      metrics={[
        {
          icon: Search,
          label: "Analysis",
          value: "Customised Strategy",
        },
        {
          icon: Settings,
          label: "Technical",
          value: "Website Optimisation",
        },
        {
          icon: Link,
          label: "PR",
          value: "Authority Building",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Aabid Desai",
          role: "Founder",
          company: "Tech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/thinking-man-dark-suit-studio-shot_613910-10754.jpg",
        },
        {
          id: "2",
          name: "Sarah Khan",
          role: "CEO",
          company: "Retail",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-black-man-wearing-suit-felt-hat_613910-1878.jpg",
        },
        {
          id: "3",
          name: "Rahul Mehta",
          role: "Owner",
          company: "Media",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5353.jpg",
        },
        {
          id: "4",
          name: "Priya Sharma",
          role: "CMO",
          company: "E-com",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-man-with-long-hair-dressed-yellow-jacket-red-shirt_613910-10364.jpg",
        },
        {
          id: "5",
          name: "Vikram Singh",
          role: "Founder",
          company: "Logistics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-black-man-wool-suit_613910-16027.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "320%",
          label: "Traffic Growth",
        },
        {
          value: "#1",
          label: "Core Rank",
        },
        {
          value: "DR 72",
          label: "Authority",
        },
      ]}
      title="Real Growth Stories"
      description="Trusted by ambitious businesses in Ahmedabad and beyond."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How long does SEO take?",
          content: "Results typically appear within 3-6 months depending on competition.",
        },
        {
          id: "2",
          title: "Do you offer link building?",
          content: "Yes, we focus on high-quality white-hat link building.",
        },
        {
          id: "3",
          title: "Why Ahmedabad SEO?",
          content: "We combine local expertise with global SEO standards for maximum impact.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about our SEO services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
      ]}
      title="Trusted Partners"
      description="Leading companies choose Strive Digitals for results."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to dominate search results? Let's discuss your project."
      buttons={[
        {
          text: "Get In Touch",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Strive Digitals"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
