/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _ extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("", "./_/costumes/.svg", {
        x: 16.76547546657534,
        y: 171.78614036842285
      })
    ];

    this.sounds = [new Sound("pop", "./_/sounds/pop.wav")];

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
