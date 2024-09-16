# Contributing to RetroUI

Thank you for your interest in contributing to RetroUI 🙏. I hope this guide to help you get started.

## Getting Started

1. Fork this repository

2. Clone the forked repository to your local machine.

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/retroui.git
   ```

3. Navigate to the project directory

   ```bash
   cd retroui
   ```

4. Create a new branch

   ```bash
   git switch -c new-branch-name
   ```

5. nstall dependencies

   ```bash
   pnpm i
   ```

6. Run the project
   ```bash
   pnpm dev
   ```

## Adding a New Component

1. Create the main component in `/components/NewComponent/NewComponent.tsx`

```ts
import React from 'react'

export function NewComponent() {
  return (
    <div>
      This is your component.
    </div>
  )
}
```

2. Export your component in `/components/NewComponent/index.ts` and `/components/index.ts`

```ts
export * from "./NewComponent"
```

3. Create basic example to showcase your component in `app/page.tsx`

```typescript
import React from "react";
import { H3, NewComponent } from "@/components";

export default function page() {
  return (
    <div className="container max-w-6xl mx-auto">
      <H1>Welcome to RetroUI</H1>

      <div className="space-y-8 mt-12">
        ...
        <div>
          <H3>New Component</H3>
          <NewComponent />
        </div>
      </div>
    </div>
  );
}
```


## Ask for Help
For any help or questions, please open a new GitHub issue.