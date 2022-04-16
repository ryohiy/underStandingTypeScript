class Department {
    constructor(private readonly id: string, public name: string) {

        //クラスがnewされた時に最初に実行される関数
        //constructorの引数はnewした時に渡す
    }

    describe(this: Department) {
        console.log(`Department (${this.id}:${this.name})`);
    }
}

class ITDepartment extends Department {
    admins: string[] = [];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

const accounting = new Department('d1', 'Accounting');
console.log(accounting);

const accountingIT = new ITDepartment('d1', ["max"]);

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }

    set mostRecentReport(val: string) {
        if (!val) {
            throw new Error('正しい値を設定してください。')
        }
        this.addReport(val);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];

    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
}


accounting.describe();

// const accountingCopy = {name:'DUMMY' , describe:accounting.describe}
// accountingCopy.describe();

