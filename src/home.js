const homePage = () => {
    const home = document.createElement('div');
    home.classList.add('home')
    home.innerHTML = `
    <h1>Welcome to Ember!</h1>
    <div class="home-content">
        <p><em>Ember is a luxurious cocktail bar.</em></p>
        <p><em>We cater to those who enjoy the finer things in life.</em></p>
        <p><em>We aim to provide you with a world class experience.</em></p>
        <img src="bar.jpg" class="home-img">
        <div class="opening">
        <table>
            <tr>
                <td>Monday</td>
                <td>........</td>
                <td>Closed</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>........</td>
                <td>Closed</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>........</td>
                <td>12pm-11pm</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>........</td>
                <td>12pm-11pm</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>........</td>
                <td>12pm-2am</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>........</td>
                <td>12pm-2am</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>........</td>
                <td>12pm-11pm</td>
            </tr>
        </table>
    </div>
    </div>
    `
    return home;
}
export default homePage;