/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/index')

router.on('/home/buyer').render('pages/buyer/index')

router.on('/home/seller').render('pages/seller/index')

router.on('/catalog').render('pages/catalog')

router.on('/buyer/catalog').render('pages/buyer/catalog')

router.on('/seller/catalog').render('pages/seller/catalog')

router.on('/buyer/cart').render('pages/buyer/cart')

router.on('/seller/cart').render('pages/seller/cart')

router.on('/about').render('pages/about')

router.on('/buyer/about').render('pages/buyer/about')

router.on('/seller/about').render('pages/seller/about')

router.on('/seller/inventory').render('pages/seller/inventory')

router.get('/search', async ({ request, view }) => {
  const query = request.input('q')?.toLowerCase() || ''

  const books = [
    { id: 1, title: 'Norwegian Wood', author: 'Murakami', price: 10, img: '/resources/assets/book_cover/norwegian_wood.jpg' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott', price: 8, img: '/resources/assets/book_cover/great_gatsby.jpg' },
    { id: 3, title: 'Brother Karamazov', author: 'Dostoevsky', price: 12, img: '/resources/assets/book_cover/brother_karamazov.jpg' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 7, img: '/resources/assets/book_cover/moby_dick.jpeg' },
    { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', price: 13, img: '/resources/assets/book_cover/war_and_peace.jpg' },
    { id: 6, title: 'Spoke Thus Zarathustra', author: 'Friedrich Nietzsche', price: 10, img: '/resources/assets/book_cover/spoke_thus_zarathustra.jpg' },
    { id: 7, title: '1984', author: 'George Orwell', price: 11, img: '/resources/assets/book_cover/1984.jpeg' },
    { id: 8, title: 'Kafka on the Shore', author: 'Murakami', price: 9, img: '/resources/assets/book_cover/kafka_on_the_shore.jpg' },
    { id: 9, title: 'Crime and Punishment', author: 'Dostoevsky', price: 13, img: '/resources/assets/book_cover/crime_and_punishment.jpeg' },
    { id: 10, title: 'Metamorphosis', author: 'Franz Kafka', price: 13, img: '/resources/assets/book_cover/metamorphosis.jpeg' },
    { id: 11, title: 'Meditations', author: 'Marcus Aurelius', price: 7, img: '/resources/assets/book_cover/meditations.jpeg' },
    { id: 12, title: 'No Longer Human', author: 'Osamu Dazai', price: 6, img: '/resources/assets/book_cover/no_longer_human.jpg' },
  ]

   const results = books.filter((book) =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  )
  return view.render('pages/search', { query, results })
})

router.get('/buyer/search', async ({ request, view }) => {
  const query = request.input('q')?.toLowerCase() || ''

  const books = [
    { id: 1, title: 'Norwegian Wood', author: 'Murakami', price: 10, img: '/resources/assets/book_cover/norwegian_wood.jpg' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott', price: 8, img: '/resources/assets/book_cover/great_gatsby.jpg' },
    { id: 3, title: 'Brother Karamazov', author: 'Dostoevsky', price: 12, img: '/resources/assets/book_cover/brother_karamazov.jpg' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 7, img: '/resources/assets/book_cover/moby_dick.jpeg' },
    { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', price: 13, img: '/resources/assets/book_cover/war_and_peace.jpg' },
    { id: 6, title: 'Spoke Thus Zarathustra', author: 'Friedrich Nietzsche', price: 10, img: '/resources/assets/book_cover/spoke_thus_zarathustra.jpg' },
    { id: 7, title: '1984', author: 'George Orwell', price: 11, img: '/resources/assets/book_cover/1984.jpeg' },
    { id: 8, title: 'Kafka on the Shore', author: 'Murakami', price: 9, img: '/resources/assets/book_cover/kafka_on_the_shore.jpg' },
    { id: 9, title: 'Crime and Punishment', author: 'Dostoevsky', price: 13, img: '/resources/assets/book_cover/crime_and_punishment.jpeg' },
    { id: 10, title: 'Metamorphosis', author: 'Franz Kafka', price: 13, img: '/resources/assets/book_cover/metamorphosis.jpeg' },
    { id: 11, title: 'Meditations', author: 'Marcus Aurelius', price: 7, img: '/resources/assets/book_cover/meditations.jpeg' },
    { id: 12, title: 'No Longer Human', author: 'Osamu Dazai', price: 6, img: '/resources/assets/book_cover/no_longer_human.jpg' },
  ]

   const results = books.filter((book) =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  )
  return view.render('pages/buyer/search', { query, results })
})

router.get('/seller/search', async ({ request, view }) => {
  const query = request.input('q')?.toLowerCase() || ''

  const books = [
    { id: 1, title: 'Norwegian Wood', author: 'Murakami', price: 10, img: '/resources/assets/book_cover/norwegian_wood.jpg' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott', price: 8, img: '/resources/assets/book_cover/great_gatsby.jpg' },
    { id: 3, title: 'Brother Karamazov', author: 'Dostoevsky', price: 12, img: '/resources/assets/book_cover/brother_karamazov.jpg' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 7, img: '/resources/assets/book_cover/moby_dick.jpeg' },
    { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', price: 13, img: '/resources/assets/book_cover/war_and_peace.jpg' },
    { id: 6, title: 'Spoke Thus Zarathustra', author: 'Friedrich Nietzsche', price: 10, img: '/resources/assets/book_cover/spoke_thus_zarathustra.jpg' },
    { id: 7, title: '1984', author: 'George Orwell', price: 11, img: '/resources/assets/book_cover/1984.jpeg' },
    { id: 8, title: 'Kafka on the Shore', author: 'Murakami', price: 9, img: '/resources/assets/book_cover/kafka_on_the_shore.jpg' },
    { id: 9, title: 'Crime and Punishment', author: 'Dostoevsky', price: 13, img: '/resources/assets/book_cover/crime_and_punishment.jpeg' },
    { id: 10, title: 'Metamorphosis', author: 'Franz Kafka', price: 13, img: '/resources/assets/book_cover/metamorphosis.jpeg' },
    { id: 11, title: 'Meditations', author: 'Marcus Aurelius', price: 7, img: '/resources/assets/book_cover/meditations.jpeg' },
    { id: 12, title: 'No Longer Human', author: 'Osamu Dazai', price: 6, img: '/resources/assets/book_cover/no_longer_human.jpg' },
  ]

   const results = books.filter((book) =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  )
  return view.render('pages/seller/search', { query, results })
})

router.on('/contact').render('pages/contact')

router.on('/buyer/contact').render('pages/buyer/contact')

router.on('/seller/contact').render('pages/seller/contact')

router.on('/login').render('pages/login')