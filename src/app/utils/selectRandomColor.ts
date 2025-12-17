import type { ColorType } from "../types";

const colors: ColorType[] = ['#faebd7' , '#6faef7', '#8c49f7', '#a0fa76', '#f56d5b'];

function selectRandomColorType(): ColorType {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default selectRandomColorType;