export function buildMain() {
    const contentContainer = document.getElementById('content');
    const content = `
    <div class="inner-content">
        <div class="page-name-container">
            <h1>Pancake Palace</h1>
        </div>
        <div class="card-group">
            <div class="card about-us">
                <p>Pancake palace has the world's best pancakes. We serve 'em tall. We serve 'em thick. We got syrup. We got butter. We got fruit, chocolate chips, whipped cream, I could go on all day. People travel across the country to taste our pancakes. Get ready to find out why.</p>
                <p>Captain Flapjack</p>
            </div>
            <div class="card hours">
                <h2>Hours</h2>
                <p>Sunday: 8am - 8pm</p>
                <p>Monday: 6am - 6pm</p>
                <p>Tuesday: 6am - 6pm</p>
                <p>Wednesday: 6am - 6pm</p>
                <p>Thursday: 6am - 10pm</p>
                <p>Friday: 6am - 10pm</p>
                <p>Saturday: 8am - 10pm</p>
            </div>
            <div class="card location">
                <h2>Location</h2>
                <p>515 Seaside Shore, Whaletail, California</p>
            </div>
        </div>
    </div>
    `
    contentContainer.innerHTML = content;
}
