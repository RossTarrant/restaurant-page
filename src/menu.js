const menuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu')
    menu.innerHTML = `
    <h1>Menu</h1>
    <div class="cocktail-grid">
        <div class="card">
            <h2>Singapore Sling</h4>
            <p>Iconic, bright and fruity, ideal for when you want a tropical twist and some escapism.</p>
            <h3>£7.95</h3>
        </div>
        <div class="card">
            <h2>Negroni</h4>
            <p>Designed as an aperitif, the Classic Negroni is the very definition of balance.</p>
            <h3>£8.95</h3>
        </div>
        <div class="card">
            <h2>Caipirinha</h4>
            <p>A rustic classic made using lime, Cachaça and sugar.</p>
            <h3>£5.95</h3>
        </div>
        <div class="card">
            <h2>Bees Knees</h4>
            <p>The Bee’s Knees, a sweet, citrus cocktail, lives up to its moniker, and will no doubt leave you buzzing too.</p>
            <h3>£9.95</h3>
        </div>
        <div class="card">
            <h2>Basil Smash</h4>
            <p>Its alluring neon-green tint might draw you in, but it's the fresh aromatic kick that will have you coming back time and again.</p>
            <h3>£6.95</h3>
        </div>
        <div class="card">
            <h2>Martinez</h4>
            <p>The Martinez is sophisticated, just sweet enough and supremely indulgent.</p>
            <h3>£10.95</h3>
        </div>
        <div class="card">
            <h2>Bramble</h4>
            <p>Perfectly poised between fruity, sour, sweet and boozy - expect an adventure in a glass.</p>
            <h3>£7.95</h3>
        </div>
        <div class="card">
            <h2>El Diablo</h4>
            <p>With fresh lime and warming ginger, El Diabolo is an iconic Tequila cocktail.</p>
            <h3>£7.95</h3>
        </div>
        <div class="card">
            <h2>Bloody Mary</h4>
            <p>An essential drink to be able to make on a whim and the perfect Brunch-time cocktail.</p>
            <h3>£8.95</h3>
        </div>
        <div class="card">
            <h2>Daquiri</h4>
            <p>A delicate blend of rum with the freshness of sugar and lime juice.</p>
            <h3>£9.95</h3>
        </div>
        <div class="card">
            <h2>Dark & Stormy</h4>
            <p>A delicious cocktail that maximises the refreshing combination of rum, ginger and lime.</p>
            <h3>£8.95</h3>
        </div>
        <div class="card">
            <h2>English Garden</h4>
            <p>The English Garden is a wonderful example of the English countryside, with elderflower liqueur and fresh pressed apple juice evoking images of endless orchards and languid summer days.</p>
            <h3>£10.95</h3>
        </div>
        
    </div>
    `
    return menu;
}
export default menuPage;