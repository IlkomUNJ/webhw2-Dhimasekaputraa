// --- Helper functions ---
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || []
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

function updateCartCount() {
  const cart = getCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const indicator = document.getElementById('cart-count')
  indicator.textContent = totalItems > 0 ? totalItems : ''
  indicator.classList.toggle('active', totalItems > 0)
}

// --- Event: Add to Cart ---
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-cart')) {
    const bookCard = e.target.closest('.book-card')
    const title = bookCard.querySelector('h3').textContent
    const author = bookCard.querySelector('p').textContent
    const price = parseFloat(bookCard.querySelector('span').textContent.replace('$', ''))
    const img = bookCard.querySelector('img').src

    let cart = getCart()
    let existing = cart.find(item => item.title === title)

    if (existing) {
      existing.quantity += 1
      existing.subtotal = existing.quantity * existing.price
    } else {
      cart.push({
        title,
        author,
        price,
        quantity: 1,
        subtotal: price,
        img
      })
    }

    saveCart(cart)
    updateCartCount()
    alert(`"${title}" Added to your cart!`)
  }
})

// --- On load: Update indicator ---
document.addEventListener('DOMContentLoaded', updateCartCount)
