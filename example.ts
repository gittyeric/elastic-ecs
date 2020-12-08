// Define a custom ECS-based schema and define the first 2 event types in it

import { NewEventType, NewSchema, EcsFields, NewEventSchema } from './src'

// All the custom fields you ever put in events should go here
interface MyCustomFields {
    // Optional fields on some events
    'attempts.count'?: number,
    
    // Required fields on ALL events
    'customer.id': string,
}

// Make all ECS fields available, another good option could be EcsCoreFields if you don't need extended fields
type MyEcsFieldNames = EcsFields & {
    // Required ECS fields
    '@timestamp': Date,
    'event.action': string,
}

// Define my schema based on my custom fields and the ECS fields I have available
type MySchema = NewSchema<MyCustomFields, MyEcsFieldNames>

// My Event Types

// Verbose schema, spell out the field names AND types
type MyLogoutEvent = NewEventSchema<MySchema, {
    '@timestamp': Date,
    'event.action': 'User Logout',
    'customer.id': string
    
    // Optional fields
    'event.category'?: 'authentication'[],
}>

// Shorthand schema, don't need to include fields' types
type MyLoginEvent = NewEventType<MySchema, 
    '@timestamp' | 'event.action' | 'customer.id', // Required Event Fields
    'event.category' | 'attempts.count',           // Optional Event Fields
    {'event.action': 'User Login'}                 // Per-Event schema type narrowing
>

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
