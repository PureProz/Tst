/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player2Paddle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Player2Paddle/costumes/costume1.svg", {
        x: 15.499750000000006,
        y: 58.5
      }),
      new Costume("", "./Player2Paddle/costumes/.svg", {
        x: 29.42142247197765,
        y: 79.23882727434423
      })
    ];

    this.sounds = [new Sound("pop", "./Player2Paddle/sounds/pop.wav")];

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
    this.goto(200, 0);
    this.costume = "";
    while (true) {
      while (
        !(
          this.compare(
            this.y,
            this.toNumber(this.stage.vars.yx) +
              this.toNumber(this.stage.vars.rndm)
          ) === 0
        )
      ) {
        this.y +=
          (this.toNumber(this.stage.vars.yx) +
            this.toNumber(this.stage.vars.rndm) -
            this.y) /
          4;
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
    this.visible = true;
  }

  *whenIReceiveStartE2() {
    this.goto(200, 0);
    this.costume = "";
    while (true) {
      while (
        !(
          this.compare(
            this.y,
            this.toNumber(this.stage.vars.yx) +
              this.toNumber(this.stage.vars.rndm)
          ) === 0
        )
      ) {
        this.y +=
          (this.toNumber(this.stage.vars.yx) +
            this.toNumber(this.stage.vars.rndm) -
            this.y) /
          4;
        yield;
      }
      yield;
    }
  }
}
