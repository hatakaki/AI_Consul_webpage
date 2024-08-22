<template>
  <v-app>
    <HeaderSection />
    <v-main>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <AchievementsSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </v-main>
  </v-app>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import HomeSection from './views/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import AchievementsSection from './components/AchievementsSection.vue'; // ここに誤りがないか確認
import TeamSection from './components/TeamSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: {
    HeaderSection,
    HomeSection,
    AboutSection,
    ServicesSection,
    AchievementsSection,
    TeamSection,
    ContactSection,
    FooterSection,
  },
};
</script>
