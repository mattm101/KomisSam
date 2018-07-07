
#KOMIS SAM FRONT

##XAMPP

**1. Wywal wszystko z katalogu <ścieżka do xamppa>/htdocs**

**2. Umieść zawartość foleru src w <ścieżka do xamppa>/htdocks**

**3. Uruchom xampp-control -> wystartuj moduł Apache**

**4. W przeglądarce wpisz adres localhost/pojazdy**


##Co działa na developie?

** + Podstrona /pojazdy wyświetla listę pojazdów, dodanie nowego pojazdu, /pojazdy/detale wyśwetla detale pojazu, edycje pojazdu, usunięcie pojazdu, dodanie nowego pojazdu**
** - API nie jest podpięte, więc dodaj/edytuj/sprzedaj pojazd nie zmieni listy wyświetlanych pojazdów**


##Branche

Proponuję, żeby każdy utworzył sobie swojego brancha np. nazwanego imieniem i na niego wrzuciał swój kod.
Akutalna wersja kodu będzie na branchu /develop, jeżeli zaczynacie pracę nad nowym feature, to bierzcie kod z /develop na swojego brancha
Popychajcie swoje zmiany na brancha z waszym imieniem
Jeśli skończyliście jakieś feature to dajcie znać na messengerze
Będziemy robić code review i popychać zaakceptowane kody na brancha /develop
Na branchu /master będzie znajdować się wersja produkcyjna


## Zadania do zrobienia

** 1. WAŻNE Widok /raporty, gdy będzie wiadomo, co ma prezentować (pojawi się API)**
** 2. WAŻNE Dostosowanie pól pojazdu zgodnie z API (link na Trello)**
** 3. WAŻNE Dodanie walidacji pól np. za pomocą html**
** 4. Dodanie zachowania do pola "Szukaj"**
** 5. Implementacja zachowania filtrów wyszukiwania/dostosowanie pól filtrów, np. całkowicie po stronie klienta za pomocą js, ale to już zależy od struktury API**

Jeżeli macie swoje pomysły, chcecie z czymś poeksperymentować, to śmiało commitujcie na swojego brancha, jeżeli wyjdzie z tego coś fajnego to wrzucimy to na developa

=======
**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
>>>>>>> e7b83c9d3e35a16f496ead1bb843adad9f0c0504
