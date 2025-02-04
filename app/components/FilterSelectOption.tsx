import React, { Dispatch, SetStateAction } from "react";
export function FilterSelectOption({
    data, title,
    setState
}: {
    data: any, title: any, setState: Dispatch<SetStateAction<string>>
}) {
    return <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text text-red-500 font-semibold">{title}</span>
        </div>
        <select className="select select-bordered" onChange={(e) => setState(e.currentTarget.value)}>
            {data.map((el: any, index: any) => <option key={index}>{el}</option>)}
        </select>

    </label>;
}
