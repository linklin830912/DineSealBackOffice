import { LogoPositionEnum } from "../enum/LogoPositionEnum"

export type PhotoSettings = {
    logo: {
        position?: {
            vertical: LogoPositionEnum,
            horizontal: LogoPositionEnum
        },
        size: {
            width: number,
            height: number
        }
    },
    canEdit: boolean
}