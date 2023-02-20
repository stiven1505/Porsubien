function paramsBuilder(validParams, body) {
  let params = {};
  validParams.forEach((attribute) => {
    if (Object.prototype.hasOwnProperty.call(body, attribute)) {
      params[attribute] = body[attribute];
    }
  });
  return params;
}

//function to paginate a list of documents
function paginate(docs, page, limit) {
  const total = docs.length;
  const totalPages = Math.ceil(total / limit);
  const paginated = {
    total,
    totalPages,
    page,
    limit,
    docs: docs.slice((page - 1) * limit, page * limit),
  };
  return paginated;
}

module.exports = { paramsBuilder, paginate };
