let add = (cart, req) => {
    cart.contents.push (req.body);
    return {newCart: JSON.stringify (cart, null, 4)};
};
let change = (cart, req) => {
    let find = cart.contents.find (el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return {newCart: JSON.stringify (cart, null, 4)};
};
let remove = (cart, req) => {
    let find = cart.contents.find (el => el.id_product === +req.params.id);
    if (req.body.quantity == -1){
        find.quantity += req.body.quantity;
        console.log(find.quantity)
    } else {
        cart.contents.splice(cart.contents.indexOf(find), 1);
    }
    return {newCart: JSON.stringify (cart, null, 4)};
};
module.exports = {add, change, remove};