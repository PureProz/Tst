/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 81.379445,
        y: 83.75547
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

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
      this.goto(this.sprites["Ball"].x, this.sprites["Ball"].y);
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
      this.goto(this.sprites["Ball"].x, this.sprites["Ball"].y);
      yield;
    }
  }

  *whenIReceiveStartE2() {
    this.visible = true;
  }
}
