'use strict';

const Gatherer = require('lighthouse').Gatherer;

class MiTurno extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.miTurnoLoadTime')
            .then(miTurnoLoadTime => {
                if (!miTurnoLoadTime) {

                    throw new Error('Unable to find card load metrics in page');
                }
                return miTurnoLoadTime;
            });
    }
}

module.exports = MiTurno;