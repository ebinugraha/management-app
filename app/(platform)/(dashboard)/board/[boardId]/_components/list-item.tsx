import { ListWithCard } from "@/types"
import { ListHeader } from "./list-header"

export const ListItem = ({index,
    data} : {index: number, data: ListWithCard}) => {
    return (
        <li className="shrink-0 h-full w-[272px] select-none">
            <div className="w-full rounded-md bg-[#f1f2f4] shadow-sm pb-2">
                <ListHeader dataList={data}/>
            </div>
        </li>
    )
}