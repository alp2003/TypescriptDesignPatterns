import { ProfileConfiguration } from './profile-configuration';

export class PremiumPlanProfileConfiguration extends ProfileConfiguration {
    async configureAccountSecurity(): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            this._rl.question(
                'What security method would you like to use ?\n1. Security Question\n2. Two Factor Authentication\n',
                (answer) => {
                    if (parseInt(answer) === 1) {
                        console.log('Click here to enter a security question');
                    } else if (parseInt(answer) === 2) {
                        console.log(
                            'Click here to setup two factor authentication'
                        );

                        resolve();
                    }
                }
            );
        });
    }

    async configureEmailIntegration(): Promise<any> {
        console.log('Click here to setup MailChimp');
        return Promise.resolve();
    }

    async configureSupportMethod(): Promise<any> {
        console.log(`Click here to setup Intercom`);
        return Promise.resolve();
    }

    async configurePaymentsMethod(): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            this._rl.question(
                'Would you like to use ?\n1. Paypal\n2. Stripe\nas your payment method? ',
                (answer) => {
                    if (parseInt(answer) === 1) {
                        console.log('Click here to configure Paypal');
                    } else if (parseInt(answer) === 2) {
                        console.log('Click here to configure Stripe');
                    }

                    resolve();
                }
            );
        });
    }
}
