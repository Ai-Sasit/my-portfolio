<script setup>
import schoolImg from "../assets/school.jfif";
import moneyImg from "../assets/money.webp";
import hospitalImg from "../assets/hospital.jpg";
import email from "../assets/email.png";
import payment from "../assets/payment.jpg";
import canteen from "../assets/handheld.png";

const projects = [
  {
    id: 1,
    title: "School ERP Ecosystem",
    description:
      "A comprehensive platform for managing school operations, including student enrollment, attendance, grading, and communication.",
    image: schoolImg,
    tags: ["Vue.js", "Spring Boot", "MySQL", "Express.js", "Node.js"],
    featured: true,
  },
  {
    id: 2,
    title: "Automated Canteen Settlement",
    description:
      "A system for automating settlement of canteen transactions, integrating with T2P payment services.",
    image: moneyImg,
    tags: ["Vue.js", "Express.js", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: 3,
    title: "Hospital In-patient Ordering",
    description:
      "A digital platform for hospital in-patient ordering, streamlining meal selection and delivery processes.",
    image: hospitalImg,
    tags: ["Vue.js", "Spring Boot", "Microservices", "Docker", "PostgreSQL"],
    featured: true,
  },
  {
    id: 4,
    title: "Email centralized messaging System",
    description:
      "A secure, scalable messaging platform for clients to send and receive emails, with real-time notifications and analytics.",
    image: email,
    tags: [
      "Vue.js",
      "Elysia.js",
      "Bun.js",
      "MongoDB",
      "AWS (SES)",
      "AWS (SNS)",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Payment Gateway Integration",
    description:
      "A secure and efficient payment gateway integration for seamless online transactions.",
    image: payment,
    tags: [
      "Vue.js",
      "Elysia.js",
      "Bun.js",
      "MongoDB",
      "TrueMoney",
      "T2P",
      "BBL",
      "KBank",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Canteen POS Handheld System",
    description:
      "A handheld system for managing canteen point-of-sale operations, streamlining order processing and payment.",
    image: canteen,
    tags: ["Ionic", "Vue.js", "Node.js", "Android", "NFC"],
    featured: false,
  },
];
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="section-title">
        Featured <span class="text-gradient">Projects</span>
      </h2>
      <p class="section-subtitle">
        A showcase of my best work, demonstrating expertise across the full
        development stack
      </p>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card glass-card"
          :class="{ featured: project.featured }">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" loading="lazy" />
          </div>

          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{
                tag
              }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-12);
}

.project-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-card.featured {
  grid-column: span 1;
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-content {
  padding: var(--space-6);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.project-description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.7;
  flex: 1;
  margin-bottom: var(--space-4);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.projects-cta {
  text-align: center;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 180px;
  }
}
</style>
