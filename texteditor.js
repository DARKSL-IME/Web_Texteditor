document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('colorPickerButton').addEventListener('click',colorPickeropen);
});





function clickBold() {
    document.execCommand('bold', true, null);
}


function clickUnderline() {
    document.execCommand('underline', true, null);
}


function clickItalic() {
    document.execCommand('italic', true, null);
}

function colorPickeropen() {
    const colorPicker = document.getElementById('fontColorPicker');
    colorPicker.click();
}

function changeFontColor() {
    const colorPicker = document.getElementById('fontColorPicker');
    const selectedColor = colorPicker.value;
    document.execCommand('foreColor', true, selectedColor);
}


function clickTextAlignment(align) {
    if (['left', 'center', 'right', 'justify'].includes(align)) {
        document.getElementById('editor').style.textAlign = align;
    } else {
        console.error('Invalid alignment value');
    }

}