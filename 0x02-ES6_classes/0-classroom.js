/**
 * Represents a classroom.
 * @class
 */
export default class ClassRoom {
    /**
     * Creates a new instance of the ClassRoom class.
     * @constructor
     * @param {number} maxStudentsSize - The maximum number of students allowed in the classroom.
     */
    constructor(maxStudentsSize) {
        this._maxStudentsSize = maxStudentsSize;
    }
}