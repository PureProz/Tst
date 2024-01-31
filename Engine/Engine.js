/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Engine extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Engine/costumes/1.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("2", "./Engine/costumes/2.svg", {
        x: 15.035689999999931,
        y: 15.47469000000001
      }),
      new Costume("3", "./Engine/costumes/3.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("4", "./Engine/costumes/4.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("5", "./Engine/costumes/5.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("6", "./Engine/costumes/6.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("7", "./Engine/costumes/7.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("8", "./Engine/costumes/8.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("9", "./Engine/costumes/9.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("0", "./Engine/costumes/0.svg", {
        x: 15.035692181784071,
        y: 15.474689219219186
      })
    ];

    this.sounds = [new Sound("Meow", "./Engine/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE2
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "refresh" },
        this.whenIReceiveRefresh
      )
    ];

    this.vars.xOffset = 0;
    this.vars.cloneCounter = 2;
    this.vars.refresh = 478458;
  }

  *whenIReceiveStart() {
    this.stage.vars.spacing = 1.3;
    this.stage.vars.yourNumber = 0;
    this.stage.vars.x = -40;
    this.stage.vars.y = 150;
    this.stage.vars.size = 250;
  }

  *whenIReceiveStart2() {
    this.visible = false;
    yield* this.cloning();
    while (true) {
      if (this.compare(this.vars.refresh, this.stage.vars.score1) === 0) {
        this.vars.refresh = this.stage.vars.score1;
      } else {
        this.broadcast("refresh");
        yield* this.cloning();
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartE() {
    this.visible = false;
    yield* this.cloning();
    while (true) {
      if (this.compare(this.vars.refresh, this.stage.vars.score1) === 0) {
        this.vars.refresh = this.stage.vars.score1;
      } else {
        this.broadcast("refresh");
        yield* this.cloning();
      }
      yield;
    }
  }

  *whenIReceiveStartE2() {
    this.stage.vars.spacing = 1.3;
    this.stage.vars.yourNumber = 0;
    this.stage.vars.x = -40;
    this.stage.vars.y = 150;
    this.stage.vars.size = 250;
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      this.vars.xOffset =
        this.toNumber(this.stage.vars.x) -
        ((this.toString(this.stage.vars.score1).length + 1) / 2 -
          this.toNumber(this.vars.cloneCounter)) *
          (this.toNumber(this.stage.vars.size) / 10);
      this.size = this.toNumber(this.stage.vars.size);
      this.goto(
        this.toNumber(this.stage.vars.x) +
          this.toNumber(this.stage.vars.spacing) *
            this.toNumber(this.vars.xOffset),
        this.toNumber(this.stage.vars.y)
      );
      this.costume = this.letterOf(
        this.stage.vars.score1,
        this.vars.cloneCounter - 1
      );
      yield;
    }
  }

  *cloning() {
    this.vars.cloneCounter = 1;
    for (let i = 0; i < this.toString(this.stage.vars.score1).length; i++) {
      this.createClone();
      this.vars.cloneCounter++;
    }
  }

  *whenIReceiveRefresh() {
    this.deleteThisClone();
  }
}
