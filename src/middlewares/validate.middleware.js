export const validate = (schema, property = "body") => {
  return (req, res, next) => {
    try {
      req[property] = schema.parse(req[property]);
      next();
    } catch (err) {
      next(err);
    }
  };
};
