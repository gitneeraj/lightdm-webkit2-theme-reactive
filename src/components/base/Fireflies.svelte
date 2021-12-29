<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />
<div class="firefly" />

<style>
  .firefly {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 0.4vw;
    height: 0.4vw;
    margin: -0.2vw 0 0 9.8vw;
    animation: ease 200s alternate infinite;
    pointer-events: none;
  }
  .firefly::before,
  .firefly::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }
  .firefly::before {
    background: black;
    opacity: 0.4;
    animation: drift ease alternate infinite;
  }
  .firefly::after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
    animation: drift ease alternate infinite, flash ease infinite;
  }

  .firefly:nth-child(1) {
    animation-name: move1;
  }
  .firefly:nth-child(1)::before {
    animation-duration: 13s;
  }
  .firefly:nth-child(1)::after {
    animation-duration: 13s, 5649ms;
    animation-delay: 0ms, 541ms;
  }

  @keyframes move1 {
    0% {
      transform: translateX(-43vw) translateY(8vh) scale(0.77);
    }
    5% {
      transform: translateX(-28vw) translateY(5vh) scale(0.85);
    }
    10% {
      transform: translateX(44vw) translateY(44vh) scale(0.98);
    }
    15% {
      transform: translateX(39vw) translateY(-48vh) scale(0.4);
    }
    20% {
      transform: translateX(22vw) translateY(-18vh) scale(0.65);
    }
    25% {
      transform: translateX(31vw) translateY(-15vh) scale(0.58);
    }
    30% {
      transform: translateX(-20vw) translateY(-18vh) scale(0.89);
    }
    35% {
      transform: translateX(-7vw) translateY(15vh) scale(0.65);
    }
    40% {
      transform: translateX(13vw) translateY(-29vh) scale(0.58);
    }
    45% {
      transform: translateX(44vw) translateY(11vh) scale(0.56);
    }
    50% {
      transform: translateX(29vw) translateY(-26vh) scale(0.45);
    }
    55% {
      transform: translateX(-23vw) translateY(36vh) scale(0.31);
    }
    60% {
      transform: translateX(-28vw) translateY(37vh) scale(0.26);
    }
    65% {
      transform: translateX(26vw) translateY(-39vh) scale(0.56);
    }
    70% {
      transform: translateX(-46vw) translateY(14vh) scale(0.8);
    }
    75% {
      transform: translateX(-46vw) translateY(41vh) scale(0.57);
    }
    80% {
      transform: translateX(45vw) translateY(-2vh) scale(0.31);
    }
    85% {
      transform: translateX(48vw) translateY(-7vh) scale(0.73);
    }
    90% {
      transform: translateX(-14vw) translateY(18vh) scale(0.89);
    }
    95% {
      transform: translateX(45vw) translateY(37vh) scale(0.87);
    }
    100% {
      transform: translateX(6vw) translateY(-31vh) scale(0.73);
    }
  }
  .firefly:nth-child(2) {
    animation-name: move2;
  }
  .firefly:nth-child(2)::before {
    animation-duration: 17s;
  }
  .firefly:nth-child(2)::after {
    animation-duration: 17s, 5490ms;
    animation-delay: 0ms, 2011ms;
  }

  @keyframes move2 {
    0% {
      transform: translateX(39vw) translateY(47vh) scale(0.87);
    }
    4.1666666667% {
      transform: translateX(-12vw) translateY(5vh) scale(0.62);
    }
    8.3333333333% {
      transform: translateX(-8vw) translateY(-25vh) scale(0.37);
    }
    12.5% {
      transform: translateX(-12vw) translateY(23vh) scale(0.64);
    }
    16.6666666667% {
      transform: translateX(-27vw) translateY(31vh) scale(0.63);
    }
    20.8333333333% {
      transform: translateX(33vw) translateY(2vh) scale(0.47);
    }
    25% {
      transform: translateX(-37vw) translateY(34vh) scale(0.73);
    }
    29.1666666667% {
      transform: translateX(-18vw) translateY(-13vh) scale(0.52);
    }
    33.3333333333% {
      transform: translateX(0vw) translateY(26vh) scale(0.97);
    }
    37.5% {
      transform: translateX(37vw) translateY(6vh) scale(0.71);
    }
    41.6666666667% {
      transform: translateX(45vw) translateY(21vh) scale(0.89);
    }
    45.8333333333% {
      transform: translateX(-20vw) translateY(-40vh) scale(0.68);
    }
    50% {
      transform: translateX(35vw) translateY(45vh) scale(0.39);
    }
    54.1666666667% {
      transform: translateX(-31vw) translateY(-17vh) scale(0.88);
    }
    58.3333333333% {
      transform: translateX(10vw) translateY(-31vh) scale(0.3);
    }
    62.5% {
      transform: translateX(-9vw) translateY(-31vh) scale(0.5);
    }
    66.6666666667% {
      transform: translateX(24vw) translateY(26vh) scale(0.72);
    }
    70.8333333333% {
      transform: translateX(-12vw) translateY(35vh) scale(0.63);
    }
    75% {
      transform: translateX(24vw) translateY(36vh) scale(0.69);
    }
    79.1666666667% {
      transform: translateX(21vw) translateY(-49vh) scale(0.92);
    }
    83.3333333333% {
      transform: translateX(17vw) translateY(-15vh) scale(0.42);
    }
    87.5% {
      transform: translateX(-26vw) translateY(-34vh) scale(0.53);
    }
    91.6666666667% {
      transform: translateX(46vw) translateY(-5vh) scale(0.77);
    }
    95.8333333333% {
      transform: translateX(-27vw) translateY(40vh) scale(0.71);
    }
    100% {
      transform: translateX(21vw) translateY(-26vh) scale(0.95);
    }
  }
  .firefly:nth-child(3) {
    animation-name: move3;
  }
  .firefly:nth-child(3)::before {
    animation-duration: 16s;
  }
  .firefly:nth-child(3)::after {
    animation-duration: 16s, 9319ms;
    animation-delay: 0ms, 1410ms;
  }

  @keyframes move3 {
    0% {
      transform: translateX(50vw) translateY(-34vh) scale(0.28);
    }
    3.8461538462% {
      transform: translateX(39vw) translateY(-17vh) scale(0.78);
    }
    7.6923076923% {
      transform: translateX(19vw) translateY(5vh) scale(0.75);
    }
    11.5384615385% {
      transform: translateX(-20vw) translateY(32vh) scale(0.28);
    }
    15.3846153846% {
      transform: translateX(-23vw) translateY(31vh) scale(0.87);
    }
    19.2307692308% {
      transform: translateX(-19vw) translateY(12vh) scale(0.32);
    }
    23.0769230769% {
      transform: translateX(25vw) translateY(17vh) scale(0.39);
    }
    26.9230769231% {
      transform: translateX(10vw) translateY(2vh) scale(0.91);
    }
    30.7692307692% {
      transform: translateX(-42vw) translateY(36vh) scale(0.47);
    }
    34.6153846154% {
      transform: translateX(-9vw) translateY(-47vh) scale(1);
    }
    38.4615384615% {
      transform: translateX(20vw) translateY(6vh) scale(0.59);
    }
    42.3076923077% {
      transform: translateX(-17vw) translateY(36vh) scale(0.56);
    }
    46.1538461538% {
      transform: translateX(6vw) translateY(-1vh) scale(0.63);
    }
    50% {
      transform: translateX(-45vw) translateY(30vh) scale(0.83);
    }
    53.8461538462% {
      transform: translateX(-38vw) translateY(36vh) scale(0.97);
    }
    57.6923076923% {
      transform: translateX(-28vw) translateY(-3vh) scale(0.98);
    }
    61.5384615385% {
      transform: translateX(49vw) translateY(-45vh) scale(0.33);
    }
    65.3846153846% {
      transform: translateX(-20vw) translateY(25vh) scale(0.74);
    }
    69.2307692308% {
      transform: translateX(47vw) translateY(28vh) scale(0.32);
    }
    73.0769230769% {
      transform: translateX(-15vw) translateY(-31vh) scale(0.71);
    }
    76.9230769231% {
      transform: translateX(-19vw) translateY(40vh) scale(0.83);
    }
    80.7692307692% {
      transform: translateX(-45vw) translateY(15vh) scale(0.79);
    }
    84.6153846154% {
      transform: translateX(-17vw) translateY(-49vh) scale(0.34);
    }
    88.4615384615% {
      transform: translateX(16vw) translateY(-48vh) scale(0.78);
    }
    92.3076923077% {
      transform: translateX(23vw) translateY(-39vh) scale(0.58);
    }
    96.1538461538% {
      transform: translateX(-1vw) translateY(-49vh) scale(0.37);
    }
    100% {
      transform: translateX(45vw) translateY(-6vh) scale(0.28);
    }
  }
  .firefly:nth-child(4) {
    animation-name: move4;
  }
  .firefly:nth-child(4)::before {
    animation-duration: 16s;
  }
  .firefly:nth-child(4)::after {
    animation-duration: 16s, 5554ms;
    animation-delay: 0ms, 1359ms;
  }

  @keyframes move4 {
    0% {
      transform: translateX(-43vw) translateY(7vh) scale(0.54);
    }
    4.347826087% {
      transform: translateX(27vw) translateY(14vh) scale(0.89);
    }
    8.6956521739% {
      transform: translateX(-7vw) translateY(32vh) scale(0.37);
    }
    13.0434782609% {
      transform: translateX(-7vw) translateY(22vh) scale(0.51);
    }
    17.3913043478% {
      transform: translateX(-9vw) translateY(33vh) scale(0.79);
    }
    21.7391304348% {
      transform: translateX(-21vw) translateY(-1vh) scale(0.63);
    }
    26.0869565217% {
      transform: translateX(-6vw) translateY(-14vh) scale(0.42);
    }
    30.4347826087% {
      transform: translateX(39vw) translateY(-35vh) scale(0.91);
    }
    34.7826086957% {
      transform: translateX(-39vw) translateY(4vh) scale(0.7);
    }
    39.1304347826% {
      transform: translateX(-33vw) translateY(22vh) scale(0.84);
    }
    43.4782608696% {
      transform: translateX(49vw) translateY(-11vh) scale(0.32);
    }
    47.8260869565% {
      transform: translateX(-9vw) translateY(17vh) scale(0.88);
    }
    52.1739130435% {
      transform: translateX(-49vw) translateY(32vh) scale(0.93);
    }
    56.5217391304% {
      transform: translateX(8vw) translateY(21vh) scale(0.95);
    }
    60.8695652174% {
      transform: translateX(4vw) translateY(-49vh) scale(0.47);
    }
    65.2173913043% {
      transform: translateX(47vw) translateY(-33vh) scale(0.71);
    }
    69.5652173913% {
      transform: translateX(-31vw) translateY(11vh) scale(0.59);
    }
    73.9130434783% {
      transform: translateX(-8vw) translateY(5vh) scale(0.87);
    }
    78.2608695652% {
      transform: translateX(-16vw) translateY(-41vh) scale(0.43);
    }
    82.6086956522% {
      transform: translateX(-41vw) translateY(-42vh) scale(0.79);
    }
    86.9565217391% {
      transform: translateX(12vw) translateY(0vh) scale(0.68);
    }
    91.3043478261% {
      transform: translateX(-26vw) translateY(21vh) scale(0.86);
    }
    95.652173913% {
      transform: translateX(41vw) translateY(1vh) scale(0.4);
    }
    100% {
      transform: translateX(26vw) translateY(29vh) scale(0.41);
    }
  }
  .firefly:nth-child(5) {
    animation-name: move5;
  }
  .firefly:nth-child(5)::before {
    animation-duration: 18s;
  }
  .firefly:nth-child(5)::after {
    animation-duration: 18s, 8953ms;
    animation-delay: 0ms, 1239ms;
  }

  @keyframes move5 {
    0% {
      transform: translateX(27vw) translateY(49vh) scale(0.59);
    }
    5% {
      transform: translateX(-32vw) translateY(44vh) scale(0.5);
    }
    10% {
      transform: translateX(-9vw) translateY(-36vh) scale(0.57);
    }
    15% {
      transform: translateX(-22vw) translateY(-45vh) scale(0.67);
    }
    20% {
      transform: translateX(-48vw) translateY(13vh) scale(0.33);
    }
    25% {
      transform: translateX(-32vw) translateY(-7vh) scale(0.61);
    }
    30% {
      transform: translateX(-3vw) translateY(18vh) scale(0.75);
    }
    35% {
      transform: translateX(21vw) translateY(-2vh) scale(0.59);
    }
    40% {
      transform: translateX(47vw) translateY(-25vh) scale(0.91);
    }
    45% {
      transform: translateX(-12vw) translateY(-49vh) scale(0.43);
    }
    50% {
      transform: translateX(-35vw) translateY(3vh) scale(0.44);
    }
    55% {
      transform: translateX(-10vw) translateY(-29vh) scale(0.32);
    }
    60% {
      transform: translateX(23vw) translateY(-7vh) scale(0.65);
    }
    65% {
      transform: translateX(29vw) translateY(50vh) scale(0.54);
    }
    70% {
      transform: translateX(-19vw) translateY(41vh) scale(0.48);
    }
    75% {
      transform: translateX(9vw) translateY(-28vh) scale(0.47);
    }
    80% {
      transform: translateX(-27vw) translateY(-14vh) scale(0.93);
    }
    85% {
      transform: translateX(-12vw) translateY(-6vh) scale(0.44);
    }
    90% {
      transform: translateX(23vw) translateY(18vh) scale(0.93);
    }
    95% {
      transform: translateX(-27vw) translateY(41vh) scale(0.45);
    }
    100% {
      transform: translateX(26vw) translateY(-35vh) scale(0.37);
    }
  }
  .firefly:nth-child(6) {
    animation-name: move6;
  }
  .firefly:nth-child(6)::before {
    animation-duration: 10s;
  }
  .firefly:nth-child(6)::after {
    animation-duration: 10s, 9337ms;
    animation-delay: 0ms, 7826ms;
  }

  @keyframes move6 {
    0% {
      transform: translateX(-39vw) translateY(4vh) scale(0.36);
    }
    4.7619047619% {
      transform: translateX(3vw) translateY(36vh) scale(0.9);
    }
    9.5238095238% {
      transform: translateX(27vw) translateY(-17vh) scale(0.81);
    }
    14.2857142857% {
      transform: translateX(-23vw) translateY(11vh) scale(0.74);
    }
    19.0476190476% {
      transform: translateX(-40vw) translateY(-33vh) scale(0.99);
    }
    23.8095238095% {
      transform: translateX(-14vw) translateY(10vh) scale(0.91);
    }
    28.5714285714% {
      transform: translateX(-39vw) translateY(-3vh) scale(0.87);
    }
    33.3333333333% {
      transform: translateX(37vw) translateY(-46vh) scale(0.5);
    }
    38.0952380952% {
      transform: translateX(24vw) translateY(32vh) scale(0.68);
    }
    42.8571428571% {
      transform: translateX(24vw) translateY(-40vh) scale(0.9);
    }
    47.619047619% {
      transform: translateX(15vw) translateY(14vh) scale(0.85);
    }
    52.380952381% {
      transform: translateX(-4vw) translateY(-2vh) scale(0.41);
    }
    57.1428571429% {
      transform: translateX(2vw) translateY(50vh) scale(0.93);
    }
    61.9047619048% {
      transform: translateX(29vw) translateY(-20vh) scale(0.8);
    }
    66.6666666667% {
      transform: translateX(-10vw) translateY(-48vh) scale(0.34);
    }
    71.4285714286% {
      transform: translateX(35vw) translateY(-48vh) scale(0.9);
    }
    76.1904761905% {
      transform: translateX(33vw) translateY(25vh) scale(0.82);
    }
    80.9523809524% {
      transform: translateX(-32vw) translateY(-39vh) scale(0.87);
    }
    85.7142857143% {
      transform: translateX(-37vw) translateY(28vh) scale(0.54);
    }
    90.4761904762% {
      transform: translateX(49vw) translateY(30vh) scale(0.86);
    }
    95.2380952381% {
      transform: translateX(11vw) translateY(5vh) scale(0.36);
    }
    100% {
      transform: translateX(-42vw) translateY(42vh) scale(0.62);
    }
  }
  .firefly:nth-child(7) {
    animation-name: move7;
  }
  .firefly:nth-child(7)::before {
    animation-duration: 11s;
  }
  .firefly:nth-child(7)::after {
    animation-duration: 11s, 9584ms;
    animation-delay: 0ms, 8111ms;
  }

  @keyframes move7 {
    0% {
      transform: translateX(-40vw) translateY(29vh) scale(0.99);
    }
    3.5714285714% {
      transform: translateX(-44vw) translateY(-16vh) scale(0.26);
    }
    7.1428571429% {
      transform: translateX(35vw) translateY(-29vh) scale(0.54);
    }
    10.7142857143% {
      transform: translateX(11vw) translateY(-35vh) scale(0.59);
    }
    14.2857142857% {
      transform: translateX(-24vw) translateY(18vh) scale(0.96);
    }
    17.8571428571% {
      transform: translateX(-21vw) translateY(41vh) scale(0.71);
    }
    21.4285714286% {
      transform: translateX(-17vw) translateY(-38vh) scale(0.85);
    }
    25% {
      transform: translateX(-32vw) translateY(19vh) scale(0.45);
    }
    28.5714285714% {
      transform: translateX(28vw) translateY(-49vh) scale(0.71);
    }
    32.1428571429% {
      transform: translateX(-35vw) translateY(-10vh) scale(0.67);
    }
    35.7142857143% {
      transform: translateX(-49vw) translateY(29vh) scale(0.31);
    }
    39.2857142857% {
      transform: translateX(-30vw) translateY(38vh) scale(0.64);
    }
    42.8571428571% {
      transform: translateX(-28vw) translateY(-29vh) scale(0.52);
    }
    46.4285714286% {
      transform: translateX(17vw) translateY(-6vh) scale(0.64);
    }
    50% {
      transform: translateX(-16vw) translateY(-11vh) scale(0.73);
    }
    53.5714285714% {
      transform: translateX(-12vw) translateY(-23vh) scale(0.89);
    }
    57.1428571429% {
      transform: translateX(-33vw) translateY(5vh) scale(0.52);
    }
    60.7142857143% {
      transform: translateX(-23vw) translateY(-27vh) scale(0.83);
    }
    64.2857142857% {
      transform: translateX(-37vw) translateY(-31vh) scale(0.61);
    }
    67.8571428571% {
      transform: translateX(45vw) translateY(36vh) scale(0.63);
    }
    71.4285714286% {
      transform: translateX(0vw) translateY(8vh) scale(0.62);
    }
    75% {
      transform: translateX(3vw) translateY(-16vh) scale(0.91);
    }
    78.5714285714% {
      transform: translateX(-44vw) translateY(1vh) scale(0.38);
    }
    82.1428571429% {
      transform: translateX(5vw) translateY(-19vh) scale(0.37);
    }
    85.7142857143% {
      transform: translateX(-35vw) translateY(35vh) scale(0.68);
    }
    89.2857142857% {
      transform: translateX(16vw) translateY(19vh) scale(0.26);
    }
    92.8571428571% {
      transform: translateX(30vw) translateY(32vh) scale(0.43);
    }
    96.4285714286% {
      transform: translateX(-1vw) translateY(45vh) scale(0.36);
    }
    100% {
      transform: translateX(8vw) translateY(37vh) scale(0.72);
    }
  }
  .firefly:nth-child(8) {
    animation-name: move8;
  }
  .firefly:nth-child(8)::before {
    animation-duration: 17s;
  }
  .firefly:nth-child(8)::after {
    animation-duration: 17s, 7988ms;
    animation-delay: 0ms, 4116ms;
  }

  @keyframes move8 {
    0% {
      transform: translateX(-19vw) translateY(-1vh) scale(0.48);
    }
    3.8461538462% {
      transform: translateX(41vw) translateY(21vh) scale(0.82);
    }
    7.6923076923% {
      transform: translateX(-42vw) translateY(-8vh) scale(0.56);
    }
    11.5384615385% {
      transform: translateX(45vw) translateY(15vh) scale(0.48);
    }
    15.3846153846% {
      transform: translateX(-43vw) translateY(-20vh) scale(0.44);
    }
    19.2307692308% {
      transform: translateX(1vw) translateY(-46vh) scale(1);
    }
    23.0769230769% {
      transform: translateX(-15vw) translateY(-5vh) scale(0.45);
    }
    26.9230769231% {
      transform: translateX(5vw) translateY(5vh) scale(0.56);
    }
    30.7692307692% {
      transform: translateX(7vw) translateY(21vh) scale(0.71);
    }
    34.6153846154% {
      transform: translateX(1vw) translateY(27vh) scale(0.57);
    }
    38.4615384615% {
      transform: translateX(34vw) translateY(-21vh) scale(0.76);
    }
    42.3076923077% {
      transform: translateX(25vw) translateY(9vh) scale(0.89);
    }
    46.1538461538% {
      transform: translateX(-7vw) translateY(-14vh) scale(0.44);
    }
    50% {
      transform: translateX(45vw) translateY(48vh) scale(0.48);
    }
    53.8461538462% {
      transform: translateX(-8vw) translateY(36vh) scale(0.29);
    }
    57.6923076923% {
      transform: translateX(-6vw) translateY(43vh) scale(0.96);
    }
    61.5384615385% {
      transform: translateX(17vw) translateY(45vh) scale(0.72);
    }
    65.3846153846% {
      transform: translateX(39vw) translateY(-37vh) scale(0.45);
    }
    69.2307692308% {
      transform: translateX(-39vw) translateY(26vh) scale(0.99);
    }
    73.0769230769% {
      transform: translateX(-34vw) translateY(12vh) scale(0.46);
    }
    76.9230769231% {
      transform: translateX(-5vw) translateY(20vh) scale(0.45);
    }
    80.7692307692% {
      transform: translateX(-16vw) translateY(-19vh) scale(0.47);
    }
    84.6153846154% {
      transform: translateX(47vw) translateY(44vh) scale(0.39);
    }
    88.4615384615% {
      transform: translateX(-1vw) translateY(-14vh) scale(0.96);
    }
    92.3076923077% {
      transform: translateX(18vw) translateY(-45vh) scale(0.46);
    }
    96.1538461538% {
      transform: translateX(25vw) translateY(6vh) scale(0.6);
    }
    100% {
      transform: translateX(-12vw) translateY(34vh) scale(0.86);
    }
  }
  .firefly:nth-child(9) {
    animation-name: move9;
  }
  .firefly:nth-child(9)::before {
    animation-duration: 12s;
  }
  .firefly:nth-child(9)::after {
    animation-duration: 12s, 6198ms;
    animation-delay: 0ms, 6622ms;
  }

  @keyframes move9 {
    0% {
      transform: translateX(46vw) translateY(10vh) scale(0.66);
    }
    5.2631578947% {
      transform: translateX(40vw) translateY(16vh) scale(0.53);
    }
    10.5263157895% {
      transform: translateX(26vw) translateY(-29vh) scale(0.42);
    }
    15.7894736842% {
      transform: translateX(7vw) translateY(-8vh) scale(0.79);
    }
    21.0526315789% {
      transform: translateX(2vw) translateY(4vh) scale(0.74);
    }
    26.3157894737% {
      transform: translateX(-31vw) translateY(-24vh) scale(0.34);
    }
    31.5789473684% {
      transform: translateX(-23vw) translateY(33vh) scale(0.33);
    }
    36.8421052632% {
      transform: translateX(1vw) translateY(-27vh) scale(0.84);
    }
    42.1052631579% {
      transform: translateX(35vw) translateY(4vh) scale(0.55);
    }
    47.3684210526% {
      transform: translateX(11vw) translateY(17vh) scale(0.88);
    }
    52.6315789474% {
      transform: translateX(6vw) translateY(29vh) scale(0.81);
    }
    57.8947368421% {
      transform: translateX(17vw) translateY(-33vh) scale(0.69);
    }
    63.1578947368% {
      transform: translateX(7vw) translateY(39vh) scale(0.51);
    }
    68.4210526316% {
      transform: translateX(23vw) translateY(-48vh) scale(0.61);
    }
    73.6842105263% {
      transform: translateX(-27vw) translateY(12vh) scale(0.66);
    }
    78.9473684211% {
      transform: translateX(7vw) translateY(12vh) scale(0.66);
    }
    84.2105263158% {
      transform: translateX(-45vw) translateY(28vh) scale(0.93);
    }
    89.4736842105% {
      transform: translateX(17vw) translateY(49vh) scale(0.96);
    }
    94.7368421053% {
      transform: translateX(35vw) translateY(34vh) scale(0.3);
    }
    100% {
      transform: translateX(10vw) translateY(27vh) scale(0.86);
    }
  }
  .firefly:nth-child(10) {
    animation-name: move10;
  }
  .firefly:nth-child(10)::before {
    animation-duration: 10s;
  }
  .firefly:nth-child(10)::after {
    animation-duration: 10s, 6563ms;
    animation-delay: 0ms, 7958ms;
  }

  @keyframes move10 {
    0% {
      transform: translateX(42vw) translateY(-14vh) scale(0.61);
    }
    5.5555555556% {
      transform: translateX(14vw) translateY(-6vh) scale(0.76);
    }
    11.1111111111% {
      transform: translateX(40vw) translateY(-29vh) scale(0.55);
    }
    16.6666666667% {
      transform: translateX(-16vw) translateY(-43vh) scale(0.48);
    }
    22.2222222222% {
      transform: translateX(9vw) translateY(-42vh) scale(0.94);
    }
    27.7777777778% {
      transform: translateX(-37vw) translateY(-2vh) scale(0.62);
    }
    33.3333333333% {
      transform: translateX(-36vw) translateY(29vh) scale(0.98);
    }
    38.8888888889% {
      transform: translateX(21vw) translateY(21vh) scale(0.27);
    }
    44.4444444444% {
      transform: translateX(-22vw) translateY(35vh) scale(0.98);
    }
    50% {
      transform: translateX(48vw) translateY(-36vh) scale(0.57);
    }
    55.5555555556% {
      transform: translateX(15vw) translateY(-2vh) scale(0.56);
    }
    61.1111111111% {
      transform: translateX(15vw) translateY(-23vh) scale(0.48);
    }
    66.6666666667% {
      transform: translateX(-28vw) translateY(-9vh) scale(1);
    }
    72.2222222222% {
      transform: translateX(-7vw) translateY(-2vh) scale(0.46);
    }
    77.7777777778% {
      transform: translateX(-9vw) translateY(-34vh) scale(0.66);
    }
    83.3333333333% {
      transform: translateX(34vw) translateY(-22vh) scale(0.67);
    }
    88.8888888889% {
      transform: translateX(-1vw) translateY(39vh) scale(0.32);
    }
    94.4444444444% {
      transform: translateX(33vw) translateY(21vh) scale(0.9);
    }
    100% {
      transform: translateX(45vw) translateY(10vh) scale(0.52);
    }
  }
  .firefly:nth-child(11) {
    animation-name: move11;
  }
  .firefly:nth-child(11)::before {
    animation-duration: 12s;
  }
  .firefly:nth-child(11)::after {
    animation-duration: 12s, 7613ms;
    animation-delay: 0ms, 8336ms;
  }

  @keyframes move11 {
    0% {
      transform: translateX(24vw) translateY(33vh) scale(0.52);
    }
    3.5714285714% {
      transform: translateX(-41vw) translateY(6vh) scale(0.63);
    }
    7.1428571429% {
      transform: translateX(37vw) translateY(-45vh) scale(0.63);
    }
    10.7142857143% {
      transform: translateX(-36vw) translateY(-43vh) scale(0.49);
    }
    14.2857142857% {
      transform: translateX(1vw) translateY(12vh) scale(0.89);
    }
    17.8571428571% {
      transform: translateX(-47vw) translateY(-11vh) scale(0.78);
    }
    21.4285714286% {
      transform: translateX(50vw) translateY(24vh) scale(0.69);
    }
    25% {
      transform: translateX(38vw) translateY(-22vh) scale(0.57);
    }
    28.5714285714% {
      transform: translateX(-43vw) translateY(-14vh) scale(0.77);
    }
    32.1428571429% {
      transform: translateX(-43vw) translateY(4vh) scale(0.92);
    }
    35.7142857143% {
      transform: translateX(43vw) translateY(-34vh) scale(0.6);
    }
    39.2857142857% {
      transform: translateX(22vw) translateY(17vh) scale(0.33);
    }
    42.8571428571% {
      transform: translateX(6vw) translateY(-22vh) scale(0.59);
    }
    46.4285714286% {
      transform: translateX(-13vw) translateY(-8vh) scale(0.4);
    }
    50% {
      transform: translateX(-33vw) translateY(-38vh) scale(0.31);
    }
    53.5714285714% {
      transform: translateX(-25vw) translateY(-15vh) scale(0.75);
    }
    57.1428571429% {
      transform: translateX(-3vw) translateY(42vh) scale(0.52);
    }
    60.7142857143% {
      transform: translateX(-37vw) translateY(-9vh) scale(0.39);
    }
    64.2857142857% {
      transform: translateX(-7vw) translateY(-16vh) scale(0.9);
    }
    67.8571428571% {
      transform: translateX(-9vw) translateY(47vh) scale(0.35);
    }
    71.4285714286% {
      transform: translateX(3vw) translateY(-49vh) scale(0.68);
    }
    75% {
      transform: translateX(40vw) translateY(-34vh) scale(0.44);
    }
    78.5714285714% {
      transform: translateX(-13vw) translateY(-44vh) scale(0.53);
    }
    82.1428571429% {
      transform: translateX(22vw) translateY(-26vh) scale(0.98);
    }
    85.7142857143% {
      transform: translateX(-45vw) translateY(-13vh) scale(0.91);
    }
    89.2857142857% {
      transform: translateX(35vw) translateY(-6vh) scale(0.38);
    }
    92.8571428571% {
      transform: translateX(32vw) translateY(-15vh) scale(0.7);
    }
    96.4285714286% {
      transform: translateX(-41vw) translateY(32vh) scale(0.9);
    }
    100% {
      transform: translateX(-39vw) translateY(35vh) scale(0.28);
    }
  }
  .firefly:nth-child(12) {
    animation-name: move12;
  }
  .firefly:nth-child(12)::before {
    animation-duration: 15s;
  }
  .firefly:nth-child(12)::after {
    animation-duration: 15s, 5392ms;
    animation-delay: 0ms, 644ms;
  }

  @keyframes move12 {
    0% {
      transform: translateX(6vw) translateY(37vh) scale(0.41);
    }
    4.5454545455% {
      transform: translateX(6vw) translateY(1vh) scale(0.38);
    }
    9.0909090909% {
      transform: translateX(17vw) translateY(34vh) scale(0.91);
    }
    13.6363636364% {
      transform: translateX(-47vw) translateY(47vh) scale(0.62);
    }
    18.1818181818% {
      transform: translateX(-21vw) translateY(-12vh) scale(0.6);
    }
    22.7272727273% {
      transform: translateX(29vw) translateY(-28vh) scale(0.72);
    }
    27.2727272727% {
      transform: translateX(15vw) translateY(41vh) scale(0.89);
    }
    31.8181818182% {
      transform: translateX(-36vw) translateY(37vh) scale(0.91);
    }
    36.3636363636% {
      transform: translateX(9vw) translateY(-22vh) scale(0.41);
    }
    40.9090909091% {
      transform: translateX(18vw) translateY(21vh) scale(0.94);
    }
    45.4545454545% {
      transform: translateX(4vw) translateY(41vh) scale(0.97);
    }
    50% {
      transform: translateX(-48vw) translateY(14vh) scale(0.85);
    }
    54.5454545455% {
      transform: translateX(-28vw) translateY(-49vh) scale(0.43);
    }
    59.0909090909% {
      transform: translateX(-47vw) translateY(44vh) scale(0.51);
    }
    63.6363636364% {
      transform: translateX(-5vw) translateY(20vh) scale(0.38);
    }
    68.1818181818% {
      transform: translateX(9vw) translateY(-12vh) scale(0.95);
    }
    72.7272727273% {
      transform: translateX(-42vw) translateY(-49vh) scale(0.44);
    }
    77.2727272727% {
      transform: translateX(-12vw) translateY(-11vh) scale(0.26);
    }
    81.8181818182% {
      transform: translateX(-46vw) translateY(42vh) scale(1);
    }
    86.3636363636% {
      transform: translateX(50vw) translateY(-9vh) scale(0.34);
    }
    90.9090909091% {
      transform: translateX(-13vw) translateY(8vh) scale(0.68);
    }
    95.4545454545% {
      transform: translateX(-37vw) translateY(-3vh) scale(0.72);
    }
    100% {
      transform: translateX(-40vw) translateY(23vh) scale(0.8);
    }
  }
  .firefly:nth-child(13) {
    animation-name: move13;
  }
  .firefly:nth-child(13)::before {
    animation-duration: 17s;
  }
  .firefly:nth-child(13)::after {
    animation-duration: 17s, 6681ms;
    animation-delay: 0ms, 8390ms;
  }

  @keyframes move13 {
    0% {
      transform: translateX(-11vw) translateY(-12vh) scale(0.93);
    }
    4% {
      transform: translateX(21vw) translateY(18vh) scale(0.9);
    }
    8% {
      transform: translateX(-31vw) translateY(-19vh) scale(0.81);
    }
    12% {
      transform: translateX(-16vw) translateY(6vh) scale(0.7);
    }
    16% {
      transform: translateX(19vw) translateY(49vh) scale(0.91);
    }
    20% {
      transform: translateX(16vw) translateY(-39vh) scale(0.54);
    }
    24% {
      transform: translateX(-28vw) translateY(-5vh) scale(0.63);
    }
    28% {
      transform: translateX(-46vw) translateY(23vh) scale(0.94);
    }
    32% {
      transform: translateX(4vw) translateY(-19vh) scale(0.91);
    }
    36% {
      transform: translateX(28vw) translateY(50vh) scale(0.57);
    }
    40% {
      transform: translateX(-3vw) translateY(10vh) scale(0.52);
    }
    44% {
      transform: translateX(19vw) translateY(16vh) scale(0.85);
    }
    48% {
      transform: translateX(42vw) translateY(-7vh) scale(0.46);
    }
    52% {
      transform: translateX(23vw) translateY(30vh) scale(0.69);
    }
    56% {
      transform: translateX(-26vw) translateY(24vh) scale(0.84);
    }
    60% {
      transform: translateX(-2vw) translateY(-17vh) scale(0.93);
    }
    64% {
      transform: translateX(-43vw) translateY(-3vh) scale(0.67);
    }
    68% {
      transform: translateX(43vw) translateY(10vh) scale(0.68);
    }
    72% {
      transform: translateX(40vw) translateY(-49vh) scale(0.5);
    }
    76% {
      transform: translateX(-34vw) translateY(36vh) scale(0.98);
    }
    80% {
      transform: translateX(45vw) translateY(22vh) scale(0.87);
    }
    84% {
      transform: translateX(-38vw) translateY(1vh) scale(0.48);
    }
    88% {
      transform: translateX(-26vw) translateY(-26vh) scale(0.45);
    }
    92% {
      transform: translateX(34vw) translateY(-18vh) scale(0.76);
    }
    96% {
      transform: translateX(-17vw) translateY(23vh) scale(0.64);
    }
    100% {
      transform: translateX(-4vw) translateY(7vh) scale(1);
    }
  }
  .firefly:nth-child(14) {
    animation-name: move14;
  }
  .firefly:nth-child(14)::before {
    animation-duration: 11s;
  }
  .firefly:nth-child(14)::after {
    animation-duration: 11s, 9981ms;
    animation-delay: 0ms, 1702ms;
  }

  @keyframes move14 {
    0% {
      transform: translateX(-3vw) translateY(-43vh) scale(0.97);
    }
    4.1666666667% {
      transform: translateX(-23vw) translateY(8vh) scale(0.34);
    }
    8.3333333333% {
      transform: translateX(-17vw) translateY(15vh) scale(0.54);
    }
    12.5% {
      transform: translateX(47vw) translateY(-8vh) scale(0.67);
    }
    16.6666666667% {
      transform: translateX(44vw) translateY(-45vh) scale(0.4);
    }
    20.8333333333% {
      transform: translateX(39vw) translateY(-33vh) scale(0.48);
    }
    25% {
      transform: translateX(1vw) translateY(0vh) scale(0.62);
    }
    29.1666666667% {
      transform: translateX(15vw) translateY(-34vh) scale(0.98);
    }
    33.3333333333% {
      transform: translateX(-12vw) translateY(13vh) scale(0.35);
    }
    37.5% {
      transform: translateX(-37vw) translateY(14vh) scale(0.92);
    }
    41.6666666667% {
      transform: translateX(-1vw) translateY(-26vh) scale(0.57);
    }
    45.8333333333% {
      transform: translateX(-42vw) translateY(36vh) scale(0.99);
    }
    50% {
      transform: translateX(42vw) translateY(-4vh) scale(0.34);
    }
    54.1666666667% {
      transform: translateX(-6vw) translateY(-2vh) scale(0.68);
    }
    58.3333333333% {
      transform: translateX(0vw) translateY(3vh) scale(0.49);
    }
    62.5% {
      transform: translateX(40vw) translateY(-18vh) scale(0.94);
    }
    66.6666666667% {
      transform: translateX(-8vw) translateY(2vh) scale(0.99);
    }
    70.8333333333% {
      transform: translateX(-5vw) translateY(11vh) scale(0.77);
    }
    75% {
      transform: translateX(50vw) translateY(1vh) scale(0.92);
    }
    79.1666666667% {
      transform: translateX(-31vw) translateY(-15vh) scale(0.85);
    }
    83.3333333333% {
      transform: translateX(3vw) translateY(25vh) scale(0.64);
    }
    87.5% {
      transform: translateX(-35vw) translateY(-1vh) scale(0.57);
    }
    91.6666666667% {
      transform: translateX(9vw) translateY(-40vh) scale(0.61);
    }
    95.8333333333% {
      transform: translateX(-30vw) translateY(-45vh) scale(0.84);
    }
    100% {
      transform: translateX(31vw) translateY(-46vh) scale(0.45);
    }
  }
  .firefly:nth-child(15) {
    animation-name: move15;
  }
  .firefly:nth-child(15)::before {
    animation-duration: 9s;
  }
  .firefly:nth-child(15)::after {
    animation-duration: 9s, 7614ms;
    animation-delay: 0ms, 4482ms;
  }

  @keyframes move15 {
    0% {
      transform: translateX(38vw) translateY(-15vh) scale(0.56);
    }
    4% {
      transform: translateX(-49vw) translateY(-6vh) scale(0.9);
    }
    8% {
      transform: translateX(-34vw) translateY(21vh) scale(0.56);
    }
    12% {
      transform: translateX(-49vw) translateY(17vh) scale(0.66);
    }
    16% {
      transform: translateX(-15vw) translateY(9vh) scale(0.58);
    }
    20% {
      transform: translateX(-47vw) translateY(-43vh) scale(0.28);
    }
    24% {
      transform: translateX(40vw) translateY(40vh) scale(0.27);
    }
    28% {
      transform: translateX(45vw) translateY(15vh) scale(0.74);
    }
    32% {
      transform: translateX(-45vw) translateY(5vh) scale(0.98);
    }
    36% {
      transform: translateX(8vw) translateY(-1vh) scale(0.33);
    }
    40% {
      transform: translateX(47vw) translateY(-22vh) scale(0.51);
    }
    44% {
      transform: translateX(-34vw) translateY(-42vh) scale(0.89);
    }
    48% {
      transform: translateX(49vw) translateY(-28vh) scale(0.83);
    }
    52% {
      transform: translateX(-25vw) translateY(-29vh) scale(0.37);
    }
    56% {
      transform: translateX(-34vw) translateY(47vh) scale(0.85);
    }
    60% {
      transform: translateX(37vw) translateY(-24vh) scale(0.78);
    }
    64% {
      transform: translateX(-35vw) translateY(-5vh) scale(0.81);
    }
    68% {
      transform: translateX(-31vw) translateY(4vh) scale(0.99);
    }
    72% {
      transform: translateX(-14vw) translateY(-46vh) scale(0.74);
    }
    76% {
      transform: translateX(14vw) translateY(-6vh) scale(0.61);
    }
    80% {
      transform: translateX(50vw) translateY(-13vh) scale(0.65);
    }
    84% {
      transform: translateX(-41vw) translateY(11vh) scale(0.53);
    }
    88% {
      transform: translateX(21vw) translateY(-13vh) scale(0.33);
    }
    92% {
      transform: translateX(34vw) translateY(41vh) scale(0.4);
    }
    96% {
      transform: translateX(47vw) translateY(43vh) scale(0.27);
    }
    100% {
      transform: translateX(-23vw) translateY(8vh) scale(0.86);
    }
  }
  .firefly:nth-child(16) {
    animation-name: move16;
  }
  .firefly:nth-child(16)::before {
    animation-duration: 16s;
  }
  .firefly:nth-child(16)::after {
    animation-duration: 16s, 8256ms;
    animation-delay: 0ms, 6936ms;
  }

  @keyframes move16 {
    0% {
      transform: translateX(12vw) translateY(-37vh) scale(0.75);
    }
    5.2631578947% {
      transform: translateX(-32vw) translateY(-1vh) scale(0.8);
    }
    10.5263157895% {
      transform: translateX(-15vw) translateY(2vh) scale(0.33);
    }
    15.7894736842% {
      transform: translateX(-45vw) translateY(7vh) scale(0.92);
    }
    21.0526315789% {
      transform: translateX(-30vw) translateY(24vh) scale(0.71);
    }
    26.3157894737% {
      transform: translateX(19vw) translateY(-2vh) scale(0.67);
    }
    31.5789473684% {
      transform: translateX(-28vw) translateY(8vh) scale(0.38);
    }
    36.8421052632% {
      transform: translateX(4vw) translateY(-20vh) scale(0.74);
    }
    42.1052631579% {
      transform: translateX(46vw) translateY(39vh) scale(0.57);
    }
    47.3684210526% {
      transform: translateX(-8vw) translateY(40vh) scale(0.53);
    }
    52.6315789474% {
      transform: translateX(-12vw) translateY(-23vh) scale(0.98);
    }
    57.8947368421% {
      transform: translateX(30vw) translateY(-21vh) scale(0.3);
    }
    63.1578947368% {
      transform: translateX(36vw) translateY(-9vh) scale(0.77);
    }
    68.4210526316% {
      transform: translateX(40vw) translateY(-23vh) scale(0.68);
    }
    73.6842105263% {
      transform: translateX(-37vw) translateY(-9vh) scale(0.69);
    }
    78.9473684211% {
      transform: translateX(0vw) translateY(3vh) scale(0.96);
    }
    84.2105263158% {
      transform: translateX(48vw) translateY(8vh) scale(0.36);
    }
    89.4736842105% {
      transform: translateX(-21vw) translateY(23vh) scale(0.74);
    }
    94.7368421053% {
      transform: translateX(-3vw) translateY(-37vh) scale(0.87);
    }
    100% {
      transform: translateX(18vw) translateY(-2vh) scale(0.27);
    }
  }
  .firefly:nth-child(17) {
    animation-name: move17;
  }
  .firefly:nth-child(17)::before {
    animation-duration: 17s;
  }
  .firefly:nth-child(17)::after {
    animation-duration: 17s, 10109ms;
    animation-delay: 0ms, 8448ms;
  }

  @keyframes move17 {
    0% {
      transform: translateX(-36vw) translateY(13vh) scale(0.86);
    }
    4.347826087% {
      transform: translateX(14vw) translateY(-31vh) scale(0.61);
    }
    8.6956521739% {
      transform: translateX(11vw) translateY(-24vh) scale(0.66);
    }
    13.0434782609% {
      transform: translateX(-42vw) translateY(-35vh) scale(0.68);
    }
    17.3913043478% {
      transform: translateX(46vw) translateY(8vh) scale(0.6);
    }
    21.7391304348% {
      transform: translateX(27vw) translateY(-40vh) scale(0.86);
    }
    26.0869565217% {
      transform: translateX(24vw) translateY(-9vh) scale(0.83);
    }
    30.4347826087% {
      transform: translateX(28vw) translateY(-6vh) scale(0.97);
    }
    34.7826086957% {
      transform: translateX(-9vw) translateY(-6vh) scale(0.72);
    }
    39.1304347826% {
      transform: translateX(47vw) translateY(12vh) scale(0.89);
    }
    43.4782608696% {
      transform: translateX(24vw) translateY(-19vh) scale(0.85);
    }
    47.8260869565% {
      transform: translateX(38vw) translateY(-28vh) scale(0.44);
    }
    52.1739130435% {
      transform: translateX(26vw) translateY(39vh) scale(0.69);
    }
    56.5217391304% {
      transform: translateX(32vw) translateY(33vh) scale(0.76);
    }
    60.8695652174% {
      transform: translateX(-36vw) translateY(-49vh) scale(0.28);
    }
    65.2173913043% {
      transform: translateX(-21vw) translateY(-27vh) scale(0.73);
    }
    69.5652173913% {
      transform: translateX(-22vw) translateY(-23vh) scale(0.67);
    }
    73.9130434783% {
      transform: translateX(42vw) translateY(0vh) scale(0.3);
    }
    78.2608695652% {
      transform: translateX(26vw) translateY(49vh) scale(0.29);
    }
    82.6086956522% {
      transform: translateX(35vw) translateY(-21vh) scale(0.68);
    }
    86.9565217391% {
      transform: translateX(44vw) translateY(-44vh) scale(0.27);
    }
    91.3043478261% {
      transform: translateX(-7vw) translateY(-14vh) scale(1);
    }
    95.652173913% {
      transform: translateX(4vw) translateY(-46vh) scale(0.61);
    }
    100% {
      transform: translateX(44vw) translateY(-24vh) scale(0.85);
    }
  }
  .firefly:nth-child(18) {
    animation-name: move18;
  }
  .firefly:nth-child(18)::before {
    animation-duration: 18s;
  }
  .firefly:nth-child(18)::after {
    animation-duration: 18s, 7094ms;
    animation-delay: 0ms, 1580ms;
  }

  @keyframes move18 {
    0% {
      transform: translateX(-17vw) translateY(10vh) scale(0.42);
    }
    3.5714285714% {
      transform: translateX(-46vw) translateY(-43vh) scale(0.78);
    }
    7.1428571429% {
      transform: translateX(-24vw) translateY(0vh) scale(0.47);
    }
    10.7142857143% {
      transform: translateX(-47vw) translateY(-22vh) scale(0.89);
    }
    14.2857142857% {
      transform: translateX(-28vw) translateY(-25vh) scale(0.93);
    }
    17.8571428571% {
      transform: translateX(24vw) translateY(-25vh) scale(0.62);
    }
    21.4285714286% {
      transform: translateX(26vw) translateY(-23vh) scale(0.52);
    }
    25% {
      transform: translateX(22vw) translateY(8vh) scale(0.5);
    }
    28.5714285714% {
      transform: translateX(-13vw) translateY(41vh) scale(0.34);
    }
    32.1428571429% {
      transform: translateX(8vw) translateY(-30vh) scale(0.44);
    }
    35.7142857143% {
      transform: translateX(11vw) translateY(41vh) scale(0.74);
    }
    39.2857142857% {
      transform: translateX(-26vw) translateY(-19vh) scale(0.66);
    }
    42.8571428571% {
      transform: translateX(-42vw) translateY(-22vh) scale(0.82);
    }
    46.4285714286% {
      transform: translateX(10vw) translateY(-46vh) scale(0.83);
    }
    50% {
      transform: translateX(-18vw) translateY(-33vh) scale(0.84);
    }
    53.5714285714% {
      transform: translateX(-25vw) translateY(40vh) scale(0.5);
    }
    57.1428571429% {
      transform: translateX(37vw) translateY(-41vh) scale(0.43);
    }
    60.7142857143% {
      transform: translateX(47vw) translateY(3vh) scale(0.57);
    }
    64.2857142857% {
      transform: translateX(28vw) translateY(21vh) scale(0.97);
    }
    67.8571428571% {
      transform: translateX(26vw) translateY(-33vh) scale(0.95);
    }
    71.4285714286% {
      transform: translateX(30vw) translateY(-19vh) scale(0.31);
    }
    75% {
      transform: translateX(13vw) translateY(22vh) scale(0.6);
    }
    78.5714285714% {
      transform: translateX(-28vw) translateY(-31vh) scale(0.46);
    }
    82.1428571429% {
      transform: translateX(-1vw) translateY(-18vh) scale(0.56);
    }
    85.7142857143% {
      transform: translateX(-16vw) translateY(44vh) scale(0.95);
    }
    89.2857142857% {
      transform: translateX(47vw) translateY(37vh) scale(0.6);
    }
    92.8571428571% {
      transform: translateX(16vw) translateY(-49vh) scale(0.33);
    }
    96.4285714286% {
      transform: translateX(-39vw) translateY(47vh) scale(0.8);
    }
    100% {
      transform: translateX(-47vw) translateY(-17vh) scale(0.82);
    }
  }
  .firefly:nth-child(19) {
    animation-name: move19;
  }
  .firefly:nth-child(19)::before {
    animation-duration: 16s;
  }
  .firefly:nth-child(19)::after {
    animation-duration: 16s, 9136ms;
    animation-delay: 0ms, 7743ms;
  }

  @keyframes move19 {
    0% {
      transform: translateX(-13vw) translateY(19vh) scale(0.66);
    }
    4.347826087% {
      transform: translateX(39vw) translateY(-38vh) scale(0.75);
    }
    8.6956521739% {
      transform: translateX(29vw) translateY(40vh) scale(0.99);
    }
    13.0434782609% {
      transform: translateX(24vw) translateY(33vh) scale(0.32);
    }
    17.3913043478% {
      transform: translateX(-9vw) translateY(48vh) scale(0.31);
    }
    21.7391304348% {
      transform: translateX(-2vw) translateY(16vh) scale(1);
    }
    26.0869565217% {
      transform: translateX(-23vw) translateY(39vh) scale(0.26);
    }
    30.4347826087% {
      transform: translateX(-21vw) translateY(16vh) scale(0.95);
    }
    34.7826086957% {
      transform: translateX(-5vw) translateY(30vh) scale(0.26);
    }
    39.1304347826% {
      transform: translateX(-42vw) translateY(-16vh) scale(0.99);
    }
    43.4782608696% {
      transform: translateX(15vw) translateY(-18vh) scale(0.83);
    }
    47.8260869565% {
      transform: translateX(6vw) translateY(49vh) scale(0.58);
    }
    52.1739130435% {
      transform: translateX(36vw) translateY(-45vh) scale(0.87);
    }
    56.5217391304% {
      transform: translateX(19vw) translateY(4vh) scale(0.45);
    }
    60.8695652174% {
      transform: translateX(-25vw) translateY(-12vh) scale(0.27);
    }
    65.2173913043% {
      transform: translateX(23vw) translateY(-40vh) scale(0.34);
    }
    69.5652173913% {
      transform: translateX(-44vw) translateY(-30vh) scale(0.75);
    }
    73.9130434783% {
      transform: translateX(33vw) translateY(4vh) scale(0.64);
    }
    78.2608695652% {
      transform: translateX(17vw) translateY(20vh) scale(0.3);
    }
    82.6086956522% {
      transform: translateX(-3vw) translateY(-48vh) scale(0.88);
    }
    86.9565217391% {
      transform: translateX(-30vw) translateY(17vh) scale(0.93);
    }
    91.3043478261% {
      transform: translateX(48vw) translateY(-33vh) scale(0.91);
    }
    95.652173913% {
      transform: translateX(41vw) translateY(33vh) scale(0.49);
    }
    100% {
      transform: translateX(-7vw) translateY(27vh) scale(0.64);
    }
  }
  .firefly:nth-child(20) {
    animation-name: move20;
  }
  .firefly:nth-child(20)::before {
    animation-duration: 10s;
  }
  .firefly:nth-child(20)::after {
    animation-duration: 10s, 9838ms;
    animation-delay: 0ms, 4696ms;
  }

  @keyframes move20 {
    0% {
      transform: translateX(-40vw) translateY(43vh) scale(0.5);
    }
    5.8823529412% {
      transform: translateX(23vw) translateY(42vh) scale(0.32);
    }
    11.7647058824% {
      transform: translateX(-13vw) translateY(-30vh) scale(0.38);
    }
    17.6470588235% {
      transform: translateX(31vw) translateY(26vh) scale(0.33);
    }
    23.5294117647% {
      transform: translateX(2vw) translateY(32vh) scale(0.73);
    }
    29.4117647059% {
      transform: translateX(18vw) translateY(32vh) scale(0.43);
    }
    35.2941176471% {
      transform: translateX(10vw) translateY(27vh) scale(0.88);
    }
    41.1764705882% {
      transform: translateX(44vw) translateY(-19vh) scale(0.89);
    }
    47.0588235294% {
      transform: translateX(-14vw) translateY(21vh) scale(0.65);
    }
    52.9411764706% {
      transform: translateX(50vw) translateY(-2vh) scale(0.36);
    }
    58.8235294118% {
      transform: translateX(-40vw) translateY(20vh) scale(0.94);
    }
    64.7058823529% {
      transform: translateX(42vw) translateY(17vh) scale(0.87);
    }
    70.5882352941% {
      transform: translateX(-7vw) translateY(7vh) scale(0.66);
    }
    76.4705882353% {
      transform: translateX(-16vw) translateY(-39vh) scale(1);
    }
    82.3529411765% {
      transform: translateX(35vw) translateY(22vh) scale(0.71);
    }
    88.2352941176% {
      transform: translateX(10vw) translateY(42vh) scale(0.86);
    }
    94.1176470588% {
      transform: translateX(4vw) translateY(-45vh) scale(0.34);
    }
    100% {
      transform: translateX(29vw) translateY(30vh) scale(0.34);
    }
  }
  .firefly:nth-child(21) {
    animation-name: move21;
  }
  .firefly:nth-child(21)::before {
    animation-duration: 9s;
  }
  .firefly:nth-child(21)::after {
    animation-duration: 9s, 5700ms;
    animation-delay: 0ms, 6842ms;
  }

  @keyframes move21 {
    0% {
      transform: translateX(-35vw) translateY(49vh) scale(0.88);
    }
    5.8823529412% {
      transform: translateX(-35vw) translateY(38vh) scale(0.46);
    }
    11.7647058824% {
      transform: translateX(9vw) translateY(4vh) scale(0.99);
    }
    17.6470588235% {
      transform: translateX(-37vw) translateY(1vh) scale(0.73);
    }
    23.5294117647% {
      transform: translateX(-42vw) translateY(36vh) scale(0.3);
    }
    29.4117647059% {
      transform: translateX(-11vw) translateY(14vh) scale(0.52);
    }
    35.2941176471% {
      transform: translateX(-14vw) translateY(43vh) scale(0.73);
    }
    41.1764705882% {
      transform: translateX(22vw) translateY(41vh) scale(0.48);
    }
    47.0588235294% {
      transform: translateX(-4vw) translateY(-44vh) scale(0.32);
    }
    52.9411764706% {
      transform: translateX(1vw) translateY(-46vh) scale(0.43);
    }
    58.8235294118% {
      transform: translateX(-13vw) translateY(-24vh) scale(0.73);
    }
    64.7058823529% {
      transform: translateX(-30vw) translateY(-49vh) scale(0.93);
    }
    70.5882352941% {
      transform: translateX(28vw) translateY(37vh) scale(0.4);
    }
    76.4705882353% {
      transform: translateX(-28vw) translateY(28vh) scale(0.37);
    }
    82.3529411765% {
      transform: translateX(3vw) translateY(-14vh) scale(0.82);
    }
    88.2352941176% {
      transform: translateX(-22vw) translateY(28vh) scale(0.69);
    }
    94.1176470588% {
      transform: translateX(-36vw) translateY(-30vh) scale(0.34);
    }
    100% {
      transform: translateX(-40vw) translateY(-40vh) scale(0.49);
    }
  }
  .firefly:nth-child(22) {
    animation-name: move22;
  }
  .firefly:nth-child(22)::before {
    animation-duration: 16s;
  }
  .firefly:nth-child(22)::after {
    animation-duration: 16s, 6638ms;
    animation-delay: 0ms, 4326ms;
  }

  @keyframes move22 {
    0% {
      transform: translateX(-27vw) translateY(-7vh) scale(0.6);
    }
    4.1666666667% {
      transform: translateX(-18vw) translateY(-6vh) scale(0.71);
    }
    8.3333333333% {
      transform: translateX(14vw) translateY(44vh) scale(0.36);
    }
    12.5% {
      transform: translateX(-18vw) translateY(8vh) scale(0.28);
    }
    16.6666666667% {
      transform: translateX(21vw) translateY(19vh) scale(0.42);
    }
    20.8333333333% {
      transform: translateX(20vw) translateY(29vh) scale(0.82);
    }
    25% {
      transform: translateX(-12vw) translateY(-23vh) scale(0.52);
    }
    29.1666666667% {
      transform: translateX(33vw) translateY(-29vh) scale(0.63);
    }
    33.3333333333% {
      transform: translateX(42vw) translateY(45vh) scale(0.48);
    }
    37.5% {
      transform: translateX(32vw) translateY(30vh) scale(0.47);
    }
    41.6666666667% {
      transform: translateX(-28vw) translateY(-27vh) scale(0.3);
    }
    45.8333333333% {
      transform: translateX(-45vw) translateY(29vh) scale(0.52);
    }
    50% {
      transform: translateX(26vw) translateY(47vh) scale(1);
    }
    54.1666666667% {
      transform: translateX(-49vw) translateY(3vh) scale(0.51);
    }
    58.3333333333% {
      transform: translateX(-28vw) translateY(-3vh) scale(0.71);
    }
    62.5% {
      transform: translateX(46vw) translateY(4vh) scale(0.91);
    }
    66.6666666667% {
      transform: translateX(-4vw) translateY(-42vh) scale(0.94);
    }
    70.8333333333% {
      transform: translateX(-5vw) translateY(28vh) scale(0.37);
    }
    75% {
      transform: translateX(5vw) translateY(49vh) scale(0.59);
    }
    79.1666666667% {
      transform: translateX(23vw) translateY(-48vh) scale(0.87);
    }
    83.3333333333% {
      transform: translateX(-14vw) translateY(-31vh) scale(0.5);
    }
    87.5% {
      transform: translateX(-1vw) translateY(42vh) scale(0.36);
    }
    91.6666666667% {
      transform: translateX(11vw) translateY(-42vh) scale(0.77);
    }
    95.8333333333% {
      transform: translateX(41vw) translateY(20vh) scale(0.99);
    }
    100% {
      transform: translateX(4vw) translateY(29vh) scale(0.5);
    }
  }
  .firefly:nth-child(23) {
    animation-name: move23;
  }
  .firefly:nth-child(23)::before {
    animation-duration: 15s;
  }
  .firefly:nth-child(23)::after {
    animation-duration: 15s, 7109ms;
    animation-delay: 0ms, 4707ms;
  }

  @keyframes move23 {
    0% {
      transform: translateX(23vw) translateY(-6vh) scale(0.78);
    }
    3.7037037037% {
      transform: translateX(-43vw) translateY(-23vh) scale(0.41);
    }
    7.4074074074% {
      transform: translateX(24vw) translateY(18vh) scale(0.61);
    }
    11.1111111111% {
      transform: translateX(19vw) translateY(-49vh) scale(0.72);
    }
    14.8148148148% {
      transform: translateX(-42vw) translateY(-41vh) scale(0.6);
    }
    18.5185185185% {
      transform: translateX(24vw) translateY(-22vh) scale(0.78);
    }
    22.2222222222% {
      transform: translateX(-46vw) translateY(19vh) scale(0.37);
    }
    25.9259259259% {
      transform: translateX(-43vw) translateY(-42vh) scale(0.29);
    }
    29.6296296296% {
      transform: translateX(-4vw) translateY(-15vh) scale(0.77);
    }
    33.3333333333% {
      transform: translateX(7vw) translateY(-29vh) scale(0.75);
    }
    37.037037037% {
      transform: translateX(-43vw) translateY(10vh) scale(0.82);
    }
    40.7407407407% {
      transform: translateX(-14vw) translateY(35vh) scale(0.83);
    }
    44.4444444444% {
      transform: translateX(-5vw) translateY(12vh) scale(0.86);
    }
    48.1481481481% {
      transform: translateX(-9vw) translateY(10vh) scale(0.51);
    }
    51.8518518519% {
      transform: translateX(35vw) translateY(18vh) scale(0.39);
    }
    55.5555555556% {
      transform: translateX(-28vw) translateY(-2vh) scale(0.33);
    }
    59.2592592593% {
      transform: translateX(1vw) translateY(11vh) scale(0.57);
    }
    62.962962963% {
      transform: translateX(2vw) translateY(-29vh) scale(0.47);
    }
    66.6666666667% {
      transform: translateX(17vw) translateY(2vh) scale(0.43);
    }
    70.3703703704% {
      transform: translateX(-20vw) translateY(-14vh) scale(0.53);
    }
    74.0740740741% {
      transform: translateX(7vw) translateY(-40vh) scale(0.49);
    }
    77.7777777778% {
      transform: translateX(-29vw) translateY(-10vh) scale(0.59);
    }
    81.4814814815% {
      transform: translateX(-15vw) translateY(-31vh) scale(0.29);
    }
    85.1851851852% {
      transform: translateX(30vw) translateY(-46vh) scale(0.42);
    }
    88.8888888889% {
      transform: translateX(39vw) translateY(31vh) scale(0.59);
    }
    92.5925925926% {
      transform: translateX(-20vw) translateY(27vh) scale(0.68);
    }
    96.2962962963% {
      transform: translateX(-37vw) translateY(-47vh) scale(0.51);
    }
    100% {
      transform: translateX(7vw) translateY(-31vh) scale(0.57);
    }
  }
  .firefly:nth-child(24) {
    animation-name: move24;
  }
  .firefly:nth-child(24)::before {
    animation-duration: 12s;
  }
  .firefly:nth-child(24)::after {
    animation-duration: 12s, 9094ms;
    animation-delay: 0ms, 2976ms;
  }

  @keyframes move24 {
    0% {
      transform: translateX(12vw) translateY(-34vh) scale(0.62);
    }
    4.1666666667% {
      transform: translateX(-34vw) translateY(-29vh) scale(0.41);
    }
    8.3333333333% {
      transform: translateX(-25vw) translateY(-8vh) scale(0.61);
    }
    12.5% {
      transform: translateX(-21vw) translateY(40vh) scale(0.85);
    }
    16.6666666667% {
      transform: translateX(0vw) translateY(48vh) scale(0.57);
    }
    20.8333333333% {
      transform: translateX(40vw) translateY(-25vh) scale(0.67);
    }
    25% {
      transform: translateX(10vw) translateY(-18vh) scale(0.82);
    }
    29.1666666667% {
      transform: translateX(-9vw) translateY(-15vh) scale(0.43);
    }
    33.3333333333% {
      transform: translateX(19vw) translateY(-5vh) scale(0.5);
    }
    37.5% {
      transform: translateX(-37vw) translateY(-6vh) scale(0.67);
    }
    41.6666666667% {
      transform: translateX(33vw) translateY(-43vh) scale(0.3);
    }
    45.8333333333% {
      transform: translateX(-14vw) translateY(-38vh) scale(0.91);
    }
    50% {
      transform: translateX(-33vw) translateY(-11vh) scale(0.37);
    }
    54.1666666667% {
      transform: translateX(-35vw) translateY(41vh) scale(0.76);
    }
    58.3333333333% {
      transform: translateX(-26vw) translateY(-4vh) scale(0.37);
    }
    62.5% {
      transform: translateX(10vw) translateY(-8vh) scale(0.45);
    }
    66.6666666667% {
      transform: translateX(-38vw) translateY(36vh) scale(0.97);
    }
    70.8333333333% {
      transform: translateX(29vw) translateY(8vh) scale(0.68);
    }
    75% {
      transform: translateX(-31vw) translateY(15vh) scale(0.37);
    }
    79.1666666667% {
      transform: translateX(-19vw) translateY(-49vh) scale(0.73);
    }
    83.3333333333% {
      transform: translateX(-13vw) translateY(-28vh) scale(0.7);
    }
    87.5% {
      transform: translateX(25vw) translateY(0vh) scale(0.77);
    }
    91.6666666667% {
      transform: translateX(13vw) translateY(-25vh) scale(0.92);
    }
    95.8333333333% {
      transform: translateX(-10vw) translateY(26vh) scale(0.67);
    }
    100% {
      transform: translateX(-35vw) translateY(25vh) scale(0.51);
    }
  }
  .firefly:nth-child(25) {
    animation-name: move25;
  }
  .firefly:nth-child(25)::before {
    animation-duration: 9s;
  }
  .firefly:nth-child(25)::after {
    animation-duration: 9s, 10173ms;
    animation-delay: 0ms, 3016ms;
  }

  @keyframes move25 {
    0% {
      transform: translateX(-12vw) translateY(40vh) scale(0.63);
    }
    4.347826087% {
      transform: translateX(-10vw) translateY(2vh) scale(0.54);
    }
    8.6956521739% {
      transform: translateX(-43vw) translateY(47vh) scale(0.55);
    }
    13.0434782609% {
      transform: translateX(-12vw) translateY(-40vh) scale(0.9);
    }
    17.3913043478% {
      transform: translateX(28vw) translateY(-18vh) scale(0.6);
    }
    21.7391304348% {
      transform: translateX(-37vw) translateY(47vh) scale(0.92);
    }
    26.0869565217% {
      transform: translateX(-44vw) translateY(49vh) scale(0.43);
    }
    30.4347826087% {
      transform: translateX(27vw) translateY(-1vh) scale(0.78);
    }
    34.7826086957% {
      transform: translateX(21vw) translateY(-36vh) scale(0.88);
    }
    39.1304347826% {
      transform: translateX(27vw) translateY(45vh) scale(0.31);
    }
    43.4782608696% {
      transform: translateX(-33vw) translateY(1vh) scale(0.94);
    }
    47.8260869565% {
      transform: translateX(32vw) translateY(37vh) scale(0.27);
    }
    52.1739130435% {
      transform: translateX(29vw) translateY(-39vh) scale(0.79);
    }
    56.5217391304% {
      transform: translateX(47vw) translateY(43vh) scale(0.86);
    }
    60.8695652174% {
      transform: translateX(6vw) translateY(8vh) scale(0.59);
    }
    65.2173913043% {
      transform: translateX(11vw) translateY(-13vh) scale(0.88);
    }
    69.5652173913% {
      transform: translateX(14vw) translateY(5vh) scale(0.47);
    }
    73.9130434783% {
      transform: translateX(-46vw) translateY(47vh) scale(0.36);
    }
    78.2608695652% {
      transform: translateX(40vw) translateY(36vh) scale(0.62);
    }
    82.6086956522% {
      transform: translateX(-26vw) translateY(46vh) scale(0.69);
    }
    86.9565217391% {
      transform: translateX(3vw) translateY(-15vh) scale(0.85);
    }
    91.3043478261% {
      transform: translateX(19vw) translateY(-10vh) scale(0.83);
    }
    95.652173913% {
      transform: translateX(-46vw) translateY(-37vh) scale(0.98);
    }
    100% {
      transform: translateX(-27vw) translateY(-10vh) scale(0.32);
    }
  }
  .firefly:nth-child(26) {
    animation-name: move26;
  }
  .firefly:nth-child(26)::before {
    animation-duration: 15s;
  }
  .firefly:nth-child(26)::after {
    animation-duration: 15s, 9427ms;
    animation-delay: 0ms, 5900ms;
  }

  @keyframes move26 {
    0% {
      transform: translateX(-9vw) translateY(-5vh) scale(0.58);
    }
    4.7619047619% {
      transform: translateX(16vw) translateY(-13vh) scale(0.84);
    }
    9.5238095238% {
      transform: translateX(-23vw) translateY(37vh) scale(0.95);
    }
    14.2857142857% {
      transform: translateX(-16vw) translateY(-10vh) scale(0.52);
    }
    19.0476190476% {
      transform: translateX(46vw) translateY(-22vh) scale(0.85);
    }
    23.8095238095% {
      transform: translateX(14vw) translateY(-43vh) scale(0.42);
    }
    28.5714285714% {
      transform: translateX(-10vw) translateY(30vh) scale(0.46);
    }
    33.3333333333% {
      transform: translateX(-35vw) translateY(34vh) scale(0.39);
    }
    38.0952380952% {
      transform: translateX(-24vw) translateY(7vh) scale(0.87);
    }
    42.8571428571% {
      transform: translateX(-6vw) translateY(19vh) scale(0.53);
    }
    47.619047619% {
      transform: translateX(10vw) translateY(-4vh) scale(0.44);
    }
    52.380952381% {
      transform: translateX(24vw) translateY(-2vh) scale(0.4);
    }
    57.1428571429% {
      transform: translateX(-26vw) translateY(-16vh) scale(0.54);
    }
    61.9047619048% {
      transform: translateX(11vw) translateY(-48vh) scale(0.95);
    }
    66.6666666667% {
      transform: translateX(7vw) translateY(-44vh) scale(0.38);
    }
    71.4285714286% {
      transform: translateX(-38vw) translateY(22vh) scale(0.36);
    }
    76.1904761905% {
      transform: translateX(25vw) translateY(-23vh) scale(0.75);
    }
    80.9523809524% {
      transform: translateX(-41vw) translateY(-43vh) scale(0.27);
    }
    85.7142857143% {
      transform: translateX(3vw) translateY(-14vh) scale(0.44);
    }
    90.4761904762% {
      transform: translateX(-47vw) translateY(-17vh) scale(0.71);
    }
    95.2380952381% {
      transform: translateX(-15vw) translateY(43vh) scale(0.67);
    }
    100% {
      transform: translateX(46vw) translateY(-45vh) scale(0.69);
    }
  }
  .firefly:nth-child(27) {
    animation-name: move27;
  }
  .firefly:nth-child(27)::before {
    animation-duration: 10s;
  }
  .firefly:nth-child(27)::after {
    animation-duration: 10s, 10334ms;
    animation-delay: 0ms, 2328ms;
  }

  @keyframes move27 {
    0% {
      transform: translateX(21vw) translateY(21vh) scale(0.75);
    }
    5.8823529412% {
      transform: translateX(-48vw) translateY(31vh) scale(0.32);
    }
    11.7647058824% {
      transform: translateX(44vw) translateY(-30vh) scale(0.84);
    }
    17.6470588235% {
      transform: translateX(-31vw) translateY(-37vh) scale(0.66);
    }
    23.5294117647% {
      transform: translateX(-12vw) translateY(29vh) scale(0.96);
    }
    29.4117647059% {
      transform: translateX(23vw) translateY(40vh) scale(0.74);
    }
    35.2941176471% {
      transform: translateX(16vw) translateY(45vh) scale(0.88);
    }
    41.1764705882% {
      transform: translateX(8vw) translateY(46vh) scale(0.91);
    }
    47.0588235294% {
      transform: translateX(10vw) translateY(-1vh) scale(0.38);
    }
    52.9411764706% {
      transform: translateX(16vw) translateY(16vh) scale(0.46);
    }
    58.8235294118% {
      transform: translateX(-42vw) translateY(-27vh) scale(0.4);
    }
    64.7058823529% {
      transform: translateX(44vw) translateY(3vh) scale(0.37);
    }
    70.5882352941% {
      transform: translateX(-44vw) translateY(41vh) scale(0.71);
    }
    76.4705882353% {
      transform: translateX(0vw) translateY(-42vh) scale(0.67);
    }
    82.3529411765% {
      transform: translateX(14vw) translateY(18vh) scale(0.9);
    }
    88.2352941176% {
      transform: translateX(18vw) translateY(-34vh) scale(0.36);
    }
    94.1176470588% {
      transform: translateX(16vw) translateY(26vh) scale(0.34);
    }
    100% {
      transform: translateX(24vw) translateY(-12vh) scale(0.92);
    }
  }
  .firefly:nth-child(28) {
    animation-name: move28;
  }
  .firefly:nth-child(28)::before {
    animation-duration: 11s;
  }
  .firefly:nth-child(28)::after {
    animation-duration: 11s, 7088ms;
    animation-delay: 0ms, 2227ms;
  }

  @keyframes move28 {
    0% {
      transform: translateX(43vw) translateY(49vh) scale(0.62);
    }
    5% {
      transform: translateX(-1vw) translateY(49vh) scale(0.74);
    }
    10% {
      transform: translateX(-29vw) translateY(6vh) scale(0.87);
    }
    15% {
      transform: translateX(38vw) translateY(18vh) scale(0.68);
    }
    20% {
      transform: translateX(32vw) translateY(-6vh) scale(0.48);
    }
    25% {
      transform: translateX(28vw) translateY(7vh) scale(0.85);
    }
    30% {
      transform: translateX(41vw) translateY(-20vh) scale(0.88);
    }
    35% {
      transform: translateX(-8vw) translateY(-27vh) scale(0.38);
    }
    40% {
      transform: translateX(-39vw) translateY(15vh) scale(0.89);
    }
    45% {
      transform: translateX(2vw) translateY(33vh) scale(0.43);
    }
    50% {
      transform: translateX(-2vw) translateY(29vh) scale(0.66);
    }
    55% {
      transform: translateX(4vw) translateY(25vh) scale(0.6);
    }
    60% {
      transform: translateX(-3vw) translateY(-38vh) scale(0.68);
    }
    65% {
      transform: translateX(-20vw) translateY(-2vh) scale(0.66);
    }
    70% {
      transform: translateX(-28vw) translateY(-48vh) scale(0.88);
    }
    75% {
      transform: translateX(-6vw) translateY(25vh) scale(0.49);
    }
    80% {
      transform: translateX(7vw) translateY(20vh) scale(0.9);
    }
    85% {
      transform: translateX(32vw) translateY(-9vh) scale(0.35);
    }
    90% {
      transform: translateX(-29vw) translateY(9vh) scale(0.94);
    }
    95% {
      transform: translateX(12vw) translateY(-5vh) scale(0.95);
    }
    100% {
      transform: translateX(44vw) translateY(21vh) scale(0.34);
    }
  }
  .firefly:nth-child(29) {
    animation-name: move29;
  }
  .firefly:nth-child(29)::before {
    animation-duration: 10s;
  }
  .firefly:nth-child(29)::after {
    animation-duration: 10s, 7042ms;
    animation-delay: 0ms, 2469ms;
  }

  @keyframes move29 {
    0% {
      transform: translateX(25vw) translateY(4vh) scale(0.48);
    }
    3.8461538462% {
      transform: translateX(-6vw) translateY(-35vh) scale(0.95);
    }
    7.6923076923% {
      transform: translateX(-19vw) translateY(12vh) scale(0.58);
    }
    11.5384615385% {
      transform: translateX(10vw) translateY(29vh) scale(0.31);
    }
    15.3846153846% {
      transform: translateX(-31vw) translateY(33vh) scale(0.53);
    }
    19.2307692308% {
      transform: translateX(3vw) translateY(-37vh) scale(0.67);
    }
    23.0769230769% {
      transform: translateX(0vw) translateY(7vh) scale(0.27);
    }
    26.9230769231% {
      transform: translateX(7vw) translateY(-10vh) scale(0.79);
    }
    30.7692307692% {
      transform: translateX(-17vw) translateY(-31vh) scale(0.49);
    }
    34.6153846154% {
      transform: translateX(36vw) translateY(50vh) scale(0.79);
    }
    38.4615384615% {
      transform: translateX(-29vw) translateY(35vh) scale(0.82);
    }
    42.3076923077% {
      transform: translateX(-13vw) translateY(-42vh) scale(0.28);
    }
    46.1538461538% {
      transform: translateX(-35vw) translateY(33vh) scale(0.32);
    }
    50% {
      transform: translateX(16vw) translateY(-40vh) scale(0.86);
    }
    53.8461538462% {
      transform: translateX(-26vw) translateY(-34vh) scale(0.55);
    }
    57.6923076923% {
      transform: translateX(4vw) translateY(49vh) scale(0.88);
    }
    61.5384615385% {
      transform: translateX(7vw) translateY(-43vh) scale(0.95);
    }
    65.3846153846% {
      transform: translateX(47vw) translateY(4vh) scale(0.51);
    }
    69.2307692308% {
      transform: translateX(-13vw) translateY(2vh) scale(0.28);
    }
    73.0769230769% {
      transform: translateX(5vw) translateY(38vh) scale(0.71);
    }
    76.9230769231% {
      transform: translateX(-24vw) translateY(10vh) scale(0.26);
    }
    80.7692307692% {
      transform: translateX(2vw) translateY(10vh) scale(0.98);
    }
    84.6153846154% {
      transform: translateX(35vw) translateY(31vh) scale(0.57);
    }
    88.4615384615% {
      transform: translateX(44vw) translateY(-32vh) scale(0.99);
    }
    92.3076923077% {
      transform: translateX(-7vw) translateY(19vh) scale(0.7);
    }
    96.1538461538% {
      transform: translateX(4vw) translateY(-46vh) scale(0.48);
    }
    100% {
      transform: translateX(14vw) translateY(-41vh) scale(0.33);
    }
  }
  .firefly:nth-child(30) {
    animation-name: move30;
  }
  .firefly:nth-child(30)::before {
    animation-duration: 11s;
  }
  .firefly:nth-child(30)::after {
    animation-duration: 11s, 6758ms;
    animation-delay: 0ms, 4424ms;
  }

  @keyframes move30 {
    0% {
      transform: translateX(-32vw) translateY(-46vh) scale(0.61);
    }
    3.7037037037% {
      transform: translateX(11vw) translateY(15vh) scale(0.94);
    }
    7.4074074074% {
      transform: translateX(32vw) translateY(-44vh) scale(0.99);
    }
    11.1111111111% {
      transform: translateX(40vw) translateY(-48vh) scale(0.83);
    }
    14.8148148148% {
      transform: translateX(47vw) translateY(-33vh) scale(0.48);
    }
    18.5185185185% {
      transform: translateX(18vw) translateY(-36vh) scale(0.81);
    }
    22.2222222222% {
      transform: translateX(-31vw) translateY(-13vh) scale(0.47);
    }
    25.9259259259% {
      transform: translateX(-10vw) translateY(-5vh) scale(0.96);
    }
    29.6296296296% {
      transform: translateX(-47vw) translateY(37vh) scale(0.44);
    }
    33.3333333333% {
      transform: translateX(41vw) translateY(29vh) scale(0.37);
    }
    37.037037037% {
      transform: translateX(35vw) translateY(8vh) scale(0.95);
    }
    40.7407407407% {
      transform: translateX(-22vw) translateY(-42vh) scale(0.32);
    }
    44.4444444444% {
      transform: translateX(46vw) translateY(-8vh) scale(0.6);
    }
    48.1481481481% {
      transform: translateX(46vw) translateY(-44vh) scale(0.5);
    }
    51.8518518519% {
      transform: translateX(49vw) translateY(31vh) scale(0.88);
    }
    55.5555555556% {
      transform: translateX(39vw) translateY(-7vh) scale(0.83);
    }
    59.2592592593% {
      transform: translateX(-8vw) translateY(33vh) scale(0.67);
    }
    62.962962963% {
      transform: translateX(-12vw) translateY(-24vh) scale(0.48);
    }
    66.6666666667% {
      transform: translateX(28vw) translateY(4vh) scale(0.69);
    }
    70.3703703704% {
      transform: translateX(8vw) translateY(1vh) scale(0.65);
    }
    74.0740740741% {
      transform: translateX(-49vw) translateY(-48vh) scale(0.45);
    }
    77.7777777778% {
      transform: translateX(45vw) translateY(-14vh) scale(0.84);
    }
    81.4814814815% {
      transform: translateX(48vw) translateY(48vh) scale(0.49);
    }
    85.1851851852% {
      transform: translateX(-1vw) translateY(-44vh) scale(0.29);
    }
    88.8888888889% {
      transform: translateX(-33vw) translateY(-37vh) scale(0.99);
    }
    92.5925925926% {
      transform: translateX(-40vw) translateY(29vh) scale(0.54);
    }
    96.2962962963% {
      transform: translateX(-31vw) translateY(-17vh) scale(0.85);
    }
    100% {
      transform: translateX(9vw) translateY(-2vh) scale(0.53);
    }
  }
  .firefly:nth-child(31) {
    animation-name: move31;
  }
  .firefly:nth-child(31)::before {
    animation-duration: 10s;
  }
  .firefly:nth-child(31)::after {
    animation-duration: 10s, 6802ms;
    animation-delay: 0ms, 3347ms;
  }

  @keyframes move31 {
    0% {
      transform: translateX(31vw) translateY(-42vh) scale(0.82);
    }
    3.8461538462% {
      transform: translateX(-25vw) translateY(-16vh) scale(0.52);
    }
    7.6923076923% {
      transform: translateX(8vw) translateY(-20vh) scale(0.89);
    }
    11.5384615385% {
      transform: translateX(-33vw) translateY(9vh) scale(0.43);
    }
    15.3846153846% {
      transform: translateX(-33vw) translateY(-43vh) scale(0.87);
    }
    19.2307692308% {
      transform: translateX(-34vw) translateY(14vh) scale(0.34);
    }
    23.0769230769% {
      transform: translateX(16vw) translateY(30vh) scale(0.69);
    }
    26.9230769231% {
      transform: translateX(-23vw) translateY(0vh) scale(0.63);
    }
    30.7692307692% {
      transform: translateX(22vw) translateY(26vh) scale(0.78);
    }
    34.6153846154% {
      transform: translateX(-14vw) translateY(9vh) scale(0.32);
    }
    38.4615384615% {
      transform: translateX(-42vw) translateY(-24vh) scale(0.49);
    }
    42.3076923077% {
      transform: translateX(43vw) translateY(-40vh) scale(0.84);
    }
    46.1538461538% {
      transform: translateX(-45vw) translateY(24vh) scale(0.4);
    }
    50% {
      transform: translateX(24vw) translateY(-20vh) scale(0.94);
    }
    53.8461538462% {
      transform: translateX(-4vw) translateY(-27vh) scale(0.28);
    }
    57.6923076923% {
      transform: translateX(39vw) translateY(14vh) scale(0.64);
    }
    61.5384615385% {
      transform: translateX(-27vw) translateY(-40vh) scale(0.65);
    }
    65.3846153846% {
      transform: translateX(-35vw) translateY(36vh) scale(0.49);
    }
    69.2307692308% {
      transform: translateX(-22vw) translateY(33vh) scale(0.8);
    }
    73.0769230769% {
      transform: translateX(-2vw) translateY(4vh) scale(0.86);
    }
    76.9230769231% {
      transform: translateX(-25vw) translateY(39vh) scale(0.83);
    }
    80.7692307692% {
      transform: translateX(11vw) translateY(39vh) scale(0.35);
    }
    84.6153846154% {
      transform: translateX(4vw) translateY(10vh) scale(0.54);
    }
    88.4615384615% {
      transform: translateX(-14vw) translateY(9vh) scale(0.41);
    }
    92.3076923077% {
      transform: translateX(-44vw) translateY(50vh) scale(0.75);
    }
    96.1538461538% {
      transform: translateX(2vw) translateY(15vh) scale(0.95);
    }
    100% {
      transform: translateX(47vw) translateY(-39vh) scale(0.91);
    }
  }
  .firefly:nth-child(32) {
    animation-name: move32;
  }
  .firefly:nth-child(32)::before {
    animation-duration: 18s;
  }
  .firefly:nth-child(32)::after {
    animation-duration: 18s, 8730ms;
    animation-delay: 0ms, 2776ms;
  }

  @keyframes move32 {
    0% {
      transform: translateX(41vw) translateY(20vh) scale(0.93);
    }
    4.1666666667% {
      transform: translateX(-14vw) translateY(-26vh) scale(0.55);
    }
    8.3333333333% {
      transform: translateX(-34vw) translateY(33vh) scale(0.37);
    }
    12.5% {
      transform: translateX(33vw) translateY(13vh) scale(0.8);
    }
    16.6666666667% {
      transform: translateX(-20vw) translateY(-40vh) scale(0.66);
    }
    20.8333333333% {
      transform: translateX(-3vw) translateY(-23vh) scale(0.29);
    }
    25% {
      transform: translateX(26vw) translateY(-4vh) scale(0.5);
    }
    29.1666666667% {
      transform: translateX(-41vw) translateY(-41vh) scale(0.51);
    }
    33.3333333333% {
      transform: translateX(32vw) translateY(-45vh) scale(0.77);
    }
    37.5% {
      transform: translateX(-20vw) translateY(14vh) scale(0.51);
    }
    41.6666666667% {
      transform: translateX(-45vw) translateY(3vh) scale(0.66);
    }
    45.8333333333% {
      transform: translateX(-3vw) translateY(-10vh) scale(0.97);
    }
    50% {
      transform: translateX(-25vw) translateY(12vh) scale(0.36);
    }
    54.1666666667% {
      transform: translateX(28vw) translateY(-9vh) scale(0.66);
    }
    58.3333333333% {
      transform: translateX(-34vw) translateY(-30vh) scale(0.87);
    }
    62.5% {
      transform: translateX(-9vw) translateY(-40vh) scale(0.71);
    }
    66.6666666667% {
      transform: translateX(0vw) translateY(-34vh) scale(0.86);
    }
    70.8333333333% {
      transform: translateX(-17vw) translateY(-49vh) scale(0.67);
    }
    75% {
      transform: translateX(-41vw) translateY(-37vh) scale(0.35);
    }
    79.1666666667% {
      transform: translateX(38vw) translateY(-33vh) scale(0.64);
    }
    83.3333333333% {
      transform: translateX(-33vw) translateY(35vh) scale(0.64);
    }
    87.5% {
      transform: translateX(43vw) translateY(-3vh) scale(0.79);
    }
    91.6666666667% {
      transform: translateX(-18vw) translateY(1vh) scale(0.75);
    }
    95.8333333333% {
      transform: translateX(1vw) translateY(-27vh) scale(0.94);
    }
    100% {
      transform: translateX(19vw) translateY(-31vh) scale(0.79);
    }
  }
  .firefly:nth-child(33) {
    animation-name: move33;
  }
  .firefly:nth-child(33)::before {
    animation-duration: 13s;
  }
  .firefly:nth-child(33)::after {
    animation-duration: 13s, 9387ms;
    animation-delay: 0ms, 1620ms;
  }

  @keyframes move33 {
    0% {
      transform: translateX(48vw) translateY(46vh) scale(0.78);
    }
    4.1666666667% {
      transform: translateX(14vw) translateY(46vh) scale(0.87);
    }
    8.3333333333% {
      transform: translateX(28vw) translateY(17vh) scale(0.82);
    }
    12.5% {
      transform: translateX(-42vw) translateY(-13vh) scale(0.9);
    }
    16.6666666667% {
      transform: translateX(-45vw) translateY(0vh) scale(0.8);
    }
    20.8333333333% {
      transform: translateX(-27vw) translateY(27vh) scale(0.5);
    }
    25% {
      transform: translateX(30vw) translateY(30vh) scale(0.56);
    }
    29.1666666667% {
      transform: translateX(-22vw) translateY(12vh) scale(0.43);
    }
    33.3333333333% {
      transform: translateX(45vw) translateY(-2vh) scale(0.4);
    }
    37.5% {
      transform: translateX(34vw) translateY(2vh) scale(0.44);
    }
    41.6666666667% {
      transform: translateX(32vw) translateY(-42vh) scale(0.47);
    }
    45.8333333333% {
      transform: translateX(15vw) translateY(34vh) scale(0.55);
    }
    50% {
      transform: translateX(-26vw) translateY(-36vh) scale(0.83);
    }
    54.1666666667% {
      transform: translateX(-40vw) translateY(-12vh) scale(0.32);
    }
    58.3333333333% {
      transform: translateX(-48vw) translateY(0vh) scale(0.75);
    }
    62.5% {
      transform: translateX(29vw) translateY(-37vh) scale(0.48);
    }
    66.6666666667% {
      transform: translateX(-14vw) translateY(-39vh) scale(0.59);
    }
    70.8333333333% {
      transform: translateX(47vw) translateY(7vh) scale(0.94);
    }
    75% {
      transform: translateX(-5vw) translateY(-35vh) scale(0.78);
    }
    79.1666666667% {
      transform: translateX(12vw) translateY(-47vh) scale(0.26);
    }
    83.3333333333% {
      transform: translateX(-39vw) translateY(-35vh) scale(0.62);
    }
    87.5% {
      transform: translateX(27vw) translateY(40vh) scale(0.33);
    }
    91.6666666667% {
      transform: translateX(-49vw) translateY(-47vh) scale(0.39);
    }
    95.8333333333% {
      transform: translateX(30vw) translateY(-22vh) scale(0.68);
    }
    100% {
      transform: translateX(-9vw) translateY(-42vh) scale(0.3);
    }
  }
  .firefly:nth-child(34) {
    animation-name: move34;
  }
  .firefly:nth-child(34)::before {
    animation-duration: 11s;
  }
  .firefly:nth-child(34)::after {
    animation-duration: 11s, 9641ms;
    animation-delay: 0ms, 2573ms;
  }

  @keyframes move34 {
    0% {
      transform: translateX(7vw) translateY(-39vh) scale(0.55);
    }
    4.347826087% {
      transform: translateX(43vw) translateY(44vh) scale(0.42);
    }
    8.6956521739% {
      transform: translateX(-19vw) translateY(24vh) scale(0.26);
    }
    13.0434782609% {
      transform: translateX(-3vw) translateY(-41vh) scale(0.35);
    }
    17.3913043478% {
      transform: translateX(23vw) translateY(-37vh) scale(0.93);
    }
    21.7391304348% {
      transform: translateX(42vw) translateY(14vh) scale(0.79);
    }
    26.0869565217% {
      transform: translateX(19vw) translateY(-41vh) scale(0.47);
    }
    30.4347826087% {
      transform: translateX(47vw) translateY(38vh) scale(0.56);
    }
    34.7826086957% {
      transform: translateX(-19vw) translateY(22vh) scale(0.85);
    }
    39.1304347826% {
      transform: translateX(-3vw) translateY(36vh) scale(0.73);
    }
    43.4782608696% {
      transform: translateX(42vw) translateY(32vh) scale(0.37);
    }
    47.8260869565% {
      transform: translateX(44vw) translateY(1vh) scale(0.65);
    }
    52.1739130435% {
      transform: translateX(34vw) translateY(-13vh) scale(0.47);
    }
    56.5217391304% {
      transform: translateX(16vw) translateY(-25vh) scale(0.75);
    }
    60.8695652174% {
      transform: translateX(49vw) translateY(-18vh) scale(0.47);
    }
    65.2173913043% {
      transform: translateX(50vw) translateY(7vh) scale(0.98);
    }
    69.5652173913% {
      transform: translateX(31vw) translateY(48vh) scale(0.44);
    }
    73.9130434783% {
      transform: translateX(-12vw) translateY(9vh) scale(0.92);
    }
    78.2608695652% {
      transform: translateX(9vw) translateY(-2vh) scale(0.47);
    }
    82.6086956522% {
      transform: translateX(11vw) translateY(-48vh) scale(0.35);
    }
    86.9565217391% {
      transform: translateX(5vw) translateY(16vh) scale(0.4);
    }
    91.3043478261% {
      transform: translateX(-5vw) translateY(47vh) scale(0.82);
    }
    95.652173913% {
      transform: translateX(-6vw) translateY(-6vh) scale(0.26);
    }
    100% {
      transform: translateX(-37vw) translateY(-26vh) scale(0.43);
    }
  }
  .firefly:nth-child(35) {
    animation-name: move35;
  }
  .firefly:nth-child(35)::before {
    animation-duration: 15s;
  }
  .firefly:nth-child(35)::after {
    animation-duration: 15s, 6557ms;
    animation-delay: 0ms, 8218ms;
  }

  @keyframes move35 {
    0% {
      transform: translateX(-45vw) translateY(8vh) scale(0.74);
    }
    5% {
      transform: translateX(-15vw) translateY(27vh) scale(0.52);
    }
    10% {
      transform: translateX(-35vw) translateY(8vh) scale(0.84);
    }
    15% {
      transform: translateX(-8vw) translateY(47vh) scale(0.38);
    }
    20% {
      transform: translateX(-5vw) translateY(-5vh) scale(1);
    }
    25% {
      transform: translateX(3vw) translateY(-15vh) scale(0.35);
    }
    30% {
      transform: translateX(31vw) translateY(11vh) scale(0.79);
    }
    35% {
      transform: translateX(43vw) translateY(-33vh) scale(0.36);
    }
    40% {
      transform: translateX(1vw) translateY(5vh) scale(0.48);
    }
    45% {
      transform: translateX(14vw) translateY(-27vh) scale(0.26);
    }
    50% {
      transform: translateX(20vw) translateY(11vh) scale(0.35);
    }
    55% {
      transform: translateX(-1vw) translateY(22vh) scale(0.79);
    }
    60% {
      transform: translateX(30vw) translateY(-43vh) scale(0.76);
    }
    65% {
      transform: translateX(2vw) translateY(15vh) scale(0.74);
    }
    70% {
      transform: translateX(12vw) translateY(2vh) scale(0.55);
    }
    75% {
      transform: translateX(-38vw) translateY(24vh) scale(0.4);
    }
    80% {
      transform: translateX(11vw) translateY(-1vh) scale(0.87);
    }
    85% {
      transform: translateX(-22vw) translateY(23vh) scale(0.36);
    }
    90% {
      transform: translateX(31vw) translateY(22vh) scale(0.29);
    }
    95% {
      transform: translateX(32vw) translateY(46vh) scale(0.98);
    }
    100% {
      transform: translateX(0vw) translateY(-9vh) scale(0.73);
    }
  }
  @keyframes drift {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes flash {
    0%,
    30%,
    100% {
      opacity: 0;
      box-shadow: 0 0 0vw 0vw yellow;
    }
    5% {
      opacity: 1;
      box-shadow: 0 0 2vw 0.4vw yellow;
    }
  }
</style>
