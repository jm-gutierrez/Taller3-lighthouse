'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;


class MiTurnoAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'miturno-audit',
            description: 'Tiempo de respuesta del API',
            failureDescription: 'El tiempo de respuesta superior al esperado',
            helpText: 'Calcula el tiempo de respuesta del API',

            requiredArtifacts: ['MiTurno']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.MiTurno;

        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = MiTurnoAudit;
    
