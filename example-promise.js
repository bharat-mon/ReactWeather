// const getTempPromise = (location) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(40);
//       reject('City not found');
//     }, 1000);
//   });
// };
//
// getTempPromise('Hyderabad').then((temp) => {
//   console.log('Promise Success', temp);
// }, (err) => {
//   console.log('Promise Error', err);
// });

const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & B should be numbers');
    }
  });
};

addPromise('3', 4).then((sum) => {
  console.log('Success:', sum);
}, (err) => {
  console.log('Error:', err);
});
