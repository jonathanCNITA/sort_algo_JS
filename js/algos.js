// Converts from degrees to radians.
Math.toRadians = function(degrees) {
  return degrees * Math.PI / 180;
};


function distanceFromGrenoble(city)
{
  console.log("implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;

  let RayonDeLaPlaneteTerre = 6371e3; // metres
  var φ1 = Math.toRadians(GrenobleLat);
  var φ2 = Math.toRadians(city.latitude);
  var Δφ = Math.toRadians((city.latitude-GrenobleLat));
  var Δλ = Math.toRadians((city.longitude-GrenobleLong));

  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = RayonDeLaPlaneteTerre * c;
  return Math.round(d/1000);
}

function swap(i,j) // Swap the values in csvDataay csvData
{
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  [csvData[i], csvData[j]] = [csvData[j], csvData[i]];
  // let temp = csvData[i];
  // csvData[i] = csvData[j];
  // csvData[j] = temp; 
}

function isLess(A,B)
{
  displayBuffer.push(['compare', A, B]); // Do not delete this line (for display)
  let cityA = csvData[A];
  let cityB = csvData[B];
  return cityA.dist < cityB.dist;
}


function insertsort()
{
  console.log("insert me !");
  for (let i = 1; i < csvData.length; i++) {
		for (let k = i; k > 0 ; k--) {
      if(isLess(k, k-1)) {
        swap(k, k-1);
      }
		}
	}
}


function selectionsort()
{
  console.log("selection sort !");
  for (let i = 0; i < csvData.length; i++) {
		let k = i;
		for (let j = i+1; j < csvData.length; j++) {
			if (isLess(j,k)) {
				k = j;
			}
		}
    swap(i,k);
  }
}


function bubblesort()
{
  console.log("bubble sort !");
  for (let i = 0; i < csvData.length; i++) {
		let swapped = false;
		for (let j = csvData.length - 1; j >= i+1; j--) {
			if(isLess(j, j-1)) {
        swap(j, j-1);
				swapped = true;
			}
		}
		if(!swapped) {
				break;
		}
	}
}


function insertionForShell(gap, s) {
  for (let i = s + gap; i < csvData.length; i += gap) {
    if (isLess(i, i - gap)) {
      swap(i , i - gap);

    }
  }
}


function shellsort()
{
  console.log("Shell sort !");
  let gap = Math.floor(csvData.length / 3);
  while ( gap > 0 ) {
    for (let s = 0; s < gap; s++) {
      insertionForShell(gap, s);
    }
    gap--;
  }
}


function mergesort(data)
{
  console.log("implement me !");
}
function heapsort(data)
{
  console.log("implement me !");
}

function quickSort2(start, end) {
  if(end <= start) {
    return;
  }
  let indexPivot = start;
  let k = start;
  
  for (let i = start + 1; i <= end; i++) {
    if( isLess(i, indexPivot)) {
      swap(++k,i);
    }
  }

  swap(k, indexPivot);
  // quickSort2(start, k-1); // left side
  // quickSort2(k+1, end); // right side
}


function quicksort()
{
  quickSort2(0, csvData.length-1);
}


function quick3sort(data)
{
  console.log("implement me !");
}



var algorithms = {
  'insert': insertsort,
  'select': selectionsort,
  'bubble': bubblesort,
  'shell': shellsort,
  'merge': mergesort,
  'heap': heapsort,
  'quick': quicksort,
  'quick3': quick3sort
}

function sort(algo)
{
  if (!algorithms.hasOwnProperty(algo)) {
    throw 'Invalid algorithm ' + algo;
  }
  var sort_fn = algorithms[algo];
  sort_fn();
}
