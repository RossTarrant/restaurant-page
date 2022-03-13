const contactPage = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact')
    contact.innerHTML = `
    <h1>Contact</h1>
    <div class="contact-page">
        <form>
            <h2>Fill out the form and get in touch!</h2>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Phone</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    `
    return contact;
}
export default contactPage;