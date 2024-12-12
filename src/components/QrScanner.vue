<template>
  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-btn
      fab
      icon="qr_code_scanner"
      color="primary"
      no-caps
      @click="startScan"
    >
      <span class="q-mx-sm">Scan</span>
    </q-btn>
  </q-page-sticky>

  <q-dialog v-model="showScanner">
    <q-card>
      <q-inner-loading :showing="loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
      <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>
    </q-card>
  </q-dialog>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'QRScanner',
  components: {
    QrcodeStream,
  },
  setup() {
    const showScanner = ref(false);
    const errorMessage = ref(null);
    const loading = ref(false);

    const startScan = () => {
      showScanner.value = true;
    };

    const onDecode = (content) => {
      showScanner.value = false;
      console.log(content);
    };

    const onInit = (promise) => {
      loading.value = true;
      promise
        .then(() => {
          console.info('Successfully initialized! Ready for scanning now!');
          loading.value = false;
        })
        .catch((error) => {
          if (error.name === 'NotAllowedError') {
            errorMessage.value = 'Hey! I need access to your camera';
          } else if (error.name === 'NotFoundError') {
            errorMessage.value = 'Do you even have a camera on your device?';
          } else if (error.name === 'NotSupportedError') {
            errorMessage.value = 'Seems like this page is served in non-secure context (HTTPS, localhost or file://)';
          } else if (error.name === 'NotReadableError') {
            errorMessage.value = "Couldn't access your camera. Is it already in use?";
          } else if (error.name === 'OverconstrainedError') {
            errorMessage.value = "Constraints don't match any installed camera. Did you ask for the front camera although there is none?";
          } else {
            errorMessage.value = 'UNKNOWN ERROR: ' + error.message;
          }

          loading.value = false;

          this.$q.notify({
            message: errorMessage.value,
            type: 'negative',
          });
        });
    };

    return {
      showScanner,
      errorMessage,
      loading,
      startScan,
      onDecode,
      onInit,
    };
  },
});
</script>
