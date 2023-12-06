import { AbstractControl } from "@angular/forms";

export function confirmAdressValidator(controls : AbstractControl)
{
  const rue : string = controls.value.rue;
  const num : string = controls.value.num;
  const cp : number = controls.value.cp;
  const ville : string = controls.value.ville;

  if(rue && num && cp && ville) {
    return null
  } else if (!rue) {
    return { rue : 'Merci d\'indiquer votre rue'}
  } else if (!num) {
    return { num : 'Merci d\'indiquer votre numéro d\'habitation'}
  } else if (!cp) {
    return { cp : 'Merci d\'indiquer votre code postal'}
  } else if (!ville) {
    return { ville : 'Merci d\'indiquer votre ville'}
  } else {
    return { adresse : 'Something went wrong'};
  }
}
