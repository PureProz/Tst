/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PointsFor2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("", "./PointsFor2/costumes/.svg", {
        x: 33.78377499999999,
        y: 231.23123000000004
      })
    ];

    this.sounds = [new Sound("pop", "./PointsFor2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE2
      )
    ];
  }

  *whenIReceiveStart() {
    while (true) {
      this.moveBehind();
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart2() {
    this.visible = true;
  }

  *whenIReceiveStartE() {
    while (true) {
      this.moveBehind();
      yield;
    }
  }

  *whenIReceiveStartE2() {
    this.visible = true;
  }
}
