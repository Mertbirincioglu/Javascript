Array.prototype.isEmpty = function(){
    return this.length === 0;
}

/**
 * Checks whether an array is number array or not
 * @returns true if number array, false otherwise
 */
Array.prototype.isNumberArray = function(){
    return this.every(element => {
        return typeof element === 'number';
    });
}

/**
 * Gets first element of an array
 * @returns number if present, undefined otherwise 
 */
Array.prototype.first = function(){
    return this[0];
}

/**
 * Gets last element of an array.
 * @returns number if present, undefined otherwise
 */
Array.prototype.last = function(){
    return this[this.length - 1];
}

export default this;