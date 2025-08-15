import { 
  geoMercator, 
  geoEqualEarth, 
  geoOrthographic, 
  geoAlbers,
  geoNaturalEarth1
} from 'd3-geo'
import { 
  geoEckert4,
  geoWinkel3,
  geoRobinson,
  geoMollweide
} from 'd3-geo-projection'

export const projectionRegistry = {
  mercator: {
    name: 'Mercator',
    create: () => geoMercator(),
    description: 'Conformal cylindrical projection, preserves angles but distorts area near poles',
    defaultParams: { scale: 150 },
    properties: {
      conformal: true,
      equalArea: false,
      compromise: false
    }
  },
  equalEarth: {
    name: 'Equal Earth',
    create: () => geoEqualEarth(),
    description: 'Equal-area pseudocylindrical projection with natural appearance',
    defaultParams: { scale: 180 },
    properties: {
      conformal: false,
      equalArea: true,
      compromise: false
    }
  },
  naturalEarth: {
    name: 'Natural Earth',
    create: () => geoNaturalEarth1(),
    description: 'Compromise projection designed for world maps',
    defaultParams: { scale: 170 },
    properties: {
      conformal: false,
      equalArea: false,
      compromise: true
    }
  },
  orthographic: {
    name: 'Orthographic',
    create: () => geoOrthographic(),
    description: 'Azimuthal projection showing Earth as seen from space',
    defaultParams: { scale: 250 },
    properties: {
      conformal: false,
      equalArea: false,
      compromise: false
    }
  },
  albers: {
    name: 'Albers Equal-Area Conic',
    create: () => geoAlbers(),
    description: 'Conic equal-area projection, good for mid-latitude regions',
    defaultParams: { scale: 200 },
    properties: {
      conformal: false,
      equalArea: true,
      compromise: false
    }
  },
  mollweide: {
    name: 'Mollweide',
    create: () => geoMollweide(),
    description: 'Equal-area elliptical projection',
    defaultParams: { scale: 150 },
    properties: {
      conformal: false,
      equalArea: true,
      compromise: false
    }
  },
  eckert4: {
    name: 'Eckert IV',
    create: () => geoEckert4(),
    description: 'Equal-area elliptical projection with curved meridians',
    defaultParams: { scale: 180 },
    properties: {
      conformal: false,
      equalArea: true,
      compromise: false
    }
  },
  winkel3: {
    name: 'Winkel Tripel',
    create: () => geoWinkel3(),
    description: 'Compromise projection minimizing area, distance and angular distortions',
    defaultParams: { scale: 170 },
    properties: {
      conformal: false,
      equalArea: false,
      compromise: true
    }
  },
  robinson: {
    name: 'Robinson',
    create: () => geoRobinson(),
    description: 'Pseudocylindrical compromise projection',
    defaultParams: { scale: 150 },
    properties: {
      conformal: false,
      equalArea: false,
      compromise: true
    }
  }
}

export function createProjection(name, params = {}) {
  const projectionDef = projectionRegistry[name]
  if (!projectionDef) {
    throw new Error(`Unknown projection: ${name}`)
  }
  
  const projection = projectionDef.create()
  
  // Apply common parameters
  if (params.centerLon !== undefined || params.centerLat !== undefined) {
    projection.center([params.centerLon || 0, params.centerLat || 0])
  }
  
  if (params.rotation !== undefined) {
    projection.rotate([params.rotation || 0, 0])
  }
  
  if (params.scale !== undefined) {
    projection.scale(params.scale)
  }
  
  // Apply projection-specific parameters
  if (name === 'albers' && params.standardParallels) {
    projection.parallels(params.standardParallels)
  }
  
  return projection
}