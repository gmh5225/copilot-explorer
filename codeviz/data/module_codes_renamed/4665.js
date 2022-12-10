Object.defineProperty(exports, "__esModule", {
  value: !0,
});
exports.validateTuple = undefined;
const M_codegen_NOTSURE = require("codegen"),
  M_ajv_utils_NOTSURE = require("ajv-utils"),
  M_validate_properties_NOTSURE = require("validate-properties"),
  s = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(e) {
      const { schema: t, it: n } = e;
      if (Array.isArray(t)) return validateTuple(e, "additionalItems", t);
      n.items = !0;
      if (M_ajv_utils_NOTSURE.alwaysValidSchema(n, t)) {
        e.ok(M_validate_properties_NOTSURE.validateArray(e));
      }
    },
  };
function validateTuple(e, t, n = e.schema) {
  const { gen: i, parentSchema: s, data: a, keyword: c, it: l } = e;
  !(function (e) {
    const { opts: r, errSchemaPath: i } = l,
      s = n.length,
      a = s === e.minItems && (s === e.maxItems || !1 === e[t]);
    if (r.strictTuples && !a) {
      const e = `"${c}" is ${s}-tuple, but minItems or maxItems/${t} are not specified or different at path "${i}"`;
      M_ajv_utils_NOTSURE.checkStrictMode(l, e, r.strictTuples);
    }
  })(s);
  if (l.opts.unevaluated && n.length && !0 !== l.items) {
    l.items = M_ajv_utils_NOTSURE.mergeEvaluated.items(i, n.length, l.items);
  }
  const u = i.name("valid"),
    d = i.const("len", M_codegen_NOTSURE._`${a}.length`);
  n.forEach((t, n) => {
    if (M_ajv_utils_NOTSURE.alwaysValidSchema(l, t)) {
      i.if(M_codegen_NOTSURE._`${d} > ${n}`, () =>
        e.subschema(
          {
            keyword: c,
            schemaProp: n,
            dataProp: n,
          },
          u
        )
      );
      e.ok(u);
    }
  });
}
exports.validateTuple = validateTuple;
exports.default = s;
