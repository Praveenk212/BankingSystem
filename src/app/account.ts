export class account {
    //Data Field Declaration

    userName: any;
    accNo: any;
    balance:any;
    serviceIdForChecqueBook: any;
    serviceIdForCreditCard:any;
    checqueBookId:any;
    creditCardId:any;

    monthlyIncome="0";


    // staticRequestId:any;
    // requestId:any;
    //Constructor using all field

    constructor(userName) 
    {
        this.userName = userName;
        this.accNo=(Math.floor(Math.random()*1000000000000)+1);
        this.balance="0";
        this.serviceIdForChecqueBook="0";
        this.serviceIdForCreditCard="0";
        this.checqueBookId="0";
        this.creditCardId="0";
        this.monthlyIncome="0";
    }
}