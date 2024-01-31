/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PointsFor1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("", "./PointsFor1/costumes/.svg", {
        x: 33.78378378378383,
        y: 231.23123123123122
      })
    ];

    this.sounds = [new Sound("pop", "./PointsFor1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE
      )
    ];
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      this.moveBehind();
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartE() {
    this.visible = true;
    while (true) {
      this.moveBehind();
      yield;
    }
  }
}
