# 3D-to-2D Projection Lab

An interactive web application for exploring map projections and their geometric properties. This educational tool demonstrates how 3D spherical coordinates are transformed into 2D planar representations, allowing users to visualize distortions and compare different projection methods.

![Projection Lab Screenshot](docs/screenshot.png)

## 🌍 Features

### Core Functionality
- **Interactive 3D Globe**: Fully rotatable sphere with mouse controls
- **2D Projection Views**: Real-time rendering of 9 different map projections
- **Synchronized Views**: 3D globe and 2D projection stay in sync
- **Parameter Controls**: Adjust center longitude/latitude, rotation, and scale
- **Distortion Analysis**: Toggle Tissot's indicatrices to visualize projection distortions
- **Educational Content**: Detailed descriptions and properties for each projection

### Supported Projections
1. **Mercator** - Conformal cylindrical projection
2. **Equal Earth** - Equal-area pseudocylindrical projection  
3. **Natural Earth** - Compromise projection for world maps
4. **Orthographic** - Azimuthal projection (view from space)
5. **Albers Equal-Area Conic** - Good for mid-latitude regions
6. **Mollweide** - Equal-area elliptical projection
7. **Eckert IV** - Equal-area with curved meridians
8. **Winkel Tripel** - Minimizes multiple distortion types
9. **Robinson** - Pseudocylindrical compromise projection

### Interactive Features
- **Projection Switcher**: Dropdown to change between projections
- **Parameter Sliders**: Control center point, rotation, and scale
- **Graticule Toggle**: Show/hide coordinate grid lines
- **Tissot's Indicatrices**: Visualize distortion with small circles
- **Unfold Animation**: Transition effect from 3D to 2D view
- **Projection Properties**: Display conformal, equal-area, and compromise attributes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CrazyDubya/3D2DMap.git
cd 3D2DMap
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **3D Graphics**: Three.js
- **Cartography**: D3.js with d3-geo and d3-geo-projection
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties
- **Development**: ESLint, Vitest

## 📚 Educational Value

This application demonstrates key cartographic concepts:

### Projection Properties
- **Conformal**: Preserves angles and shapes locally
- **Equal-area**: Preserves relative sizes of regions  
- **Compromise**: Balances multiple distortion types

### Distortion Types
- **Angular distortion**: Changes in shape
- **Area distortion**: Changes in relative size
- **Distance distortion**: Changes in scale
- **Direction distortion**: Changes in bearing

### Use Cases
- Geography and cartography education
- GIS and mapping professionals
- Students learning about coordinate systems
- Researchers studying projection effects

## 🔧 Development

### Project Structure
```
src/
├── components/           # React components
│   ├── GlobeView.jsx    # 3D globe with Three.js
│   ├── ProjectionView.jsx # 2D projection canvas
│   └── ProjectionControls.jsx # UI controls
├── utils/
│   └── projections.js   # Projection definitions and utilities
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

### Key Components

**GlobeView** - Renders the interactive 3D sphere using Three.js with:
- Mouse interaction for rotation
- Graticule overlay
- Smooth animations
- Texture mapping support

**ProjectionView** - Renders 2D projections using D3.js with:
- Canvas-based rendering for performance
- Graticule and land features
- Tissot's indicatrices
- Real-time parameter updates

**ProjectionControls** - Provides the user interface with:
- Projection selection dropdown
- Parameter sliders
- Toggle switches
- Educational information

### Adding New Projections

To add a new projection:

1. Import the projection function from d3-geo or d3-geo-projection
2. Add it to the `projectionRegistry` in `src/utils/projections.js`:

```javascript
newProjection: {
  name: 'New Projection',
  create: () => geoNewProjection(),
  description: 'Description of the projection',
  defaultParams: { scale: 150 },
  properties: {
    conformal: false,
    equalArea: true,
    compromise: false
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure the build passes before submitting

## 📖 References

- [D3 Geographic Projections](https://github.com/d3/d3-geo)
- [D3 Extended Projections](https://github.com/d3/d3-geo-projection)
- [Three.js Documentation](https://threejs.org/docs/)
- [Map Projection Theory](https://en.wikipedia.org/wiki/Map_projection)
- [Tissot's Indicatrix](https://en.wikipedia.org/wiki/Tissot%27s_indicatrix)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- D3.js team for excellent cartographic libraries
- Three.js contributors for 3D graphics capabilities
- Natural Earth for public domain map data
- Cartography community for projection research and documentation
