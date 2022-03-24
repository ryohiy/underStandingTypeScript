class Department{
    constructor(private readonly id:string ,public name:string) {

        //クラスがnewされた時に最初に実行される関数
        //constructorの引数はnewした時に渡す
    }

    describe(this:Department){
        console.log(`Department (${this.id}:${this.name})`);
    }
}

const accounting = new Department('d1','Accounting');
console.log(accounting);

accounting.describe();

// const accountingCopy = {name:'DUMMY' , describe:accounting.describe}
// accountingCopy.describe();