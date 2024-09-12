
    function BackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    function SquareColors(color) {
        document.querySelectorAll('.square').forEach(square => {
            square.style.backgroundColor = color;
        });
    }

    document.querySelectorAll('.background-colors .color').forEach(colorElement => {
        colorElement.addEventListener('click', () => {
            const color = colorElement.dataset.color;
            BackgroundColor(color);
        });
    });

    document.querySelectorAll('.square-colors .color').forEach(colorElement => {
        colorElement.addEventListener('click', () => {
            const color = colorElement.dataset.color;
            SquareColors(color);
        });
    });