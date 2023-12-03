import { create } from "zustand";

//state
const state = {
  tasks: [
    { title: "Fix bugs", status: "ONGOING" },
    { title: "firebase is coming up soon", status: "PLANNED" },
  ],
};
//the create function takes in a set argument whcih is used to mutate the state
//useStore is a custom hook returned by the create function to acess functions/variables in
//the state
export const useStore = create((set) => {
  return state;
});
