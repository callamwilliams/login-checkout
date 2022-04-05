/* eslint-disable */

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    __REACT_DEVTOOLS_GLOBAL_HOOK__: any;
}

declare interface NodeModule {
    hot?: { accept: (path: string, callback: () => void) => void };
}

declare interface System {
    import<T = any>(module: string): Promise<T>;
}

declare var System: System;

// declare const process: any;
// declare const require: any;

/* eslint-enable */
