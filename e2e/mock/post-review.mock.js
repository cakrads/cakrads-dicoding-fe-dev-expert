module.exports = {
  URL: 'https://restaurant-api.dicoding.dev/review',
  SUCCESS: {
    error: false,
    message: 'success',
    customerReviews: [
      {
        name: 'Ahmad',
        review: 'Tidak ada duanya!',
        date: '13 November 2019',
      },
      {
        name: 'codecept',
        review: 'My Review From Codecept. Should used mock letter',
        date: '14 September 2021',
      },
    ],
  },
  ERROR: {
    error: true,
    message: 'something error',
    customerReviews: [],
  },
};
