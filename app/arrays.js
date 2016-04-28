exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i =0; i < arr.length; i++){
      if(arr[i] === item) return i;

    }
    return -1
  },

  sum : function(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
      sum+=arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    return arr.filter(function (target) {
      if(target!==item) {
        return item;
      }
    })
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);
    while(index>-1){
      arr.splice(index,1);
      index = arr.indexOf(item);
    }

    return arr
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1,1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arL = arr1.length;
    for(var extra = 0; extra< arr2.length; extra++) {
      arr1[arL+extra] = arr2[extra];
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    var backHalf = arr.splice(index,arr.length-index);
    arr.push(item);
    arraysAnswers.concat(arr, backHalf);
    return arr;
  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
