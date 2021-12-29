<div class="stars">
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
  <div class="star" />
</div>

<style>
  .stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    transform: rotate(-45deg);
  }

  .star {
    --star-color: var(--primary-color);
    --star-tail-length: 6em;
    --star-tail-height: 2px;
    --star-width: calc(var(--star-tail-length) / 6);
    --fall-duration: 9s;
    --tail-fade-duration: var(--fall-duration);
    position: absolute;
    top: var(--top-offset);
    left: 0;
    width: var(--star-tail-length);
    height: var(--star-tail-height);
    color: var(--star-color);
    background: linear-gradient(45deg, currentColor, transparent);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px currentColor);
    transform: translate3d(104em, 0, 0);
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite,
      tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
  }
  @media screen and (max-width: 750px) {
    .star {
      animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
    }
  }
  .star:nth-child(1) {
    --star-tail-length: 6.73em;
    --top-offset: 94.57vh;
    --fall-duration: 8.044s;
    --fall-delay: 7.05s;
  }
  .star:nth-child(2) {
    --star-tail-length: 5.87em;
    --top-offset: 52.66vh;
    --fall-duration: 7.463s;
    --fall-delay: 5.639s;
  }
  .star:nth-child(3) {
    --star-tail-length: 6.94em;
    --top-offset: 31.82vh;
    --fall-duration: 8.878s;
    --fall-delay: 8.179s;
  }
  .star:nth-child(4) {
    --star-tail-length: 7.11em;
    --top-offset: 87.68vh;
    --fall-duration: 10.764s;
    --fall-delay: 3.484s;
  }
  .star:nth-child(5) {
    --star-tail-length: 5.68em;
    --top-offset: 97.32vh;
    --fall-duration: 11.533s;
    --fall-delay: 2.106s;
  }
  .star:nth-child(6) {
    --star-tail-length: 6.89em;
    --top-offset: 49.8vh;
    --fall-duration: 8.395s;
    --fall-delay: 9.944s;
  }
  .star:nth-child(7) {
    --star-tail-length: 5.36em;
    --top-offset: 11.78vh;
    --fall-duration: 8.379s;
    --fall-delay: 6.423s;
  }
  .star:nth-child(8) {
    --star-tail-length: 6.14em;
    --top-offset: 40.49vh;
    --fall-duration: 7.526s;
    --fall-delay: 7.927s;
  }
  .star:nth-child(9) {
    --star-tail-length: 5.5em;
    --top-offset: 59.77vh;
    --fall-duration: 8.043s;
    --fall-delay: 4.554s;
  }
  .star:nth-child(10) {
    --star-tail-length: 5.25em;
    --top-offset: 61.79vh;
    --fall-duration: 8.053s;
    --fall-delay: 6.885s;
  }
  .star:nth-child(11) {
    --star-tail-length: 6.3em;
    --top-offset: 93.73vh;
    --fall-duration: 6.554s;
    --fall-delay: 3.149s;
  }
  .star:nth-child(12) {
    --star-tail-length: 5.36em;
    --top-offset: 37.65vh;
    --fall-duration: 11.435s;
    --fall-delay: 0.206s;
  }
  .star:nth-child(13) {
    --star-tail-length: 6.23em;
    --top-offset: 25.22vh;
    --fall-duration: 11.66s;
    --fall-delay: 8.267s;
  }
  .star:nth-child(14) {
    --star-tail-length: 6.34em;
    --top-offset: 75.18vh;
    --fall-duration: 9.203s;
    --fall-delay: 3.146s;
  }
  .star:nth-child(15) {
    --star-tail-length: 7.21em;
    --top-offset: 33.92vh;
    --fall-duration: 11.687s;
    --fall-delay: 8.837s;
  }
  .star:nth-child(16) {
    --star-tail-length: 7.02em;
    --top-offset: 95.39vh;
    --fall-duration: 8.882s;
    --fall-delay: 8.997s;
  }
  .star:nth-child(17) {
    --star-tail-length: 6.21em;
    --top-offset: 72.26vh;
    --fall-duration: 8.28s;
    --fall-delay: 7.661s;
  }
  .star:nth-child(18) {
    --star-tail-length: 6.53em;
    --top-offset: 94.35vh;
    --fall-duration: 8.759s;
    --fall-delay: 4.08s;
  }
  .star:nth-child(19) {
    --star-tail-length: 6.04em;
    --top-offset: 20.98vh;
    --fall-duration: 8.074s;
    --fall-delay: 3.223s;
  }
  .star:nth-child(20) {
    --star-tail-length: 6.86em;
    --top-offset: 3.73vh;
    --fall-duration: 6.247s;
    --fall-delay: 4.525s;
  }
  .star:nth-child(21) {
    --star-tail-length: 7.21em;
    --top-offset: 89.77vh;
    --fall-duration: 7.752s;
    --fall-delay: 1.197s;
  }
  .star:nth-child(22) {
    --star-tail-length: 7.44em;
    --top-offset: 9.73vh;
    --fall-duration: 7.565s;
    --fall-delay: 6.297s;
  }
  .star:nth-child(23) {
    --star-tail-length: 6.65em;
    --top-offset: 64.82vh;
    --fall-duration: 6.448s;
    --fall-delay: 9.314s;
  }
  .star:nth-child(24) {
    --star-tail-length: 5.58em;
    --top-offset: 3.49vh;
    --fall-duration: 6.488s;
    --fall-delay: 2.515s;
  }
  .star:nth-child(25) {
    --star-tail-length: 5.96em;
    --top-offset: 36.29vh;
    --fall-duration: 9.477s;
    --fall-delay: 0.67s;
  }
  .star:nth-child(26) {
    --star-tail-length: 7.06em;
    --top-offset: 78.61vh;
    --fall-duration: 7.06s;
    --fall-delay: 0.763s;
  }
  .star:nth-child(27) {
    --star-tail-length: 5.98em;
    --top-offset: 37.84vh;
    --fall-duration: 6.972s;
    --fall-delay: 0.586s;
  }
  .star:nth-child(28) {
    --star-tail-length: 6.27em;
    --top-offset: 17.78vh;
    --fall-duration: 10.079s;
    --fall-delay: 3.577s;
  }
  .star:nth-child(29) {
    --star-tail-length: 7.34em;
    --top-offset: 78.35vh;
    --fall-duration: 11.369s;
    --fall-delay: 1.082s;
  }
  .star:nth-child(30) {
    --star-tail-length: 5.68em;
    --top-offset: 39.29vh;
    --fall-duration: 10.065s;
    --fall-delay: 0.866s;
  }
  .star:nth-child(31) {
    --star-tail-length: 7.08em;
    --top-offset: 69.24vh;
    --fall-duration: 10.761s;
    --fall-delay: 9.489s;
  }
  .star:nth-child(32) {
    --star-tail-length: 6.07em;
    --top-offset: 20.89vh;
    --fall-duration: 7.073s;
    --fall-delay: 3.625s;
  }
  .star:nth-child(33) {
    --star-tail-length: 6.04em;
    --top-offset: 33.2vh;
    --fall-duration: 11.758s;
    --fall-delay: 8.458s;
  }
  .star:nth-child(34) {
    --star-tail-length: 5.1em;
    --top-offset: 34.69vh;
    --fall-duration: 7.48s;
    --fall-delay: 0.663s;
  }
  .star:nth-child(35) {
    --star-tail-length: 5.16em;
    --top-offset: 29.48vh;
    --fall-duration: 10.956s;
    --fall-delay: 3.898s;
  }
  .star:nth-child(36) {
    --star-tail-length: 5.71em;
    --top-offset: 20.64vh;
    --fall-duration: 9.356s;
    --fall-delay: 8.796s;
  }
  .star:nth-child(37) {
    --star-tail-length: 6.59em;
    --top-offset: 27.83vh;
    --fall-duration: 6.73s;
    --fall-delay: 9.676s;
  }
  .star:nth-child(38) {
    --star-tail-length: 5.06em;
    --top-offset: 11.09vh;
    --fall-duration: 7.227s;
    --fall-delay: 8.588s;
  }
  .star:nth-child(39) {
    --star-tail-length: 6.24em;
    --top-offset: 12vh;
    --fall-duration: 11.687s;
    --fall-delay: 1.649s;
  }
  .star:nth-child(40) {
    --star-tail-length: 5.6em;
    --top-offset: 54.07vh;
    --fall-duration: 11.129s;
    --fall-delay: 3.495s;
  }
  .star:nth-child(41) {
    --star-tail-length: 5.92em;
    --top-offset: 15.6vh;
    --fall-duration: 9.223s;
    --fall-delay: 6.778s;
  }
  .star:nth-child(42) {
    --star-tail-length: 6.61em;
    --top-offset: 70.04vh;
    --fall-duration: 8.745s;
    --fall-delay: 1.565s;
  }
  .star:nth-child(43) {
    --star-tail-length: 5.5em;
    --top-offset: 86.43vh;
    --fall-duration: 7.585s;
    --fall-delay: 7.627s;
  }
  .star:nth-child(44) {
    --star-tail-length: 5.56em;
    --top-offset: 64.94vh;
    --fall-duration: 8.703s;
    --fall-delay: 7.609s;
  }
  .star:nth-child(45) {
    --star-tail-length: 6.47em;
    --top-offset: 54.46vh;
    --fall-duration: 6.071s;
    --fall-delay: 1.802s;
  }
  .star:nth-child(46) {
    --star-tail-length: 7.37em;
    --top-offset: 78.73vh;
    --fall-duration: 10.836s;
    --fall-delay: 9.821s;
  }
  .star:nth-child(47) {
    --star-tail-length: 5.42em;
    --top-offset: 33.15vh;
    --fall-duration: 11.15s;
    --fall-delay: 5.676s;
  }
  .star:nth-child(48) {
    --star-tail-length: 5.6em;
    --top-offset: 57.47vh;
    --fall-duration: 9.106s;
    --fall-delay: 2.927s;
  }
  .star:nth-child(49) {
    --star-tail-length: 7.26em;
    --top-offset: 32.99vh;
    --fall-duration: 10.372s;
    --fall-delay: 9.683s;
  }
  .star:nth-child(50) {
    --star-tail-length: 7.26em;
    --top-offset: 75.7vh;
    --fall-duration: 10.421s;
    --fall-delay: 2.224s;
  }
  .star::before,
  .star::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
  }
  .star::before {
    transform: rotate(45deg);
  }
  .star::after {
    transform: rotate(-45deg);
  }

  @keyframes fall {
    to {
      transform: translate3d(-30em, 0, 0);
    }
  }
  @keyframes tail-fade {
    0%,
    50% {
      width: var(--star-tail-length);
      opacity: 1;
    }
    70%,
    80% {
      width: 0;
      opacity: 0.4;
    }
    100% {
      width: 0;
      opacity: 0;
    }
  }
  @keyframes blink {
    50% {
      opacity: 0.6;
    }
  }
</style>
