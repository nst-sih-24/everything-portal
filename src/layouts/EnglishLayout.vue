<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <q-item>
            <q-item-section avatar>
              <q-img
              src="https://upload.wikimedia.org/wikipedia/hi/f/fb/Delhi_Transport_Corporation_logo.png"
              >
            </q-img>
          </q-item-section>
          <q-item-section>
            <div class="text-h6 text-primary">
              Delhi Transport Corporation
            </div>
            <div class="text-caption text-primary">
              Government of NTC of Delhi
            </div>
          </q-item-section>
        </q-item>

        <!-- <img  alt="Logo" style="height: 50px;"/> -->
      </q-toolbar-title>
      <q-btn flat stretch color="primary" icon="home" to="/"/>
      <q-btn flat stretch color="primary" label="About Us" to="/about"/>
      <q-btn flat stretch color="primary" label="Contact Us"/>
      <q-btn flat stretch color="primary" label="हिन्दी" to="/hi" />
      <q-btn flat stretch color="primary" label="English" to="/" />
    </q-toolbar>
  </q-header>

  <q-page-container>
    <router-view />
  </q-page-container>
    <PageFooterEnglish />
  </q-layout>
</template>

<script setup>
import PageFooterEnglish from "src/components/PageFooterEnglish.vue";
</script>
