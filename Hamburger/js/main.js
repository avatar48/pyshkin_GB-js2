class HamburgerException {
    constructor(code, message) {
        this.name = "HamburgerException";
        this.error_code = code;
        this.message = message;
    }
}

class Hamburger {
    constructor(bun, stuffing, topping) {
        this.size = bun.name;
        this.price = bun.price;
        this.calories = bun.calories;
        this.stuffing_ary = stuffing || [];
        this.topping_ary = topping || [];
        this.total_price;
        this.total_calories;
    }

    getNames(array) { //Создание массива имен
        let result = [];
        for(let elem in array){
                result.push(array[elem].name);
        }
        return result;
    }

    findElem(elem, array) { //Поиск элемента в массиве
        let result = -1;
        for(let i = 0; i < array.length; i++){
            if (array[i] === elem) {
                result = i;
                break;
            }
        }
        return result;
    }

    addTopping(topping) { //Добавление
        if(this.findElem(topping, this.topping_ary) === -1){
            this.topping_ary.push(topping);
            return this.topping_ary;
        } else {
            throw new HamburgerException('1x2b', 'Добавка ' + topping.name + ', уже присутствует.');
        }
    }

    removeTopping(topping) { //Удаление
        if(this.findElem(topping, this.topping_ary) === -1){
            throw new HamburgerException('1x3b', 'Невозможно удалить добавку ' + topping.name);
        } else {
            delete this.topping_ary[this.findElem(topping, this.topping_ary)];
            return this.topping_ary;
        }
    }

    getToppings() {
        return this.getNames(this.topping_ary);   
    }

    getSize() {
        return this.size;
    }

    getStuffing() {
        return this.getNames(this.stuffing_ary);
    }

    calculatePrice() {
        this.total_price = 0;
        for(let stuffing in this.stuffing_ary){
            this.total_price += this.stuffing_ary[stuffing].price;
        }
        for(let topping in this.topping_ary){
            this.total_price += this.topping_ary[topping].price;
        }	
        return this.total_price + this.price;
    }

    calculateCalories() {
        this.total_calories = 0;
        for(let stuffing in this.stuffing_ary){
            this.total_calories += this.stuffing_ary[stuffing].calories;
        }
        for(let topping in this.topping_ary){
            this.total_calories += this.topping_ary[topping].calories;
        }	
        return this.total_calories + this.calories;
    }

    render() {
        return `
            <h2>Ваш заказ:</h2>
            <p>${this.getSize()} гамбургер. 
            <br>Добавки: ${this.getStuffing().join(', ')}. 
            <br>Топпинги: ${this.getToppings().join(', ')}
            <br>Калорийность: ${this.calculateCalories()} кал.
            <br>Итого: ${this.calculatePrice()} рублей.</p>
        `
    }
}

const toArray = (nodes) => {
    let array = [];
    Array.from(nodes).forEach(function(elem) {
        array.push(JSON.parse(elem.value));
      });
    return array;
} 

const toOrder = () => {
    let totalBlock = document.querySelector('div.total');      
    let sizeHumburger = JSON.parse(document.querySelector('input[name=hamburgerSize]:checked').value);
    let stuffingHumburger = document.querySelectorAll('input[name=hamburgerStuffing]:checked');
    let toppingHumburger = document.querySelectorAll('input[name=hamburgerTopping]:checked');
    let stuffing_arry = toArray(stuffingHumburger);
    let topping_arry = toArray(toppingHumburger);
    let myHumburger = new Hamburger(sizeHumburger, stuffing_arry, topping_arry);
    
    totalBlock.innerHTML = '';
    totalBlock.insertAdjacentHTML('beforeend', myHumburger.render());
}



window.onload = function(){
    console.log("dsdsd");
    document.querySelector('input[type=submit]').addEventListener("click", toOrder);
}

