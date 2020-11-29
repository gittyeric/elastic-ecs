import { EcsFields } from './ecs'

type EcsFieldNames = keyof EcsFields

interface CustomFields {
    [fieldName: string]: any,
}

type Schema<CF extends CustomFields, AVAILABLE_ECS_FIELDS extends EcsFieldNames> = {
    customFields: CF,
    ecsFields: {[EscField in AVAILABLE_ECS_FIELDS]: EcsFields[EscField]},
}
type AssertValidSchema<CUSTOM> = keyof CUSTOM extends Exclude<keyof CUSTOM, keyof EcsFields> ? true : never

// Create a new Schema type that can be used to generate type-safe event types and auto-validate your field sets
// CF is a string-to-field-type mapping describing all the custom fields you define outside of ECS
// UNUSED_ECS_FIELDS are all the ECS fields that shouldn't be avaiable to your application
export type NewSchema<CF extends CustomFields, AVAILABLE_ECS_FIELDS extends EcsFieldNames> = 
    AssertValidSchema<CF> extends never ?
        'Invalid Schema: Custom fields overlap with ECS fields' :
        Schema<CF, AVAILABLE_ECS_FIELDS>

type EventType<
    SCHEMA extends Schema<any, any>,
    REQUIRED_FIELDS extends keyof (SCHEMA['ecsFields'] & SCHEMA['customFields']),
    OPTIONAL_FIELDS extends keyof (SCHEMA['ecsFields'] & SCHEMA['customFields']),
    NARROWED_EVENT_SCHEMA extends Partial<SCHEMA['ecsFields'] & SCHEMA['customFields']>,
> =
    Required<Pick<SCHEMA['ecsFields'] & SCHEMA['customFields'], REQUIRED_FIELDS>> &
    Partial<Pick<SCHEMA['ecsFields'] & SCHEMA['customFields'], OPTIONAL_FIELDS>> &
    NARROWED_EVENT_SCHEMA

type AssertValidEvent<
    SCHEMA extends Schema<any, any>,
    REQUIRED_FIELDS extends keyof (SCHEMA['ecsFields'] & SCHEMA['customFields']),
    OPTIONAL_FIELDS extends keyof (SCHEMA['ecsFields'] & SCHEMA['customFields']),
> = REQUIRED_FIELDS extends Exclude<REQUIRED_FIELDS, OPTIONAL_FIELDS> ? (
            never extends Exclude<REQUIRED_FIELDS & OPTIONAL_FIELDS, keyof (SCHEMA['ecsFields'] & SCHEMA['customFields'])> ?
                true : 
                'This Event uses fields not defined in Custom Fields or ECS fields'
        ) :
        'Required and Optional fields overlap'

// Create a new type-safe event that's constrained by SCHEMA
export type NewEventType<
    SCHEMA extends Schema<any, any>,
    REQUIRED_FIELDS extends keyof (SCHEMA['ecsFields'] & SCHEMA['customFields']),
    OPTIONAL_FIELDS extends keyof (SCHEMA['ecsFields'] & SCHEMA['customFields']) = never,
    NARROWED_EVENT_SCHEMA extends Partial<SCHEMA['ecsFields'] & SCHEMA['customFields']> = {},
> = 
    AssertValidEvent<SCHEMA, REQUIRED_FIELDS, OPTIONAL_FIELDS> extends true ? 
        EventType<SCHEMA, REQUIRED_FIELDS, OPTIONAL_FIELDS, NARROWED_EVENT_SCHEMA> :
        AssertValidEvent<SCHEMA, REQUIRED_FIELDS, OPTIONAL_FIELDS>
