const roomStatus = [
  'Rented',
  'Available',
  'Available',
  'Rented',
  'Purchased',
  'Purchased',
  'InMaintenance',
  'Rented',
  'Purchased',
  'Purchased',
  'Rented',
  'Rented',
  'Rented',
  'Purchased',
  'Rented',
  'Rented',
  'Rented',
  'InMaintenance',
  'Rented',
  'InMaintenance',
  'InMaintenance',
  'Rented',
];

const groupByStatus = {};

roomStatus.map(status => {
  if (!groupByStatus[status]) {
     groupByStatus[status] = 1;
  }
  else {
    groupByStatus[status] += 1
  }
});

console.log(groupByStatus);