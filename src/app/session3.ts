
export interface Drivable {

    start();
    getprice();
    getposition();

}

export class car implements Drivable {


    name:string;
    price:number;
    available:string;
    topspeed:number;

    constructor(name:string,price:number,available:string,topspeed:number)
    {
        this.available=available;
        this.topspeed=topspeed;
        this.name=name;
        this.price=price;
    }

    start():string {
     
     return `can go up to the top speed of "${this.topspeed}"`

    }
    
    getprice():string {

        return `the price of the car is ${this.price}`;
    }
    getposition():string {

        return `Your required model is ${this.available}`
    }

}