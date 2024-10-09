export default {
  header: {
    title: 'Contelizer: Zadania rekrutacyjne',
    nav: {
      files: 'Zadanie 1 (pliki)',
      pesel: 'Zadanie 2 (pesel)',
      api: 'Zadanie 3 (api)',
    },
  },
  fileUploadForm: {
    label: 'Prześlij plik tekstowy',
    button: 'Przestaw losowo litery',
    notifications: {
      rejection: 'Formularz akceptuje tylko pliki tekstowe!',
      error: 'Nie udało się odczytać zawartości pliku.',
    },
  },
  peselValidator: {
    button: 'Waliduj PESEL',
    error: 'PESEL musi składać się z 11 cyfr!',
    result: {
      success: 'Pesel jest poprawny!',
      failure: 'Pesel jest niepoprawny!',
    },
  },
};
