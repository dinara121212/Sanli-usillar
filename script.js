// script.js

const formulas = {
    formula1: "Iteratsiya usuli: x_{n+1} = g(x_n)",
    formula2: "Zeydel usuli: x_{n+1} = (b - c*y_n)/a, y_{n+1} = (e - f*x_{n+1})/d",
    formula3: "Nyuton usuli: x_{n+1} = x_n - f(x_n)/f'(x_n)",
    formula4: "Xordalar usuli: x_{n+1} = x_n - f(x_n)*(x_n - x_{n-1})/(f(x_n) - f(x_{n-1}))",
    formula5: "Bolcano-Koshi usuli: y_{n+1} = y_n + h*f(x_n + h/2, y_n + (h/2)*f(x_n, y_n))",
    formula6: "Lagranj interpolatsiyaviy formulasi: L(x) = Σ (y_i * Π (x - x_j)/(x_i - x_j))",
    formula7: "Trapetsiya usuli: ∫_a^b f(x) dx ≈ (h/2) * [f(a) + 2Σf(x_i) + f(b)]",
    formula8: "Simpson usuli: ∫_a^b f(x) dx ≈ (h/3) * [f(x_0) + 4Σf(x_odd) + 2Σf(x_even) + f(x_n)]",
    formula9: "Galerkin usuli: ∫_Ω R(u) * v_i dx = 0, i = 1,...,n",
    formula10: "Eyler usuli: y_{n+1} = y_n + h*f(x_n, y_n)"
};

const buttons = document.querySelectorAll(".formulaBtn");
const formulaText = document.getElementById("formulaText");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const formulaKey = button.getAttribute("data-formula");
        formulaText.textContent = formulas[formulaKey];
    });
});
