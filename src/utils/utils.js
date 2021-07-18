function deferSet(setValue, originalValues, newValues) {
  setTimeout(() => {
    setValue([...originalValues, newValues[0]]);
    {
      newValues.length > 1
        ? newValues.length > 2
          ? setTimeout(() => {
              setValue([...originalValues, newValues[0], newValues[1]]);
              setTimeout(() => {
                setValue([
                  ...originalValues,
                  newValues[0],
                  newValues[1],
                  newValues[2],
                ]);
              }, 1500);
            }, 1500)
          : setTimeout(() => {
              setValue([...originalValues, newValues[0], newValues[1]]);
            }, 1500)
        : null;
    }
  }, 1500);
}

export {deferSet};
