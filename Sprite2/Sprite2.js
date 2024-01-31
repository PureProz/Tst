/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 79.23709035240023,
        y: 29.56554059714324
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.sksk = 1;
    this.visible = true;
    while (true) {
      this.size = 100 + 6 * Math.cos(this.degToRad((this.timer - 1) * 200));
      this.direction = 90 + 6 * Math.cos(this.degToRad((this.timer - 2) * 275));
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.stage.vars.sksk--;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.sksk) === 1 &&
        this.mouse.down && this.touching("mouse")
      ) {
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
