import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player1Paddle from "./Player1Paddle/Player1Paddle.js";
import Player2Paddle from "./Player2Paddle/Player2Paddle.js";
import Ball from "./Ball/Ball.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import PointsFor2 from "./PointsFor2/PointsFor2.js";
import PointsFor1 from "./PointsFor1/PointsFor1.js";
import _ from "./_/_.js";
import _2 from "./_2/_2.js";
import Engine from "./Engine/Engine.js";
import Engine2 from "./Engine2/Engine2.js";
import Title from "./Title/Title.js";
import Normal from "./Normal/Normal.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Player1Paddle: new Player1Paddle({
    x: -200,
    y: -1.5000000009253895,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Player2Paddle: new Player2Paddle({
    x: 200,
    y: 88.68425539716638,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Ball: new Ball({
    x: 10.606601717798183,
    y: -6.15203476765293,
    direction: -135,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 13
  }),
  Sprite1: new Sprite1({
    x: 10.606601717798183,
    y: -6.15203476765293,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 2
  }),
  PointsFor2: new PointsFor2({
    x: -258,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  PointsFor1: new PointsFor1({
    x: 258,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  _: new _({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  _2: new _2({
    x: 79.5294117647059,
    y: -47.29411764705881,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Engine: new Engine({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Engine2: new Engine2({
    x: 124.5,
    y: 150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 250,
    visible: false,
    layerOrder: 9
  }),
  Title: new Title({
    x: 0,
    y: 80,
    direction: 95.9993780202,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 94.3406640526,
    visible: false,
    layerOrder: 11
  }),
  Normal: new Normal({
    x: 0,
    y: -10,
    direction: 95.9993780202,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 94.3406640526,
    visible: false,
    layerOrder: 10
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: -70,
    direction: 95.9993780202,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 94.3406640526,
    visible: false,
    layerOrder: 12
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
