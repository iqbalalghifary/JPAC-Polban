import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { OperatorUseCases } from './operator.use-case';
import { IDataServices, User } from 'src/core';
import * as bcrypt from 'bcrypt';

@Injectable()
export class OperatorSeed {
    constructor(
        private dataServices: IDataServices,
        private readonly operatorUseCase: OperatorUseCases,
        ) { }

    @Command({ command: 'create:operator', describe: 'create a initial operator' })
    async create() {
        const operator = await this.operatorUseCase.registerOperator({
            name: "admin",
            gender: "male",
            position: "Head"
        })

        const newUser = new User();
        newUser.username = "admin";
        newUser.password = await bcrypt.hash("admin", 10)
        newUser.userRole = 'Operator';
        newUser.referenceAttributeId = operator._id;

        await this.dataServices.users.create(newUser);

    }

}