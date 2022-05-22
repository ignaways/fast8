import { SET_INCREMENT, SET_DECREMENT } from "./actionType";

export function setIncrement() {
  return {
    type: SET_INCREMENT,
  };
}

export function setDecrement() {
  return {
    type: SET_DECREMENT,
  };
}
