// Importando as texturas
import mercuryTexture from '../assets/textures/mercury.jpg';
import venusTexture from '../assets/textures/venus.jpg';
import earthTexture from '../assets/textures/earth.jpg';
import marsTexture from '../assets/textures/mars.jpg';
import jupiterTexture from '../assets/textures/jupiter.jpg';
import saturnTexture from '../assets/textures/saturn.jpg';
import sunTexture from '../assets/textures/sun.jpg';

export const PLANETS_DATA = {
    mercury: {
        name: 'Mercúrio',
        radius: 0.383,
        distance: 15,
        orbitalSpeed: 0.048,
        rotationSpeed: 0.0029,
        textureUrl: mercuryTexture,
        description: 'O menor e mais interno planeta do Sistema Solar',
        color: '#A0522D',
        facts: [
            'Temperatura superficial: -180°C a 430°C',
            'Período orbital: 88 dias terrestres',
            'Sem luas'
        ]
    },
    venus: {
        name: 'Vênus',
        radius: 0.949,
        distance: 22,
        orbitalSpeed: 0.035,
        rotationSpeed: 0.0024,
        textureUrl: venusTexture,
        description: 'Conhecido como a "estrela da manhã" ou "estrela da tarde"',
        color: '#DEB887',
        facts: [
            'Planeta mais quente do Sistema Solar',
            'Rotação retrógrada',
            'Atmosfera densa de CO2'
        ]
    },
    earth: {
        name: 'Terra',
        radius: 1,
        distance: 30,
        orbitalSpeed: 0.029,
        rotationSpeed: 0.002,
        textureUrl: earthTexture,
        description: 'Nosso planeta, o único conhecido a abrigar vida',
        color: '#4169E1',
        facts: [
            'Único planeta conhecido com água líquida na superfície',
            'Possui uma lua',
            'Campo magnético protetor'
        ]
    },
    mars: {
        name: 'Marte',
        radius: 0.532,
        distance: 38,
        orbitalSpeed: 0.024,
        rotationSpeed: 0.0018,
        textureUrl: marsTexture,
        description: 'O "Planeta Vermelho", alvo de futuras missões humanas',
        color: '#CD5C5C',
        facts: [
            'Possui duas luas: Phobos e Deimos',
            'Maior vulcão do Sistema Solar',
            'Tempestades de poeira globais'
        ]
    },
    jupiter: {
        name: 'Júpiter',
        radius: 11.209,
        distance: 52,
        orbitalSpeed: 0.013,
        rotationSpeed: 0.0043,
        textureUrl: jupiterTexture,
        description: 'O maior planeta do Sistema Solar',
        color: '#DEB887',
        facts: [
            'Grande Mancha Vermelha',
            'Sistema de anéis tênue',
            'Mais de 79 luas conhecidas'
        ]
    },
    saturn: {
        name: 'Saturno',
        radius: 9.449,
        distance: 68,
        orbitalSpeed: 0.009,
        rotationSpeed: 0.0038,
        textureUrl: saturnTexture,
        description: 'Famoso por seus belos anéis',
        color: '#F4A460',
        facts: [
            'Sistema de anéis mais espetacular',
            'Mais de 80 luas',
            'Densidade menor que a água'
        ]
    }
};

export const SUN_DATA = {
    radius: 12,
    color: '#FDB813',
    emissiveColor: '#FDB813',
    intensity: 1.5,
    textureUrl: sunTexture // Agora referenciando a textura importada
};
