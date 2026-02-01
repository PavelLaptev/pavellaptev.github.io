<script lang="ts">
  type Experience = {
    role: string;
    company: string;
    about: string;
    date: string;
    location: string;
    linkedin?: string;
    duties: string[];
  };

  const experienceData: Experience[] = [
    {
      role: "Lead designer, design system developer",
      company: "Backer",
      about: "Fintech, Investment platform",
      date: "APR 2022 - Present",
      location: "San Francisco, CA, Remote",
      linkedin: "https://www.linkedin.com/company/backer529/mycompany/",
      duties: [
        "Design and develop design system using React, TypeScript, Figma, and Storybook",
        "Designing product features and user flows",
        "DesignOps"
      ]
    },
    {
      role: "Lead designer",
      company: "Alteos",
      about: "Digital insurance platform",
      date: "MAY 2019 – APR 2022",
      location: "Berlin, Germany",
      linkedin: "https://www.linkedin.com/company/alteostech/",
      duties: [
        "Development and supervision design system and UI Kits",
        "Products development",
        "Branding supervision and art direction",
        "DesignOps"
      ]
    },
    {
      role: "Product designer, interaction designer",
      company: "Farfetch",
      about: "Luxury fashion retail platform",
      date: "MAY 2018 – FEB 2019",
      location: "London, UK, Remote",
      linkedin: "https://www.linkedin.com/company/farfetch.com/",
      duties: [
        "Development and supervision Design system and UI Kits",
        "Prototypes and animations"
      ]
    },
    {
      role: "Lead designer",
      company: "Wirex",
      about: "Fintech",
      date: "MAR 2017 – MAY 2018",
      location: "London, UK & Kyiv, Ukraine",
      linkedin: "https://www.linkedin.com/company/wirex-limited/",
      duties: [
        "Web devision coordination",
        "Development and supervision UI Kits",
        "Coordination between developers and designers",
        "DesignOps"
      ]
    },
    {
      role: "Senior Product Designer",
      company: "Inborn Experience",
      about: "Digital Agency",
      date: "MAY 2015 – FEB 2017",
      location: "Kyiv, Ukraine",
      linkedin: "https://www.linkedin.com/company/inborn-experience/",
      duties: ["Motion and Interaction design", "Web design"]
    }
  ];
</script>

<section class="section">
  <h2 class="section-title">Experience</h2>

  <div class="experience-list">
    {#each experienceData as exp}
      <div class="exp-card">
        <h3>
          {exp.role}
          <span class="at">at</span>
          {#if exp.linkedin}
            <a
              href={exp.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="link-underline"
            >
              {exp.company}
            </a>
          {:else}
            {exp.company}
          {/if}
        </h3>
        <p class="about">{exp.about}</p>
        <div class="meta">
          <span>{exp.date}</span>
          <span>📍 {exp.location}</span>
        </div>
        <ul class="duties">
          {#each exp.duties as duty}
            <li>{duty}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<style>
  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .exp-card {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 8px 0;
    line-height: 1.4;
    color: var(--color-primary);
  }

  .at {
    font-style: italic;
    font-weight: normal;
    opacity: 0.5;
  }

  .about {
    font-size: 14px;
    color: var(--color-secondary);
    margin: 0 0 12px 0;
    opacity: 0.7;
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--color-secondary);
  }

  .duties {
    margin: 0;
    padding-left: 20px;
  }

  .duties li {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-secondary);
  }

  .duties li:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .experience-list {
      gap: 32px;
    }

    h3 {
      font-size: 18px;
    }
  }
</style>
