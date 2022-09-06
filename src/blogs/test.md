---
title: "Zustand with TypeScript and React"
description: "How to use Zustand with TypeScript and React from installation, basic usage, advanced usage, to best practices."
date: September 5, 2022
---

# Zustand Practices

click [here](https://github.com/princejoogie/)

- Separating concerns through slices

```js
// createBearSlice.ts
import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface BearSlice {
  eatFish: () => void;
}

const createBearSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
  eatFish: () => {
    set((prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }));
  },
});

export default createBearSlice;
```

```js
// createFishSlice.ts
import { GetState, SetState } from "zustand";
import { MyState } from "./useStore";

export interface FishSlice {
  fishes: number;
  repopulate: () => void;
}

const maxFishes = 10;

const createFishSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
  fishes: maxFishes,
  repopulate: () => {
    set((prev) => ({ fishes: maxFishes }));
  },
});

export default createFishSlice;
```

- Consume those slices in a `useStore` hook

```js
// useStore.ts
import create from "zustand";

import createBearSlice, { BearSlice } from "./createBearSlice";
import createFishSlice, { FishSlice } from "./createFishSlice";

export type MyState = BearSlice & FishSlice;

const useStore =
  create <
  MyState >
  ((set, get) => ({
    ...createBearSlice(set, get),
    ...createFishSlice(set, get),
  }));

export default useStore;
```

- Sample usage in a component

```js
// App.js
import useStore from "./store/useStore";

export default function Mountain() {
  const fishes = useStore((state) => state.fishes);
  const eatFish = useStore((state) => state.eatFish);
  const repopulate = useStore((state) => state.repopulate);

  return (
    <div>
      <p>Fishes: {fishes}</p>
      <button onClick={eatFish}>Eat</button>
      <button onClick={repopulate}>Repopulate</button>
    </div>
  );
}
```
