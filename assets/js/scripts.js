function toggleLanguage() {
    const checkbox = document.getElementById("language-toggle-checkbox");
    const slider = document.getElementById("language-slider");

    // Remove a classe, se existir, para reiniciar a transição
    slider.classList.remove("black-and-white");

    // Adiciona a classe para fixar em preto e branco após 0.8s
    setTimeout(() => {
        slider.classList.add("black-and-white");
    }, 1000); // 0.8s em milissegundos

    // Exibe conteúdo de acordo com a seleção
    const contentPT = document.getElementById("content-pt");
    const contentEN = document.getElementById("content-en");

    if (checkbox.checked) {
        contentPT.style.display = "none";
        contentEN.style.display = "block";
    } else {
        contentPT.style.display = "block";
        contentEN.style.display = "none";
    }
}
function toggleFullscreenMenu() {
    const menu = document.getElementById('fullscreenMenu');
    const toggleButton = document.querySelector('.menu-toggle');

    menu.classList.toggle('active');
    toggleButton.classList.toggle('active');
}
