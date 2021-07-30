import { AbstractControl } from "@angular/forms";

export default function EdurekaCompare(control1: string, control2: string){
    return function(group: AbstractControl){
        const control1Object = group.get(control1);
        const control2Object = group.get(control2);

        if(control1Object?.value != control1Object?.value){
            return { edurekaCompare: {control1: control1Object?.value, control2: control2Object?.value}}
        }
        return null
    }
}