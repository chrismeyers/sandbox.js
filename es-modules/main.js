import shape, { diameter, area, circumference } from './circle.js';

const r = 3;
console.table({
  shape,
  radius: r,
  diameter: diameter(r),
  area: area(r),
  circumference: circumference(r),
});
