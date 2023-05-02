'use strict';

/**
 * no-sofa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::no-sofa.no-sofa');
