const roomStatus = [
  'Rented',
  'Available',
  'Available',
  'Rented',
  'Purchased',
  'Purchased',
  'InMaintenance',
  'Purchased',
  'Purchased',
  'Rented',
  'Purchased',
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
    return (groupByStatus[status] = 1);
  }
  return (groupByStatus[status] += 1);
});

console.log(groupByStatus);