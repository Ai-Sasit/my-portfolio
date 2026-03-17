<script setup>
import { ref } from "vue";

const currentYear = new Date().getFullYear();

const showBackToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <a href="#home" class="footer-logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">Dev</span>
          <span class="logo-bracket">/&gt;</span>
        </a>
        <p class="footer-tagline">
          Building digital experiences with passion and precision.
        </p>
      </div>

      <nav class="footer-nav">
        <a
          v-for="link in footerLinks"
          :key="link.name"
          :href="link.href"
          class="footer-link">
          {{ link.name }}
        </a>
      </nav>

      <div class="footer-social">
        <a
          href="https://github.com/Ai-Sasit"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/sasit-ai-26289625a"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="https://leetcode.com/u/Aizland"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="Twitter">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.414 17.414a2 2 0 1 1-2.828-2.828l4-4a2 2 0 1 1 2.828 2.828l-4 4z" />
          </svg>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-content">
        <p class="copyright">
          © {{ currentYear }} Sasit Ai. All rights reserved.
        </p>
        <p class="made-with">
          Made with <span class="heart">❤️</span> using Vue.js & Vite
        </p>
      </div>
    </div>

    <button class="back-to-top" @click="scrollToTop" aria-label="Back to top">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  position: relative;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-12) 0;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-logo {
  font-size: var(--font-size-xl);
  font-weight: 700;
  font-family: var(--font-mono);
  display: inline-flex;
  align-items: center;
  gap: 2px;
  width: fit-content;
}

.logo-bracket {
  color: var(--color-accent-primary);
}

.logo-text {
  background: var(--color-accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  max-width: 250px;
}

.footer-nav {
  display: flex;
  gap: var(--space-6);
}

.footer-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-accent-primary);
}

.footer-social {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--color-bg-tertiary);
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: var(--space-6) 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright,
.made-with {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

.heart {
  animation: heartbeat 1.5s ease infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.back-to-top {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-gradient);
  border-radius: var(--radius-lg);
  color: var(--color-bg-primary);
  box-shadow: var(--shadow-glow);
  transition: all var(--transition-base);
  z-index: var(--z-fixed);
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.5);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-6);
  }

  .footer-brand {
    align-items: center;
  }

  .footer-tagline {
    text-align: center;
  }

  .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: var(--space-2);
    text-align: center;
  }
}
</style>
