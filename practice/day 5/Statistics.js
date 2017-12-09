function findHighest(data) {
  var max = data[0];
  for (v of data) {
    if (v > max) {
      max = v;
    }
  }
  return max;
}

function findLowest(data) {
  var min = data[0];
  for (v of data) {
    if (v < min) {
      min = v;
    }
  }
  return min;
}

function findSquare(data) {
  var newdata = [];
  for (v in data) {
    newdata[v] = data[v] * data[v];
  }
  return newdata;
}

function findRange(data) {
  return findHighest(data) - findLowest(data);
}

function findFrequency(data, tofind) {
  var count = 0;
  for (v of data) {
    if (v == tofind) {
      count++;
    }
  }
  return count;
}

function findMean(data) {
  var sum = 0;
  for (v of data) {
    sum += v;
  }
  return (sum / data.length);
}

function findMedian(data) {
  var newdata = data.slice();
  newdata = newdata.sort();
  if (newdata.length % 2 == 0) {
    // even number
    var num = Number(data.length / 2);
    return (newdata[num] + newdata[num - 1]) / 2;
  } else {
    // odd number
    return newdata[Math.floor(Number(data.length / 2))];
  }
}

function check_if_all_same_frequency(data) {
  var check = data[Object.keys(data)[0]];
  for (var v of Object.keys(data)) {
    if (data[v] != check) {
      return false;
    }
  }
  return true;
}

function findMode(data) {
  var newdata = {};
  for (var i = 0; i < data.length; i++) {
    newdata[data[i]] = findFrequency(data, data[i]);
  }
  if (check_if_all_same_frequency(newdata)) {
    return undefined;
  } else {
    var max = newdata[Object.keys(newdata)[0]];
    for (var v of Object.keys(newdata)) {
      if (newdata[v] > max) {
        max = newdata[v];
      }
    }
    var ans = [];
    var counter = -1;
    for (var v of Object.keys(newdata)) {
      if (newdata[v] == max) {
        ans[++counter] = v;
      }
    }
    return ans;
  }
}

function findPopulationStandardDeviation(data) {
  var mean = findMean(data);
  var newdata = [];
  for (i in data) {
    var temp = data[i] - mean;
    newdata[i] = temp * temp;
  }
  return Math.sqrt(findMean(newdata));
  // return "asdf";
}

function findPopulationVariance(data){
  var temp = findPopulationStandardDeviation(data);
  return temp*temp;
}

function findSampleStandardDeviation(data) {
  var mean = findMean(data);
  var newdata = [];
  for (i in data) {
    var temp = data[i] - mean;
    newdata[i] = temp * temp;
  }
  return Math.sqrt((findMean(newdata)*newdata.length)/(newdata.length-1));
  // return "asdf";
}

function findSampleVariance(data){
  var temp = findSampleStandardDeviation(data);
  return temp*temp;
}

var a = [10, 20, 30, 40, 50, 60, 70, 10, 20, 30];
var max = findHighest(a);
var min = findLowest(a);
var square = findSquare(a);
var range = findRange(a);
var count = findFrequency(a, 10);
var mean = findMean(a);
var median = findMedian(a);
var mode = findMode(a);
var population_SD = findPopulationStandardDeviation(a);
var population_variance = findPopulationVariance(a);
var sample_SD = findSampleStandardDeviation(a);
var sample_variance = findSampleVariance(a);
console.log(`Max = ${max}`);
console.log(`Min = ${min}`);
console.log(`Squared = ${square}`);
console.log(`Range = ${range}`);
console.log(`Frequency = ${count}`);
console.log(`Mean = ${mean}`);
console.log(`Median = ${median}`);
console.log(`Mode = ${mode}`);
console.log(`Standard Deviation = ${population_SD}`);
console.log(`Population Variance ${population_variance}`);
console.log(`Sample Standard Deviation = ${sample_SD}`);
console.log(`Sample Variance = ${sample_variance}`);
