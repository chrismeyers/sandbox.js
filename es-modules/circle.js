const { PI } = Math;

const diameter = (r) => 2 * r;
const area = (r) => PI * r ** 2;
const circumference = (r) => 2 * PI * r;

export default 'circle';
export { diameter, area, circumference };
