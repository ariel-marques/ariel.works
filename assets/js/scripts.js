function toggleLanguage() {
    const contentPT = document.getElementById("content-pt");
    const contentEN = document.getElementById("content-en");
    const flagPT = document.getElementById("flag-pt");
    const flagEN = document.getElementById("flag-en");

    if (contentPT.style.display === "none") {
        // Exibe conteúdo em português e bandeira brasileira
        contentPT.style.display = "block";
        contentEN.style.display = "none";
        // flagPT.style.display = "block";
        // flagEN.style.display = "block";
    } else {
        // Exibe conteúdo em inglês e bandeira dos EUA
        contentPT.style.display = "none";
        contentEN.style.display = "block";
        // flagPT.style.display = "block";
        // flagEN.style.display = "none";
    }
}