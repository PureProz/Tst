/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Normal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Normal/costumes/costume1.svg", {
        x: 79.23709070480044,
        y: 29.56554119428648
      })
    ];

    this.sounds = [new Sound("pop", "./Normal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      this.size = 100 + 6 * Math.cos(this.degToRad((this.timer - 1) * 200));
      this.direction = 90 + 6 * Math.cos(this.degToRad((this.timer - 2) * 275));
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.sksk) === 1 &&
        this.mouse.down && this.touching("mouse")
      ) {
        this.broadcast("Start");
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveStartE() {
    this.visible = false;
  }
}
