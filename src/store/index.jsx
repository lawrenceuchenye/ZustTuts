import { create } from "zustand";

//state
const state = {
  tasks: [
    { title: "Fix bugs", status: "ONGOING" },
    { title: "Eating", status: "ONGOING" },
    { title: "Firebase is coming up soon", status: "PLANNED" },
    { title: "Build stuff with this", status: "PLANNED" },
    { title: "Tickets conpleted", status: "DONE" },
  ],
};

//the create function takes in a set argument whcih is used to mutate the state
//useStore is a custom hook returned by the create function to acess functions/variables in
//the state
export const useStore = create((set) => {
  return state;
});
