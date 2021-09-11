function dashRemove(myString) {
  return  myString
              .split('-')
                .map(function(word, i) {
                    if(i === 0) {
                       return word;
                    } else {
                      return word[0].toUpperCase() + word.slice(1)
                    }
                  })
                  .join('');
}

console.log(dashRemove('iam-hoang-tinh'));