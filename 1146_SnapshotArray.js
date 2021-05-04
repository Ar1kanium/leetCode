// time : 35 mins

// algo: keep records of changing in a map, with every snap, copy this map and keep having records in the next one.
// if no value, return 0. if out of interval [0, length - 1], do nothing

// comments: first of all i tried to use naive approach with array and pushing as snaps these arrays in another array.
// obv timed out.

// task : Implement a SnapshotArray that supports the following interface:
// SnapshotArray(int length) initializes an array-like data structure with the given length.  Initially, each element equals 0.
// void set(index, val) sets the element at the given index to be equal to val.
// int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
// int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id


var SnapshotArray = function(length) {
  this.length = length
  this.snaps = [new Map()]
};

SnapshotArray.prototype.set = function(index, val) {
  if (index >= this.length || index < 0) return
  this.snaps[this.snaps.length - 1].set(index, val)
};

SnapshotArray.prototype.snap = function() {
  this.snaps.push(new Map([...this.snaps[this.snaps.length - 1]]))
  return this.snaps.length - 2
};

SnapshotArray.prototype.get = function(index, snap_id) {
  if (index >= this.length || index < 0 || snap_id > this.snaps.length - 2) return
  return this.snaps[snap_id].get(index) ? this.snaps[snap_id].get(index) : 0
};
