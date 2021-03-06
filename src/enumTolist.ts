import { isEmpty, isNum } from "./type";

export function enumToList<K = number, V = string>(params: any): [K, V][] {
    if (isEmpty(params)) return [];
    const list: [K, V][] = [];
    for (const key in params) {
        if (isNum(params[key])) list.push([params[key], key as any]);
    }
    return list;
}

export function enumToOptions(params: any = {}) {
    return Object.entries(params).reduce((a: { label: string, value: any }[], b) => {
        return a.concat([{ label: b[0], value: b[1] }]);
    }, [])
}