"use strict";

/* Javascript that defines the order and cart variables and allows customer to place order of items */

var orderTotal = 0;

var cartHTML = "<table> \
<tr> \
<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> \
</tr>";

for (let i = 0; i < item.length; i++) {
   var itemCost = itemPrice[i] * itemQty[i];

   cartHTML +=
       "<tr>
           <td><img src="hb_item.png" alt="item" /></td>
           <td>${itemDescription[i]}</td>
           <td>$${itemPrice[i].toFixed(2)}</td>
           <td>${itemQty[i]}</td>
           <td>$${itemCost.toFixed(2)}</td>
       </tr>";
   orderTotal += itemCost;
}

cartHTML +=
   "<tr>
       <td colspan="4">Subtotal</td>
       <td>$${orderTotal.toFixed(2)}</td>
   </tr> </table>";

document.getElementById('cart').innerHTML = cartHTML;
