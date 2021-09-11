var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

function updateRecords(records, id, prop, value) {
  let myArray = [];
  if (Object.keys(records[id]).includes(prop) == false && value !== '') {
      records[id][prop] = value;
  } else if (prop == 'tracks' && Object.keys(records[id]).includes(prop) == false) {
      myArray.push(value);
      records[id][prop] = myArray;
  } else if (Object.keys(records[id]).includes(prop) == true && value !== '') {
      myArray.push(records[id][prop]);
      console.log(myArray)
      myArray.push(value);
      records[id][prop] = myArray;
  } else if (value == '') {
      delete records[id][prop];
  }
  return records;
}
  
console.log(updateRecords(recordCollection, 2468, 'artist', ''));
  
  