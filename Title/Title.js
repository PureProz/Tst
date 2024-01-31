/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Title extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Title", "./Title/costumes/Title.svg", {
        x: 153.73709047583168,
        y: 29.56554047370895
      })
    ];

    this.sounds = [new Sound("pop", "./Title/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveStartE() {
    this.visible = false;
  }
}
