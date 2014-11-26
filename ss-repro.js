schema = new SimpleSchema({
  field: {type: Object, optional: true},
  'field.subfield': {type: Number, defaultValue: 0}
});

console.log(schema.clean({}));