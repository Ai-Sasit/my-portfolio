<script setup>
const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      "Vue.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Vuetify",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      "Node.js",
      "Bun.js",
      "Express",
      "Elysia",
      "FastAPI (Python)",
      "Fiber (Go)",
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  },
  {
    category: "DevOps",
    icon: "🚀",
    items: ["Docker", "AWS", "Nginx", "Certbot", "Linux"],
  },
];

const stats = [
  { value: "3", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
];
</script>

<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title">About <span class="text-gradient">Me</span></h2>
      <p class="section-subtitle">
        Passionate about building exceptional digital experiences with
        cutting-edge technologies
      </p>

      <div class="about-content">
        <div class="about-text">
          <div class="about-card glass-card">
            <h3>Who I Am</h3>
            <p>
              I'm a Full Stack Developer with 3+ years of experience
              specializing in Java Spring Boot, Express, and Elysia. Proven
              expertise in developing secure Fintech solutions, Payment Gateway
              integrations, and complex School ERP systems.
            </p>
            <p>
              Proficient in building high-performance applications with Vue.js
              and managing scalable cloud infrastructure via AWS <br />(EC2,
              Lightsail, S3, SES).
            </p>
            <div class="about-highlights">
              <div class="highlight">
                <span class="highlight-icon">✨</span>
                <span>Clean Code Advocate</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🎯</span>
                <span>Problem Solver</span>
              </div>
              <div class="highlight">
                <span class="highlight-icon">🤝</span>
                <span>Team Collaborator</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-skills">
          <div
            v-for="skill in skills"
            :key="skill.category"
            class="skill-card glass-card">
            <div class="skill-header">
              <span class="skill-icon">{{ skill.icon }}</span>
              <h4>{{ skill.category }}</h4>
            </div>
            <div class="skill-tags">
              <span v-for="item in skill.items" :key="item" class="tag">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="about-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-value text-gradient">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--color-bg-secondary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  margin-bottom: var(--space-16);
}

.about-card {
  padding: var(--space-8);
  height: 100%;
}

.about-card h3 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-6);
  background: var(--color-accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-card p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  line-height: 1.8;
}

.about-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-6);
}

.highlight {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-glass);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
}

.highlight-icon {
  font-size: var(--font-size-base);
}

.about-skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.skill-card {
  padding: var(--space-6);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.skill-icon {
  font-size: var(--font-size-2xl);
}

.skill-header h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  padding: var(--space-10);
  background: var(--color-bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: var(--font-size-4xl);
  font-weight: 800;
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-skills {
    grid-template-columns: 1fr;
  }

  .about-stats {
    padding: var(--space-6);
  }

  .stat-value {
    font-size: var(--font-size-3xl);
  }
}
</style>
