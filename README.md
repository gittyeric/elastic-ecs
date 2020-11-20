# Elastic ECS Typescript Definitions

This wraps up the Elastic Common Schema into strict Typescript types by parsing the official (ECS schema)["https://github.com/elastic/ecs"] document.  Since this library is pure types and a strict reflection of ECS, the version is pinned to the ECS version itself, starting from version 1.7.  You can also clone this repo to build against a given ECS version yourself.

# Features

- Get all ECS fields as a flat associative array (EcsFields) or as a full object hierarchy (EcsTree).
- Breakout by ECS core and/or extended fields
- Generic enough parsing to run yourself against any ECS version

# Install

Run:

`npm install elastic-ecs`

# Example Usage

# Basic Usage: Reference field names/values

```
import { EcsFields, EcsTree } from 'elastic-ecs';

interface MyBasicEcsEvent extends EcsFields {
    [EcsFields["event.created"]]: new Date(),
    [EcsFields["event.action"]]: 'page-viewed',
    [EcsFields["event.kind"]]: 'event',
    [EcsFields["event.category"]]: ['myCat'], // Causes Compile error, myCat is not a valid value!
}

```

# Advanced usage: Force your own required fields in the TS compiler

```
import { EcsFields, EcsTree } from 'elastic-ecs';

// The fields we want to require for all events we create
type RequiredFieldNames = 'event.created' | 'event.action' | 'event.kind' | 'event.category'
type MyRequiredEcsFields = Optional<EcsFields> & 
    Pick<EcsFields, RequiredFieldNames>

// Define an event that's 100% ECS compliant at the compiler level
interface MyEcsEvent extends MyRequiredFields {
    "event.created": Date,
    "event.action": 'page-viewed',
    "event.kind": 'event',
    // Compile error! event.category isn't defined but is required
}

const myEvent: MyEcsEvent = {
    "event.created": new Date(),
    "event.action": 'page-viewed',
    "event.kind": 'event',
};
```

# Keeping up-to-date

I may be too lazy to keep up-to-date with the latest ECS version on a weekly or monthly basis.  If you require the latest and greatest now,
please run the automated build process below and send me a pull request!  This'll probably be motivating enough to get me off my rear.

# Building against an ECS version

1. Clone this repository and ensure you have Node.js version 10 or above installed.
2. Use a terminal to cd into the rot of this repo.
3. Change the version in `package.json` to match the ECS version you want to build against, plus an extra zero such as `1.7.0`.
4. Set the ECS git branch to the same version as an environment variable, like `ECS_VERSION=1.7` on Linux systems.
5. Run `npm install` to install dependencies.
6. Run `npm run build` to build the type definitions.
7. Open a Pull Request for me if it's the latest ECS version or copy index.ts to your project.