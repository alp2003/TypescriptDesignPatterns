import { ErrorHandler } from './error-handler';
import { ConsoleErrorDisplayStrategy } from './console-error-display-strategy';
import { FileErrorLoggingStrategy } from './file-error-logging-strategy';

export let errorHandler = new ErrorHandler(
    new ConsoleErrorDisplayStrategy(),
    new FileErrorLoggingStrategy()
);

try {
    let b: any = 2;
    b();
} catch (error: any) {
    errorHandler.handle(
        error,
        'Something went wrong',
        'Please try again later'
    );
}
