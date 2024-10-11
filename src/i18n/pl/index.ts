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
  userTable: {
    title: 'Lista użytkowników',
    noData: 'Brak użytkowników',
    noResults: 'Nie znaleziono wyników',
    rowsPerPageLabel: 'Liczba rekordów na stronie:',
    columns: {
      id: 'ID',
      name: 'Imię i nazwisko',
      email: 'Email',
      gender: 'Płeć',
      status: 'Status',
      actions: 'Akcje',
    },
    search: {
      input: {
        label: 'Szukaj użytkownika po ID',
      },
      button: {
        label: 'Szukaj',
      },
    },
    actions: {
      edit: 'Edytuj',
    },
    api: {
      updateUser: {
        success: 'Zaktualizowano użytkownika',
      },
    },
    modal: {
      title: 'Edytuj użytkownika',
      gender: {
        male: 'Mężczyzna',
        female: 'Kobieta',
      },
      status: {
        active: 'Aktywny',
        inactive: 'Nieaktywny',
      },
      actions: {
        save: 'Zapisz',
        cancel: 'Anuluj',
      },
    },
  },
};
