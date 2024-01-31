/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 287.53754000000026,
        y: 243.99399500000004
      }),
      new Costume("", "./Stage/costumes/.svg", {
        x: 358.622725,
        y: 385.14772500000004
      })
    ];

    this.sounds = [
      new Sound(
        "AJR - WEAK (Official Lyric Video)",
        "./Stage/sounds/AJR - WEAK (Official Lyric Video).wav"
      ),
      new Sound("Popsicle", "./Stage/sounds/Popsicle.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.score1 = 0;
    this.vars.score2 = 0;
    this.vars.yx = 46.88097382133813;
    this.vars.rndm = -35;
    this.vars.go = 0;
    this.vars.spacing = 1.3;
    this.vars.yourNumber = 0;
    this.vars.x = -40;
    this.vars.y = 150;
    this.vars.size = 250;
    this.vars.xx = 40;
    this.vars.xo = 40;
    this.vars.rfsh = 478458;
    this.vars.dir = 1;
    this.vars.sksk = 1;
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
    yield* this.startSound("Popsicle");
  }
}
