class Cart {

}

class CartItem {

}

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
  { price: 250 },
  { title: 'Coat'},
];


const renderGoodsItem = (title = "unknown", price = "unknown", id) => {
  return `<div class="goods-item" data-id="${id}"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map((item, index) => renderGoodsItem(item.title, item.price, index));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);