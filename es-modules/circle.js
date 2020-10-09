const { PI } = Math;

const area = (r) => PI * r ** 2;
const circumference = (r) => 2 * PI * r;
const diameter = (r) => 2 * r;

export default area;
export { circumference, diameter };
