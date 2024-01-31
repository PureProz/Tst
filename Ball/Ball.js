/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Ball/costumes/costume1.svg", {
        x: 81.379435,
        y: 83.75547
      })
    ];

    this.sounds = [
      new Sound("Coin", "./Ball/sounds/Coin.wav"),
      new Sound("Coin2", "./Ball/sounds/Coin2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart4
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start E" },
        this.whenIReceiveStartE5
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenIReceiveStart() {
    this.stage.vars.myVariable = 0;
    this.direction = 45;
    while (true) {
      this.moveAhead();
      this.move(15);
      /* TODO: Implement motion_ifonedgebounce */ null;
      if (this.toNumber(this.stage.vars.myVariable) === 1) {
        while (!(this.toNumber(this.stage.vars.myVariable) === 0)) {
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    this.stage.vars.score1 = 0;
    this.stage.vars.score2 = 0;
    while (true) {
      if (this.touching(this.sprites["PointsFor1"].andClones())) {
        this.stage.vars.score1++;
        this.broadcast("Restart");
        this.stage.vars.myVariable = 1;
      }
      yield;
    }
  }

  *whenIReceiveStart3() {
    this.goto(0, 0);
    while (true) {
      if (
        this.touching(this.sprites["Player1Paddle"].andClones()) ||
        this.touching(this.sprites["Player2Paddle"].andClones())
      ) {
        this.direction += 180;
        this.move(15);
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *whenIReceiveStart4() {
    this.stage.vars.score1 = 0;
    this.stage.vars.score2 = 0;
    while (true) {
      if (this.touching(this.sprites["PointsFor2"].andClones())) {
        this.stage.vars.score2++;
        this.broadcast("Restart");
        this.stage.vars.myVariable = 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart5() {
    this.visible = true;
  }

  *whenIReceiveRestart() {
    for (let i = 0; i < 10; i++) {
      this.goto(0, 0);
      yield;
    }
    yield* this.wait(0.1);
    this.stage.vars.myVariable = 0;
    this.stage.vars.dir = this.random(1, 2);
    if (this.toNumber(this.stage.vars.dir) === 1) {
      this.direction = -45;
    } else {
      if (this.toNumber(this.stage.vars.dir) === 2) {
        this.direction = 45;
      }
    }
  }

  *whenIReceiveStartE() {
    this.stage.vars.score1 = 0;
    this.stage.vars.score2 = 0;
    while (true) {
      if (this.touching(this.sprites["PointsFor2"].andClones())) {
        this.stage.vars.score2++;
        this.broadcast("Restart");
        this.stage.vars.myVariable = 1;
      }
      yield;
    }
  }

  *whenIReceiveStartE2() {
    this.visible = true;
  }

  *whenIReceiveStartE3() {
    this.goto(0, 0);
    while (true) {
      if (
        this.touching(this.sprites["Player1Paddle"].andClones()) ||
        this.touching(this.sprites["Player2Paddle"].andClones())
      ) {
        this.direction += 180;
        this.move(15);
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *whenIReceiveStartE4() {
    this.stage.vars.score1 = 0;
    this.stage.vars.score2 = 0;
    while (true) {
      if (this.touching(this.sprites["PointsFor1"].andClones())) {
        this.stage.vars.score1++;
        this.broadcast("Restart");
        this.stage.vars.myVariable = 1;
      }
      yield;
    }
  }

  *whenIReceiveStartE5() {
    this.stage.vars.myVariable = 0;
    this.direction = 45;
    while (true) {
      this.moveAhead();
      this.move(20);
      /* TODO: Implement motion_ifonedgebounce */ null;
      if (this.toNumber(this.stage.vars.myVariable) === 1) {
        while (!(this.toNumber(this.stage.vars.myVariable) === 0)) {
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.go = 0;
    while (true) {
      this.stage.vars.rndm = this.random(-150, 150);
      while (!this.touching(this.sprites["_2"].andClones())) {
        yield;
      }
      this.stage.vars.go = 1;
      while (!!this.touching(this.sprites["_2"].andClones())) {
        this.stage.vars.yx = this.y;
        yield;
      }
      while (!!this.touching(this.sprites["_2"].andClones())) {
        yield;
      }
      this.stage.vars.go = 0;
      yield;
    }
  }
}
