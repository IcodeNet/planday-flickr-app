export const mapSourceToTarget = (sourceObject, targetObject) => {

  try {

    Object.keys(sourceObject).forEach(function(key) {
      if (typeof sourceObject[key] === 'object' && sourceObject[key]) {
        // If it's an object, let's go recursive
        targetObject[key] = sourceObject[key];
        mapSourceToTarget(sourceObject[key], targetObject[key]);
      } else {
        // If it's not, add a key/value
        targetObject[key] = sourceObject[key];
      }
    });
  } catch (e) {
    console.log(e);
  }

  return targetObject;
};
