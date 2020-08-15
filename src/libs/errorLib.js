import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
    if (isLocal) {
        return;
    }

    Sentry.init({
        dsn: "https://80dcc257200f4a0e8cf6e9c0f06ad663@o434500.ingest.sentry.io/5391620",
    });
}

export function logError(error, errorInfo = null) {
    if (isLocal) {
        return;
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url;
    }

    logError(error, errorInfo);

    alert(message);
}
