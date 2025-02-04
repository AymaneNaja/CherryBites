import React from "react";
export function RangeSlider({ min, max, value, setValue, title }: { min: number | string, max: number | string, value: number | string, setValue?: any, title: string }) {

    return <div className="text-sm">
        <h1 className={'my-2 font-semibold text-red-500'}>{title}</h1>
        <input title={'slider'} type="range" min={min} max={max} value={value} className={"range range-sm range-error"} onChange={(e) => setValue(e.target.value)} />
        <span className="text-slate-500 flex justify-between items-center font-semibold w mx-1"><label className="">{value}</label>
            <label>{max}</label></span>

    </div>;
}
