export declare const GET_ATTRIBUTES_FORM = "\n  query GET_ATTRIBUTES_FORM($formCode: String!) {\n    attributesForm(formCode: $formCode) {\n      items {\n        code\n        default_value\n        entity_type\n        frontend_class\n        frontend_input\n        is_required\n        is_unique\n        label\n        options {\n          is_default\n          label\n          value\n        }\n        ... on CustomerAttributeMetadata {\n          multiline_count\n          sort_order\n          validate_rules {\n            name\n            value\n          }\n        }\n      }\n      errors {\n        type\n        message\n      }\n    }\n  }\n";
export declare const GET_ATTRIBUTES_FORM_SHORT = "\n  query GET_ATTRIBUTES_FORM_SHORT {\n    attributesForm(formCode: \"customer_register_address\") {\n      items {\n        frontend_input\n        label\n        code\n        ... on CustomerAttributeMetadata {\n          multiline_count\n          sort_order\n        }\n      }\n    }\n  }\n";
//# sourceMappingURL=getAttributesForm.graphql.d.ts.map