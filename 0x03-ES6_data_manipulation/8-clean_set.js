function cleanSet(set, startString) {
  const filteredValues = [...set].filter(value => value.startsWith(startString));
  return filteredValues.join('-').replace(new RegExp('^' + startString), '');
}

export default cleanSet;
