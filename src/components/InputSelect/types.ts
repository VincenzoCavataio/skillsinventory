import { Dispatch, SetStateAction } from "react"
import { CompiledFields, ResponseElementObjectData } from "../../pages/DashboardPage/types"

export type InputSelectType = {
    selectedInput: CompiledFields,
    setSelectedInput: Dispatch<SetStateAction<Record<string, string>>>,
    data: { final_object: ResponseElementObjectData[] },
    label: string,
    objKey: string,
}
