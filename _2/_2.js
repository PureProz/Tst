/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_2/costumes/costume1.svg", {
        x: -3.0030050000000017,
        y: 192.94295
      })
    ];

    this.sounds = [new Sound("pop", "./_2/sounds/pop.wav")];

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
}
