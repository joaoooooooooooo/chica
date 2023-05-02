'use strict';

/**
 * ensaio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ensaio.ensaio');
