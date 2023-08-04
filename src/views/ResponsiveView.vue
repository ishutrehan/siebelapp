<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
import SectionMain from "@/components/SectionMain.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
</script>

<template>
  <LayoutAuthenticated>
    <SectionTitle first>Mobile & Tablet</SectionTitle>

    <SectionMain> </SectionMain>

    <SectionTitle>Small laptop 1024px</SectionTitle>

    <SectionTitle>Laptop & desktop</SectionTitle>
  </LayoutAuthenticated>
</template>
