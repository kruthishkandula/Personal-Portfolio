function convertStringToObject (obj) {
  // if the input is not an object, return it as is
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // iterate over all properties of the object
  for (const prop in obj) {
    if (typeof obj[prop] === 'string') {
      try {
        // attempt to parse the string as JSON
        const parsedObj = JSON.parse(obj[prop])
        if (typeof parsedObj === 'object' && parsedObj !== null) {
          // if the parsed object is an object (not an array or null), recursively call the function
          obj[prop] = convertStringToObject(parsedObj)
        } else {
          // otherwise, assign the parsed object directly to the property
          obj[prop] = parsedObj
        }
      } catch (e) {
        // if parsing fails, leave the property as a string
        console.error(`Failed to parse string property "${prop}" as JSON: ${e}`)
      }
    } else {
      // recursively call the function for any non-string child properties
      obj[prop] = convertStringToObject(obj[prop])
    }
  }

  return obj
}

module.exports = {
  convertStringToObject
}
