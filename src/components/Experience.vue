<script setup>
const experiences = [
  {
    id: 1,
    role: "Junior Full-Stack Developer",
    company: "Okontek Company Limited",
    location: "Ratchathewi, Bangkok, Thailand",
    period: "2023 - Present",
    description:
      "Contributed to development of web applications using Vue.js, Node.js and Java Spring Boot. Collaborated with cross-functional teams to design and implement new features, optimize performance, and ensure code quality.",
    achievements: [
      "Developed and deployed School ERP system used by 10+ schools, improving administrative efficiency",
      "Developed and maintained Auto sattlement system for financial transactions, reducing manual processing time",
      "Developed Hospital In-Patient Order system, streamlining patient care and improving communication between departments",
      "Developed and maintained Payment Gateway system, such as BBL, KBank, T2P, TrueMoney, improving payment processing reliability and security",
      "Developed Tuition Fee & Registration system, simplifying student enrollment and fee management processes for International School",
    ],
  },
  {
    id: 2,
    role: "Internship (Front-End Developer)",
    company: "Varobol Company Limited",
    location: "Amphoe Mueang, Khon Kaen, Thailand",
    period: "Summer 2022",
    description:
      "Contributed to front-end development of food daelivery app. Collaborated with designers to create responsive UI components and improved user experience.",
    achievements: [
      "Built responsive UI components using Vue.js and Ionic Framework",
      "Improved app security by implementing sensitive data masking for user information privacy",
      "Optimized performance loading images and assets, reducing load times",
    ],
  },
];
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container">
      <h2 class="section-title">
        Work <span class="text-gradient">Experience</span>
      </h2>
      <p class="section-subtitle">
        My professional journey through the tech industry
      </p>

      <div class="timeline">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          class="timeline-item"
          :class="{ 'timeline-right': index % 2 === 1 }">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>

          <div class="timeline-content glass-card">
            <div class="timeline-header">
              <span class="timeline-period">{{ exp.period }}</span>
              <span class="timeline-location">📍 {{ exp.location }}</span>
            </div>

            <h3 class="timeline-role">{{ exp.role }}</h3>
            <h4 class="timeline-company">{{ exp.company }}</h4>

            <p class="timeline-description">{{ exp.description }}</p>

            <ul class="timeline-achievements">
              <li v-for="achievement in exp.achievements" :key="achievement">
                <span class="achievement-icon">✓</span>
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background: var(--color-bg-secondary);
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--color-accent-gradient);
  opacity: 0.3;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding-right: var(--space-10);
  padding-bottom: var(--space-10);
}

.timeline-item.timeline-right {
  margin-left: 50%;
  padding-right: 0;
  padding-left: var(--space-10);
}

.timeline-marker {
  position: absolute;
  right: -12px;
  top: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-item.timeline-right .timeline-marker {
  right: auto;
  left: -12px;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: var(--color-accent-gradient);
  border-radius: 50%;
  box-shadow: var(--shadow-glow);
  animation: pulse 2s ease-in-out infinite;
}

.timeline-content {
  padding: var(--space-6);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
  flex-wrap: wrap;
  gap: var(--space-2);
}

.timeline-period {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-accent-primary);
  background: rgba(0, 212, 255, 0.1);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
}

.timeline-location {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.timeline-role {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.timeline-company {
  font-size: var(--font-size-base);
  color: var(--color-accent-secondary);
  margin-bottom: var(--space-4);
}

.timeline-description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.timeline-achievements {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.timeline-achievements li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.achievement-icon {
  color: var(--color-accent-primary);
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 12px;
  }

  .timeline-item,
  .timeline-item.timeline-right {
    width: 100%;
    padding-left: var(--space-12);
    padding-right: 0;
    margin-left: 0;
  }

  .timeline-marker,
  .timeline-item.timeline-right .timeline-marker {
    left: 0;
    right: auto;
  }
}
</style>
