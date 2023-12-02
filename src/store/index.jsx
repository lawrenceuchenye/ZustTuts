import { create } from "zustand";

const store = ({ set }) => {
  tasks: [{ title: "CODE HARD", status: "ongoing" }];
};

export const useStore = create(store);
