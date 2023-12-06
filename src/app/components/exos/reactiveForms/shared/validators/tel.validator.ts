import { AbstractControl } from "@angular/forms";

export function telValidator(control : AbstractControl)
{
  let value : string = control.value

  if(value.length < 10)
    return { tel : "Votre numéro de téléphone doit avoir 10 caractères"}

  if(value.length === 10)
    return null
  else
    return { tel : "Ceci n'est pas un numéro de téléphone valide"}

}
