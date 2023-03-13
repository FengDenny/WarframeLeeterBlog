function checkValue(value, filterValue) {
  if (typeof value === "string") {
    return value.toLowerCase().includes(filterValue.toLowerCase());
  } else if (
    typeof value === "object" &&
    value !== null &&
    Object.keys(value).length > 0
  ) {
    if (Array.isArray(value)) {
      return value.some((v) => checkValue(v, filterValue));
    } else {
      return Object.values(value).some((v) => checkValue(v, filterValue));
    }
  } else {
    return false;
  }
}

export default function FilterData(data, filterValues) {
  return data.filter((value) => {
    const filtered =
      filterValues !== undefined &&
      filterValues
        .trim()
        .split(", ")
        .every((filterValue) => checkValue(value, filterValue));

    return filtered;
  });
}
