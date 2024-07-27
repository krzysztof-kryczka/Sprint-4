# Sprint 4 - KODUJĄCE KOKOSY

![App look](./assets/cover.png)

## _Aplikacja do zarządzania listą zadań_

Pozwala zarządzać listą zadań, umożliwia dodawanie, edytowanie i usuwanie zadań.

Wykorzystane technologie: JavaScript

DEMO: https://krzysztof-kryczka.github.io/Sprint-4/

## Dodawanie Zadań:

Użytkownik wpisuje nazwę zadania w pole tekstowe i dodaje je do listy, klikając przycisk `Dodaj zadanie.`

Jeśli pole tekstowe jest puste, aplikacja wyświetla alert: `Nazwa zadania nie może być pusta.`

Pole tekstowe jest czyszczone po każdym dodaniu zadania.

## Edytowanie Zadań:

Kliknięcie przycisku `Edytuj` obok zadania zamienia nazwę zadania na pole tekstowe, wraz z istniejącą nazwą zadania i umożliwia modyfikację.

Przycisk `Edytuj` zmienia się na `Zatwierdź zmiany`, który służy do zapisania zmienionej nazwy.

Jeśli pole tekstowe jest puste, edycja nie jest zatwierdzona, a użytkownik widzi alert: `Nazwa zadania nie może być pusta.`

## Usuwanie Zadań:

Kliknięcie przycisku `Usuń` obok zadania natychmiastowo usuwa zadanie z listy.

**Uwaga:**

Do wykonania zadania, przydana może okazać się metoda `prepend()` lub `insertBefore()` - odszukaj informacji do czego służy i jeśli wystąpi taka konieczność, użyj jej.

### Directory Layout

```
├── /assets/             # Images folder
├── /css/                # CSS folder
│   └── style.css        # plik ze stylami css
├── /js/                 # JavaScript folder
│   └── task.js          # plik z kodem źródłowym JS
├── .gitignore           # pliki ignorowane przez git
├── .prettierrc.json     # plik konfiguracyjny Prettier
│── index.html           # uruchamia aplikację
└── README.md            # ten plik
```
