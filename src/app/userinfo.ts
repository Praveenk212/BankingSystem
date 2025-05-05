export class userinfo {
	//Data Field Declaration

	userName: any;
	passWord: any;
	custName: any;
	age: any;
	gender: any;
	emailId: any;
	address: any;
	aadharNo: any;
	phoneNo: any;

	// staticRequestId:any;
	// requestId:any;
	//Constructor using all field

	constructor(userName, passWord, custName, age, gender,emailId, address, aadharNo, phoneNo) {
		this.userName = userName;
		this.passWord = passWord;
		this.custName = custName;
		this.age = age;
		this.gender = gender;
		this.emailId = emailId;
		this.address = address;
		this.aadharNo = aadharNo;
		this.phoneNo = phoneNo;
	}
}