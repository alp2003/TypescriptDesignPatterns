import readline from 'readline';

export class ProfileConfiguration {
    protected _rl: readline.ReadLine;
    constructor() {
        this._rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    async start(): Promise<any> {
        await this.configureAccountSecurity();
        await this.configureEmailIntegration();
        await this.configureSupportMethod();
        await this.configurePaymentsMethod();
        this._rl.close();
    }

    async configureAccountSecurity(): Promise<any> {
        throw new Error('Method not implemented');
    }

    async configureEmailIntegration(): Promise<any> {
        throw new Error('Method not implemented');
    }

    async configureSupportMethod(): Promise<any> {
        throw new Error('Method not implemented');
    }

    async configurePaymentsMethod(): Promise<any> {
        throw new Error('Method not implemented');
    }
}
