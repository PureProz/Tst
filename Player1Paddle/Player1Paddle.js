/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player1Paddle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Paddle", "./Player1Paddle/costumes/Paddle.svg", {
        x: 15.500079999999997,
        y: 58.5
      }),
      new Costume("", "./Player1Paddle/costumes/.svg", {
        x: 29.421427471977637,
        y: 79.23883227434422
      })
    ];

    this.sounds = [new Sound("pop", "./Player1Paddle/sounds/pop.wav")];

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
    this.costume = "";
    this.goto(-200, 0);
    while (true) {
      while (!(this.compare(this.y, this.mouse.y) === 0)) {
        this.y += (this.mouse.y - this.y) / 4;
        yield;
      }
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
    this.costume = "";
    this.goto(-200, 0);
    while (true) {
      while (!(this.compare(this.y, this.mouse.y) === 0)) {
        this.y += (this.mouse.y - this.y) / 4;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveStartE2() {
    this.visible = true;
  }
}
