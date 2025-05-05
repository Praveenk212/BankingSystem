export class transaction {
    //Data Field Declaration

    userName: any;
    amtTransfer:any;
    balance:any;
    date:any;
    amtReceived:any;
    senderAccountNumber:any;
    receiverAccountNumber:any;


    // staticRequestId:any;
    // requestId:any;
    //Constructor using all field

    constructor( username, amtTransfer,  balance,  date,  amtReceived,
        receiverAccountNumber, senderAccountNumber) 
    {
        this.userName = username;
        this.amtReceived=amtReceived;
        this.balance=balance;
        this.date=date;
        this.senderAccountNumber=senderAccountNumber;
        this.receiverAccountNumber=receiverAccountNumber;
        this.amtTransfer=amtTransfer;
    }
}