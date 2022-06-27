export enum ModeValues {
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
  userRead: boolean
  userWrite: boolean
  userExecute: boolean

  groupRead: boolean
  groupWrite: boolean
  groupExecute: boolean

  otherRead: boolean
  otherWrite: boolean
  otherExecute: boolean
}

export class Mode implements ModeInterface {
  public static fromNumber (input: number) {
    return new this({
      userRead: !!(input & ModeValues.UserRead),
      userWrite: !!(input & ModeValues.UserWrite),
      userExecute: !!(input & ModeValues.UserExecute),

      groupRead: !!(input & ModeValues.GroupRead),
      groupWrite: !!(input & ModeValues.GroupWrite),
      groupExecute: !!(input & ModeValues.GroupExecute),

      otherRead: !!(input & ModeValues.OtherRead),
      otherWrite: !!(input & ModeValues.OtherWrite),
      otherExecute: !!(input & ModeValues.OtherExecute)
    })
  }

  public constructor (input: ModeInterface) {
    this.userRead = input.userRead
    this.userWrite = input.userWrite
    this.userExecute = input.userExecute

    this.groupRead = input.groupRead
    this.groupWrite = input.groupWrite
    this.groupExecute = input.groupExecute

    this.otherRead = input.otherRead
    this.otherWrite = input.otherWrite
    this.otherExecute = input.otherExecute
  }

  public userRead: boolean
  public userWrite: boolean
  public userExecute: boolean

  public groupRead: boolean
  public groupWrite: boolean
  public groupExecute: boolean

  public otherRead: boolean
  public otherWrite: boolean
  public otherExecute: boolean

  public toNumber () {
    let output = 0

    if (this.userRead) { output |= ModeValues.UserRead }
    if (this.userWrite) { output |= ModeValues.UserWrite }
    if (this.userExecute) { output |= ModeValues.UserExecute }

    if (this.groupRead) { output |= ModeValues.GroupRead }
    if (this.groupWrite) { output |= ModeValues.GroupWrite }
    if (this.groupExecute) { output |= ModeValues.GroupExecute }

    if (this.otherRead) { output |= ModeValues.OtherRead }
    if (this.otherWrite) { output |= ModeValues.OtherWrite }
    if (this.otherExecute) { output |= ModeValues.OtherExecute }

    return output
  }
}
