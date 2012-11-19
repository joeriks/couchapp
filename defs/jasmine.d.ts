declare module describe {
    export function (testDescription: string, f: Function): void;
}

declare module it {
    export function (testDescription: string, f: Function): void;
}

declare module runs {
    export function (f: Function): void;
}

declare module waits {
    export function (milliseconds: number): void;
}
declare module waitsFor {

    export function (f: Function, message?: string, timeout?: number): void;
}

declare module expect {
    export function (actual: any): expect.InottoBe;
    interface Ifnv {
        (value: any): void;
    }
    interface Ifn {
        (): void;
    }
    interface ItoBe {
        toBe: Ifnv;
        toEqual: Ifnv;
        toMatch: Ifnv;
        toBeNull: Ifnv;
        toBeTruthy: Ifnv;
        toContain: Ifnv;
        toBeLessThan: Ifnv;
        toBeGreaterThan: Ifnv;
        toBeCloseTo: Ifnv;
        toHaveBeenCalled: Ifn;
        toThrow: Ifn;
        toBeDefined: Ifn;
        toBeUndefined: Ifn;
    }
    interface InottoBe extends ItoBe {
        not: ItoBe;
    }
}
