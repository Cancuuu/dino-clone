// this is helper for update the properties of an specific element
// e.g the ground element for move to the --left css property

export function getCustomProperty(elem, prop) {
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0;
}

export function setCustomProperty(elem, prop, value) {
    elem.style.setProperty(prop, value);
}

export function incrementCustomProperty(elem, prop, inc) {
    // takes the element that you want increase the property and increase
    // for increase it you need to sum to the last value with the inc value
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc);
}