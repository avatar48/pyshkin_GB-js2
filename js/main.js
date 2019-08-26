class Cart {
  constructor(goods = []) {
    this.goods = goods;
  }

  addGoods(good) { //Добавление
    this.goods.push(good);
  }

  listGoods() {
    return this.goods;   
  }

  rmGood(name) { //Удаление
    if(this.__findByName(name) === -1){
        consile.log(`Невозможно удалить ${name}`);
    } else {
        this.goods.splice(this.__findByName(name), 1);
        return this.goods;
    }
  }

  __findByName(name) { //Поиск элемента в массиве
    let result = -1;
    this.goods.forEach((good, index) => {
        if (good.product_name == name) {
          result = index;
      }
    });
    return result;
  }

}

class CartItem {

}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
  let xhr;
  
  return new Promise((resolve, reject) => {

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(xhr.responseText);
      }
      if (xhr.status != 200 && xhr.readyState === 4) {
        console.log('Не удалось загрузить список товаров');
        reject();
      }
    }

    xhr.open('GET', url, true);
    xhr.send();
  });
}

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    return new Promise((resolve, reject) => {
      makeGETRequest(`${API_URL}/catalogData.json`).then((b) => {
        resolve(this.goods = JSON.parse(b));
      });
    });
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods().then(() => {
  list.render();
})

