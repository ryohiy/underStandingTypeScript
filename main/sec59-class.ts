class Department{
    name:string;
    constructor(n:string) {
        this.name = n;
        //クラスがnewされた時に最初に実行される関数
        //constructorの引数はnewした時に渡す
    }

    describe(this:Department){
        console.log('Department:' + this.name);
    }
}

const accounting = new Department('Accounting');
console.log(accounting);

accounting.describe();

const accountingCopy = {name:'DUMMY' , describe:accounting.describe}
accountingCopy.describe();