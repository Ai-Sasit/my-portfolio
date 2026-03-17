<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "sasit.wi.work@gmail.com",
    href: "mailto:sasit.wi.work@gmail.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Ratchathewi, Bangkok, Thailand",
    href: null,
  },
  {
    icon: "💼",
    label: "Availability",
    value: "Open to opportunities",
    href: null,
  },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Ai-Sasit", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sasit-ai-26289625a",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Aizland/",
    icon: "leetcode",
  },
  { name: "Email", href: "mailto:sasit.wi.work@gmail.com", icon: "email" },
];
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title">
        Get in <span class="text-gradient">Touch</span>
      </h2>
      <p class="section-subtitle">
        Have a project in mind or just want to chat? I'd love to hear from you!
      </p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-card glass-card">
            <h3>Let's Connect</h3>
            <p>
              I'm always excited to work on new projects and collaborate with
              talented people. Whether you have a question or just want to say
              hi, feel free to reach out!
            </p>

            <div class="contact-details">
              <a
                v-for="info in contactInfo"
                :key="info.label"
                :href="info.href"
                class="contact-item"
                :class="{ clickable: info.href }">
                <span class="contact-icon">{{ info.icon }}</span>
                <div class="contact-text">
                  <span class="contact-label">{{ info.label }}</span>
                  <span class="contact-value">{{ info.value }}</span>
                </div>
              </a>
            </div>

            <div class="contact-social">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn"
                :aria-label="link.name">
                <svg
                  v-if="link.icon === 'github'"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <svg
                  v-else-if="link.icon === 'linkedin'"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <svg
                  v-else-if="link.icon === 'leetcode'"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.414 17.414a2 2 0 1 1-2.828-2.828l4-4a2 2 0 1 1 2.828 2.828l-4 4z" />
                </svg>
                <svg
                  v-else
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- <div class="contact-form-wrapper">
          <form class="contact-form glass-card" @submit.prevent="handleSubmit">
            <div v-if="isSubmitted" class="form-success">
              <div class="success-icon">✓</div>
              <h4>Message Sent!</h4>
              <p>Thanks for reaching out. I'll get back to you soon!</p>
            </div>
            
            <template v-else>
              <div class="form-group">
                <label for="name">Your Name</label>
                <input 
                  id="name"
                  v-model="form.name"
                  type="text" 
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  id="email"
                  v-model="form.email"
                  type="email" 
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary btn-submit"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="spinner"></span>
                <span v-else>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </span>
              </button>
            </template>
          </form>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-content {
  display: flex;
  justify-content: center;
}

.contact-info {
  width: 100%;
}

.contact-card {
  padding: var(--space-8);
  height: 100%;
}

.contact-card h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-4);
  background: var(--color-accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-card > p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-8);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  background: var(--color-bg-glass);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.contact-item.clickable:hover {
  background: var(--color-bg-tertiary);
  transform: translateX(4px);
}

.contact-icon {
  font-size: var(--font-size-2xl);
}

.contact-text {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-value {
  font-weight: 500;
}

.contact-social {
  display: flex;
  gap: var(--space-3);
}

.social-btn {
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

.social-btn:hover {
  background: var(--color-bg-tertiary);
  border-color: var(--color-accent-primary);
  color: var(--color-accent-primary);
  transform: translateY(-4px);
}

.contact-form {
  padding: var(--space-8);
}

.form-group {
  margin-bottom: var(--space-6);
}

.form-group label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 500;
  margin-bottom: var(--space-2);
  color: var(--color-text-secondary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--space-4);
  font-family: inherit;
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-text-tertiary);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent-primary);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

.btn-submit {
  width: 100%;
  padding: var(--space-4) var(--space-6);
  font-size: var(--font-size-base);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.form-success {
  text-align: center;
  padding: var(--space-12) var(--space-4);
}

.success-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-bg-primary);
  background: var(--color-accent-gradient);
  border-radius: 50%;
}

.form-success h4 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-2);
}

.form-success p {
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-card,
  .contact-form {
    padding: var(--space-6);
  }
}
</style>
