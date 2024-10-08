import { Notify } from 'quasar';

export function showError(message: string) {
  Notify.create({
    type: 'negative',
    message,
  });
}
