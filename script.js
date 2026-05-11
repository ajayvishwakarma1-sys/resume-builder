const form = document.getElementById('resume-form');
const resumePreview = document.getElementById('resume-preview');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const template = document.getElementById('template').value;

    fetch(`resume-templates/${template}.html`)
        .then((response) => response.text())
        .then((templateHtml) => {
            const resumeHtml = templateHtml
                .replace('{{name}}', name)
                .replace('{{email}}', email)
                .replace('{{phone}}', phone)
                .replace('{{experience}}', experience)
                .replace('{{education}}', education)
                .replace('{{skills}}', skills);

            resumePreview.innerHTML = resumeHtml;
        })
        .catch((error) => console.error(error));
});
