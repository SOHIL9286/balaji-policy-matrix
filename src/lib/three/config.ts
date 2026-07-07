export const canvasDefaults = {
  dpr: [1, 2] as [number, number],
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance' as WebGLPowerPreference,
  },
  camera: {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: [0, 0, 5] as [number, number, number],
  },
}
