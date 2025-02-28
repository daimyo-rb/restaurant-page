export function buildContact() {
    const contentContainer = document.getElementById('content');
    const content = `
    <div class="inner-content">
        <div class="page-name-container">
            <h1>Contact Us</h1>
        </div>
        <div class="card-group">
            <div class="card contact-card">
                <h3>Mama Bear</h3>
                <div class="contact-div">
                    <p>Chef</p>
                    <p>555-555-5554</p>
                    <p>totallyRealEmail@notFake.com</p>
                </div>
            </div>
            <div class="card contact-card">
                <h3>Papa Bear</h3>
                <div class="contact-div">
                    <p>Manager</p>
                    <p>555-555-5555</p>
                    <p>perfectlyRealEmail@notFake.com</p>
                </div>
            </div>
            <div class="card contact-card">
                <h3>Baby Bear</h3>
                <div class="contact-div">
                    <p>Waiter</p>
                    <p>555-555-5556</p>
                    <p>totallyRealEmail@notFake.com</p>
                </div>
            </div>
        </div>
    </div>
    `
    contentContainer.innerHTML = content;
}
