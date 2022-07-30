import { ProfileConfiguration } from './profile-configuration';

export class BasicPlanProfileConfiguration extends ProfileConfiguration {
    async configureAccountSecurity(): Promise<any> {
        console.log('Click here to enter a security question');
    }

    async configureEmailIntegration(): Promise<any> {
        console.log('Click here to setup email server');
    }

    async configureSupportMethod(): Promise<any> {
        console.log(`Click here to create a 'Contact us' page`);
    }

    async configurePaymentsMethod(): Promise<any> {
        console.log(`Click here to setup Paypal`);
    }
}
