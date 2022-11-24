//? Some possible dependency
//import {secureRandomNumber } from "secureRandomNumber"
const secureRandomNumber = (max: number) => Math.floor(Math.random() * (max + 1));
import { fastRandomNumber } from "./fastRandomNumber";

export const randomNumber =
  process.env.NODE_ENV !== "production" ? fastRandomNumber : secureRandomNumber;
