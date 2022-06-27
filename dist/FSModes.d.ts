export declare enum ModeValues {
    UserRead = 256,
    UserWrite = 128,
    UserExecute = 64,
    GroupRead = 64,
    GroupWrite = 16,
    GroupExecute = 8,
    OtherRead = 4,
    OtherWrite = 2,
    OtherExecute = 1
}
export interface ModeInterface {
    userRead: boolean;
    userWrite: boolean;
    userExecute: boolean;
    groupRead: boolean;
    groupWrite: boolean;
    groupExecute: boolean;
    otherRead: boolean;
    otherWrite: boolean;
    otherExecute: boolean;
}
export declare class Mode implements ModeInterface {
    static fromNumber(input: number): Mode;
    constructor(input: ModeInterface);
    userRead: boolean;
    userWrite: boolean;
    userExecute: boolean;
    groupRead: boolean;
    groupWrite: boolean;
    groupExecute: boolean;
    otherRead: boolean;
    otherWrite: boolean;
    otherExecute: boolean;
    toNumber(): number;
}
