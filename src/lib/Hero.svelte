<script lang="ts">
  import { onMount } from "svelte";

  interface Greeting {
    text: string;
    language: string;
    countries: string[]; // ISO country codes
  }

  const greetings: Greeting[] = [
    {
      text: "Hi there!",
      language: "English",
      countries: ["US", "GB", "CA", "AU", "NZ", "IE"]
    },
    {
      text: "Hey!",
      language: "English",
      countries: ["US", "GB", "CA", "AU", "NZ", "IE"]
    },
    {
      text: "Hello!",
      language: "English",
      countries: ["US", "GB", "CA", "AU", "NZ", "IE"]
    },
    { text: "Howdy!", language: "English", countries: ["US"] },
    { text: "Hallo!", language: "German", countries: ["DE", "AT", "CH", "LI"] },
    { text: "Moin!", language: "German", countries: ["DE"] },
    { text: "Servus!", language: "German", countries: ["DE", "AT"] },
    { text: "Привет!", language: "Russian", countries: ["RU", "BY", "KZ"] },
    {
      text: "¡Hola!",
      language: "Spanish",
      countries: ["ES", "MX", "AR", "CO", "CL", "PE", "VE"]
    },
    { text: "¡Qué tal!", language: "Spanish", countries: ["ES", "MX", "AR"] },
    { text: "Salut!", language: "French", countries: ["FR", "BE", "CH", "CA"] },
    { text: "Ciao!", language: "Italian", countries: ["IT", "CH", "SM"] },
    { text: "やあ!", language: "Japanese", countries: ["JP"] },
    { text: "안녕!", language: "Korean", countries: ["KR"] },
    {
      text: "Olá!",
      language: "Portuguese",
      countries: ["PT", "BR", "AO", "MZ"]
    },
    { text: "Oi!", language: "Portuguese", countries: ["BR"] },
    { text: "Hej!", language: "Swedish", countries: ["SE", "DK", "NO"] },
    { text: "Hei!", language: "Norwegian", countries: ["NO"] },
    { text: "嗨!", language: "Chinese", countries: ["CN", "TW"] },
    { text: "أهلا!", language: "Arabic", countries: ["SA", "AE", "EG"] },
    { text: "Merhaba!", language: "Turkish", countries: ["TR"] },
    { text: "Selam!", language: "Turkish", countries: ["TR"] },
    { text: "Γεια!", language: "Greek", countries: ["GR", "CY"] },
    { text: "Привіт!", language: "Ukrainian", countries: ["UA"] },
    { text: "Cześć!", language: "Polish", countries: ["PL"] },
    { text: "Ahoj!", language: "Czech", countries: ["CZ", "SK"] },
    { text: "Nazdar!", language: "Czech", countries: ["CZ"] },
    { text: "Hoi!", language: "Dutch", countries: ["NL", "BE"] },
    { text: "Terve!", language: "Finnish", countries: ["FI"] },
    { text: "Moi!", language: "Finnish", countries: ["FI"] },
    { text: "Szia!", language: "Hungarian", countries: ["HU"] },
    { text: "Szervusz!", language: "Hungarian", countries: ["HU"] },
    { text: "Shalom!", language: "Hebrew", countries: ["IL"] },
    { text: "שלום!", language: "Hebrew", countries: ["IL"] },
    { text: "สวัสดี!", language: "Thai", countries: ["TH"] },
    { text: "Kumusta!", language: "Tagalog", countries: ["PH"] },
    { text: "Halo!", language: "Indonesian", countries: ["ID"] },
    { text: "Helo!", language: "Welsh", countries: ["GB"] }
  ];

  let userCountry: string | null = null;
  let randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)].text;

  function getGreeting(country: string | null): string {
    // If we have a country, prioritize greetings from that country (70% chance)
    if (country && Math.random() < 0.7) {
      const localGreetings = greetings.filter((g) =>
        g.countries.includes(country)
      );
      if (localGreetings.length > 0) {
        return localGreetings[Math.floor(Math.random() * localGreetings.length)]
          .text;
      }
    }
    // Otherwise, random greeting from all
    return greetings[Math.floor(Math.random() * greetings.length)].text;
  }

  function changeGreeting() {
    const newGreeting = getGreeting(userCountry);
    // Make sure we get a different greeting
    if (newGreeting !== randomGreeting) {
      randomGreeting = newGreeting;
    } else {
      changeGreeting();
    }
  }

  onMount(async () => {
    // Fetch user's country from IP in the background
    try {
      const response = await fetch("/location.json");
      const data = await response.json();
      userCountry = data.country_code;
      // Update greeting based on location
      randomGreeting = getGreeting(userCountry);
    } catch (error) {
      console.log("Could not detect location, keeping random greeting");
    }
  });
</script>

<section class="hero">
  <h1>
    <span class="greeting" on:click={changeGreeting}>{randomGreeting}</span>
    <img src="/assets/ava.png" alt="Pavel's avatar" class="avatar" /> I'm Pavel,
    a digital designer based in Berlin. Love design, open source and contribute to
    community.
  </h1>
</section>

<style>
  .hero {
    margin-bottom: 80px;
  }

  h1 {
    font-size: 48px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;
    color: var(--color-primary);
    text-wrap: balance;
  }

  .greeting {
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .greeting:hover {
    opacity: 0.7;
  }

  .avatar {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    object-fit: cover;
    vertical-align: middle;
    display: inline-block;
    margin-left: 4px;
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    .hero {
      margin-bottom: 60px;
    }

    h1 {
      font-size: 32px;
      line-height: 1.4;
    }

    .avatar {
      width: 32px;
      height: 32px;
      transform: translateY(-2px);
    }
  }
</style>
