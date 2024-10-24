// script.js
const quantityInputs = document.querySelectorAll('input[type="number"]');

quantityInputs.forEach(input => {
    input.addEventListener('change', updateSubtotal);
});

function updateSubtotal(event) {
    const quantity = event.target.value;
    const price = 250000; // Hardcoded price for this example
    const subtotal = quantity * price;

    // Update the subtotal in the table
    const subtotalCell = event.target.closest('tr').querySelector('td:last-child');
    subtotalCell.textContent = 'Rs. ' + subtotal.toLocaleString();
    
    // Update the cart total
    document.querySelector('.cart-totals p:nth-child(2)').textContent = 'Total: Rs. ' + subtotal.toLocaleString();
}