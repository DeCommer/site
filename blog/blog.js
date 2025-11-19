function copyCode(button) {
    const codeBlock = button.nextElementSibling.querySelector('code');
    const codeText = codeBlock.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => button.textContent = 'Copy Code', 1000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
    });
}