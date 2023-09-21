<script lang="ts">
  import { onMount } from 'svelte';

  import QRCode from 'qrcode';

  import '../../../styles/qr.css';

  let didError = false;

  onMount(() => {
    const qrCodeCanvasElement = document.getElementById('qr-code-canvas');
    const websiteURL = new URL('https://www.kennygperez.com');

    if (!qrCodeCanvasElement) {
      didError = true;
    }

    QRCode.toCanvas(qrCodeCanvasElement, websiteURL.href, { scale: 16 }, (error) => {
      if (error) {
        didError = true;
        alert(error);
        return;
      }
    });
  });
</script>

<div class="w-screen h-screen flex flex-col justify-center items-center">
  {#if didError}
    <h1>error loading QrCode</h1>
  {/if}

  <h1 class="text-5xl">Kenny's Website QR Code</h1>
  <canvas id="qr-code-canvas" />
</div>
