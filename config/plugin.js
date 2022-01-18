'use strict';

/** @type Egg.EggPlugin */

const cors = {
    enable: true,
    package: 'egg-cors',
}
const sequelize = {
    enable: true,
    package: 'egg-sequelize'
}
const jwt = {
    enable: true,
    package: 'egg-jwt',
}
module.exports = {
    cors,
    sequelize,
    jwt
};
