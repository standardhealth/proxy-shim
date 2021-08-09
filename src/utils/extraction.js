function createSearchsetBundle(entries, resourceType = null) {
  const filteredEntries = entries
    .filter((e) => (resourceType ? e.resource.resourceType === resourceType : true))
    .map((e) => ({ ...e, search: { mode: 'match' } }));
  return {
    resourceType: 'Bundle',
    type: 'searchset',
    total: filteredEntries.length,
    entry: filteredEntries,
  };
}

module.exports = {
  createSearchsetBundle,
};
