const Buyer = class {
    constructor(name, age, budget) {
        this.name = name;
        this.age = age;
        this.budget = budget;
    }

    makeDeal(seller) {
        let moneyLeft = this.budget = this.budget - seller.offer;
        seller.offer = seller.offer + this.budget;
        return moneyLeft;

    }
}

const Seller = class {
    constructor(name, age, offer) {
        this.name = name,
        this.age = age,
        this.offer = offer;
    }

    makeOffer() {
        return this.offer;
    }

}

const buyer = new Buyer('Alper', 28, 10000);
const seller = new Seller('Mutlu', 31, 5000);

console.log(buyer);
console.log(seller);

buyer.makeDeal(seller);
console.log("alicinin kalan parasi:", buyer.budget);
console.log("saticinin yeni kasasi:", seller.offer);