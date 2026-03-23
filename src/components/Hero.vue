<script setup>
import { ref, onMounted } from "vue";

const roles = [
  "Full-Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator",
];
const currentRole = ref("");
const roleIndex = ref(0);
const charIndex = ref(0);
const isDeleting = ref(false);

const typeRole = () => {
  const current = roles[roleIndex.value];

  if (isDeleting.value) {
    currentRole.value = current.substring(0, charIndex.value - 1);
    charIndex.value--;

    if (charIndex.value === 0) {
      isDeleting.value = false;
      roleIndex.value = (roleIndex.value + 1) % roles.length;
    }
  } else {
    currentRole.value = current.substring(0, charIndex.value + 1);
    charIndex.value++;

    if (charIndex.value === current.length) {
      setTimeout(() => {
        isDeleting.value = true;
      }, 2000);
    }
  }

  const speed = isDeleting.value ? 50 : 100;
  setTimeout(typeRole, speed);
};

const openWebsite = (web) => {
  window.open(web, "_blank");
};

onMounted(() => {
  typeRole();
});
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-bg">
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
      <div class="hero-orb hero-orb-3"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-text">
        <p class="hero-greeting animate-fade-in-up">
          <span class="wave">👋</span> Hello, I'm
        </p>

        <h1 class="hero-name animate-fade-in-up delay-100">
          <span class="text-gradient">Sasit Wiratjinda</span>
        </h1>

        <div class="hero-role-wrapper animate-fade-in-up delay-200">
          <span class="hero-role">{{ currentRole }}</span>
          <span class="cursor">|</span>
        </div>

        <p class="hero-description animate-fade-in-up delay-300">
          I craft elegant, scalable web applications with modern technologies.
          Passionate about creating seamless user experiences and writing clean,
          maintainable code.
        </p>

        <div class="hero-cta animate-fade-in-up delay-400">
          <a href="#projects" class="btn btn-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View Projects
          </a>
          <a href="#contact" class="btn btn-secondary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2">
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Me
          </a>
        </div>

        <div class="hero-social animate-fade-in-up delay-500">
          <a
            href="https://github.com/Ai-Sasit"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-avatar-wrapper animate-fade-in delay-200">
          <div class="hero-avatar">
            <img src="../assets/profile.jpg" alt="Developer" />
          </div>
          <div class="hero-avatar-ring"></div>
          <div class="hero-avatar-glow"></div>
        </div>

        <div
          class="floating-badge badge-1 animate-float"
          style="cursor: pointer"
          @click="openWebsite('https://vuejs.org/?uwu')">
          <span>🥑</span> Vue.js
        </div>
        <div
          class="floating-badge badge-2 animate-float delay-200"
          style="cursor: pointer"
          @click="openWebsite('https://gofiber.io')">
          <span>🧊</span> Fiber (Go)
        </div>
        <div
          class="floating-badge badge-3 animate-float delay-400"
          style="cursor: pointer"
          @click="openWebsite('https://elysiajs.com')">
          <span>🦊</span> ElysiaJS
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scroll Down</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.hero-orb-1 {
  width: 500px;
  height: 500px;
  background: var(--color-accent-secondary);
  top: -200px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.hero-orb-2 {
  width: 400px;
  height: 400px;
  background: var(--color-accent-primary);
  bottom: -150px;
  left: -100px;
  animation: float 6s ease-in-out infinite reverse;
}

.hero-orb-3 {
  width: 300px;
  height: 300px;
  background: var(--color-accent-tertiary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float 10s ease-in-out infinite;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-greeting {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.wave {
  display: inline-block;
  animation: wave 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60%,
  100% {
    transform: rotate(0deg);
  }
}

.hero-name {
  font-size: var(--font-size-6xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--space-4);
}

.hero-role-wrapper {
  font-size: var(--font-size-2xl);
  font-weight: 500;
  color: var(--color-accent-primary);
  margin-bottom: var(--space-6);
  min-height: 40px;
}

.cursor {
  animation: blink 1s step-end infinite;
  color: var(--color-accent-primary);
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 500px;
  margin-bottom: var(--space-8);
}

.hero-cta {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

.hero-social {
  display: flex;
  gap: var(--space-4);
}

.social-link {
  width: 48px;
  height: 48px;
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
  transform: translateY(-4px);
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-avatar-wrapper {
  position: relative;
  width: 350px;
  height: 350px;
}

.hero-avatar {
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
}

.hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-avatar-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  background: var(--color-accent-gradient) border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hero-avatar-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: var(--color-accent-gradient);
  filter: blur(60px);
  opacity: 0.4;
  z-index: -1;
}

.floating-badge {
  position: absolute;
  background: var(--color-bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  box-shadow: var(--shadow-md);
}

.badge-1 {
  top: 20px;
  right: 20px;
}

.badge-2 {
  bottom: 60px;
  right: 0;
}

.badge-3 {
  bottom: 20px;
  left: 0;
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-xs);
  animation: fadeIn 1s ease 2s forwards;
  opacity: 0;
}

.mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--color-text-tertiary);
  border-radius: 12px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--color-text-tertiary);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s ease-in-out infinite;
}

@keyframes scroll {
  0%,
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-50%) translateY(10px);
  }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--space-12);
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-social {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .hero-avatar-wrapper {
    width: 280px;
    height: 280px;
  }
}

@media (max-width: 768px) {
  .hero-name {
    font-size: var(--font-size-4xl);
  }

  .hero-role-wrapper {
    font-size: var(--font-size-xl);
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .floating-badge {
    display: none;
  }
}
</style>
