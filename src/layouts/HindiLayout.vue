<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
  <q-toolbar class="bg-white q-pa-sm">
    <!-- Logo and Title Section -->
    <q-toolbar-title class="row items-center">
      <q-item class="row items-center">
        <q-item-section avatar>
          <q-img
            src="https://upload.wikimedia.org/wikipedia/hi/f/fb/Delhi_Transport_Corporation_logo.png"
            style="max-width: 50px;"
          ></q-img>
        </q-item-section>
        <q-item-section>
          <div class="text-h6 text-primary">दिल्ली परिवहन निगम</div>
          <div class="text-caption text-primary">दिल्ली एनटीसी सरकार</div>
        </q-item-section>
      </q-item>
    </q-toolbar-title>

    <!-- Buttons Section -->
    <div class="row items-center justify-end q-gutter-sm q-mt-sm q-mb-sm">
      <q-btn flat dense color="primary" icon="home" />
      <q-btn flat dense color="primary" label="AboutUs" />
      <q-btn flat dense color="primary" label="ContactUs" />
    </div>

    <!-- Language Section -->
    <div class="row items-center justify-end language-toggle q-mt-sm q-mb-sm">
      <q-btn
        flat
        dense
        color="primary"
        label="हिन्दी"
        to="/hi"
        style="padding-right: 4px;"
      />
      <span style="color: var(--q-primary); padding: 0 4px;">|</span>
      <q-btn
        flat
        dense
        color="primary"
        label="English"
        to="/"
        style="padding-left: 4px;"
      />
    </div>
  </q-toolbar>
</q-header>


    <q-page-container>
      <router-view />
    </q-page-container>

    <PageFooterHindi />
  </q-layout>
</template>

<script setup>
import PageFooterHindi from "src/components/PageFooterHindi.vue";
</script>
