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
module.exports = {
    cors,
    sequelize
};
