# Elastic ECS Typescript Definitions

This wraps up the Elastic Common Schema into strict Typescript types by parsing the official [ECS schema]("https://github.com/elastic/ecs") document.  Since this library is pure types and a strict reflection of ECS, the version is pinned to the ECS version itself, starting from version 1.7.  You can also clone this repo to build against a given ECS version yourself.

## Features

- Get all ECS fields as a flat associative array (EcsFields) or as a full object hierarchy (EcsTree).
- Breakout by ECS core and/or extended fields
- Convience Schema type util to guarantee type-safe events and schema
- Generic enough parsing to run yourself against any ECS version

## Install

Run:

`npm install elastic-ecs`

## Example Usage

### Basic Usage: Reference field names/values

```
import { EcsFields, EcsTree } from 'elastic-ecs';

interface MyBasicEcsEvent extends EcsFields {
    [EcsFields["event.created"]]: new Date(),
    [EcsFields["event.action"]]: 'page-viewed',
    [EcsFields["event.kind"]]: 'event',
    [EcsFields["event.category"]]: ['myCat'], // Causes Compile error, myCat is not a valid value!
}

```

### Advanced Usage: Define Events through a type-safe custom schema

By defining your own Schema, you can get lots of free type safety when both defining your custom fields on top of ECS fields and when defining individual events:

```

import { NewEventType, NewSchema, EcsFields } from 'elaastic-ecs'

// All the custom fields you ever put in events should go here
interface MyCustomFields {
    'customer.id': string,
    'attempts.count': number,
}

// Use all ECS fields, another good option could be EcsCoreFields if you don't need extended fields
type MyEcsFieldNames = keyof EcsFields 

// Define my schema based on my custom fields and the ECS fields I have available
type MySchema = NewSchema<MyCustomFields, MyEcsFieldNames>

// My Event Types
type MyLogoutEvent = NewEventType<MySchema, 
    '@timestamp' | 'event.action' | 'customer.id'> // Required Event Fields

type MyLoginEvent = NewEventType<MySchema, 
    '@timestamp' | 'event.action' | 'customer.id', // Required Event Fields
    'event.category' | 'attempts.count',           // Optional Event Fields
    {'event.action': 'User Login'}                 // Per-Event schema type narrowing
>

// Concrete Event instances can't violate your Schema!
const loginEvent: MyLoginEvent = {
    'event.action': 'User Login',
    '@timestamp': new Date(),
    'attempts.count': 1,
    'customer.id': '123',
};

const logoutEvent: MyLogoutEvent = {
    '@timestamp': new Date(),
    'event.action': 'User Logout',
    'customer.id': '123',
};

```

## Keeping up-to-date

I may be too lazy to keep up-to-date with the latest ECS version on a weekly or monthly basis.  If you require the latest and greatest now,
please run the automated build process below and send me a pull request!  This'll probably be motivating enough to get me off my rear.

## Building against an ECS version

1. Clone this repository and ensure you have Node.js version 10 or above installed.
2. Use a terminal to cd into the rot of this repo.
3. Change the version in `package.json` to match the ECS version you want to build against, plus an extra zero such as `1.7.0`.
4. Set the ECS git branch to the same version as an environment variable, like `ECS_VERSION=1.7` on Linux systems.
5. Run `npm install` to install dependencies.
6. Run `npm run build` to build the type definitions.
7. Open a Pull Request for me if it's the latest ECS version or copy index.ts to your project.