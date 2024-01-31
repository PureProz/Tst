/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Engine2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Engine2/costumes/1.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("2", "./Engine2/costumes/2.svg", {
        x: 15.035689999999931,
        y: 15.47469000000001
      }),
      new Costume("3", "./Engine2/costumes/3.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("4", "./Engine2/costumes/4.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("5", "./Engine2/costumes/5.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("6", "./Engine2/costumes/6.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("7", "./Engine2/costumes/7.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("8", "./Engine2/costumes/8.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("9", "./Engine2/costumes/9.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      }),
      new Costume("0", "./Engine2/costumes/0.svg", {
        x: 15.035689999999988,
        y: 15.47469000000001
      })
    ];

    this.sounds = [new Sound("Meow", "./Engine2/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
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
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.BROADCAST, { name: "Rfsh" }, this.whenIReceiveRfsh)
    ];

    this.vars.ccc = 2;
  }

  *startAsClone() {
    while (true) {
      this.visible = true;
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    yield* this.cloning();
    while (true) {
      if (this.compare(this.stage.vars.rfsh, this.stage.vars.score2) === 0) {
        this.stage.vars.rfsh = this.stage.vars.score2;
      } else {
        this.broadcast("Rfsh");
        yield* this.cloning();
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    this.stage.vars.spacing = 1.3;
    this.stage.vars.xx = 40;
    this.stage.vars.y = 150;
    this.stage.vars.size = 250;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartE() {
    this.stage.vars.spacing = 1.3;
    this.stage.vars.xx = 40;
    this.stage.vars.y = 150;
    this.stage.vars.size = 250;
  }

  *whenIReceiveStartE2() {
    this.visible = false;
    yield* this.cloning();
    while (true) {
      if (this.compare(this.stage.vars.rfsh, this.stage.vars.score2) === 0) {
        this.stage.vars.rfsh = this.stage.vars.score2;
      } else {
        this.broadcast("Rfsh");
        yield* this.cloning();
      }
      yield;
    }
  }

  *startAsClone2() {
    this.visible = true;
    while (true) {
      this.stage.vars.xo =
        this.toNumber(this.stage.vars.xx) -
        ((this.toString(this.stage.vars.score2).length + 1) / 2 -
          this.toNumber(this.vars.ccc)) *
          (this.toNumber(this.stage.vars.size) / 10);
      this.size = this.toNumber(this.stage.vars.size);
      this.goto(
        this.toNumber(this.stage.vars.xx) +
          this.toNumber(this.stage.vars.spacing) *
            this.toNumber(this.stage.vars.xo),
        this.toNumber(this.stage.vars.y)
      );
      this.costume = this.letterOf(this.stage.vars.score2, this.vars.ccc - 1);
      yield;
    }
  }

  *cloning() {
    this.vars.ccc = 1;
    for (let i = 0; i < this.toString(this.stage.vars.score2).length; i++) {
      this.createClone();
      this.vars.ccc++;
    }
  }

  *whenIReceiveRfsh() {
    this.deleteThisClone();
  }
}
