import React from "react";
export function RecipeLabels({ label }: { label: string }) {
    return <p className={'border-2 border-red-500  rounded-full py-1 px-2 font-bold text-slate-700'}>{label}</p>;
}
