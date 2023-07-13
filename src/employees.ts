interface IEmployee {
  fName: string
  lName: string
  age: number
  cool?: boolean
  apps: {appName: string, production: boolean}
}

interface IManager extends IEmployee {
  salaryTier: number
}

let employee1: IEmployee = {
  fName: 'Jon',
  lName: 'Smith',
  age: 25,
  cool: true,
  apps: {
    appName: 'CF Akeneo',
    production: true,
  }, 
}

let manager1: IManager = {
  fName: 'Jon',
  lName: 'Smith',
  age: 25,
  cool: true,
  apps: {
    appName: 'CF Akeneo',
    production: true,
  }, 
  salaryTier: 2
}

const employees: IEmployee[] = [{
  fName: 'Jon',
  lName: 'Smith',
  age: 25,
  cool: true,
  apps: {
    appName: 'CF Akeneo',
    production: true,
  },},
  employee1
]