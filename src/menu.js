export function buildMenu() {
    const contentContainer = document.getElementById('content');
    const content = `
    <div class="inner-content">
        <div class="page-name-container">
            <h1>Menu</h1>
        </div>
        <div class="card-group beverages">
            <div class="card-title menu-category">
                <h2>Beverages</h2>
            </div>
            <div class="card menu-item-container">
                <h3>Honey Tea</h3>
                <p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>
                <p>$2</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>Honey Tea</h3>
                <p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>
                <p>$2</p>
                <div class="menu-item-image-container"></div>
            </div>
        </div> 
        <div class="card-group sides">
            <div class="card-title menu-category">
                <h2>Sides</h2>
            </div>
            <div class="card menu-item-container">
                <h3>Toast and Jam</h3>
                <p>A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</p>
                <p>$1</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>Fresh Fruit</h3>
                <p>A small bowl of fresh fruit, whatever we find at the market for the day.</p>
                <p>$3</p>
                <div class="menu-item-image-container"></div>
            </div>
        </div>
        <div class="card-group main-dishes">
            <div class="card-title menu-category">
                <h2>Main Dishes</h2>
            </div>
            <div class="card menu-item-container">
                <h3>Pancakes</h3>
                <p>A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.</p>
                <p>$4</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>French Toast</h3>
                <p>Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.</p>
                <p>$5</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>Beary Veggie Sandwich</h3>
                <p>Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.</p>
                <p>$8</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>BLT</h3>
                <p>Interested in the Beary Veggie Sandwich but also love bacon? Say no more.</p>
                <p>$6</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>Bagel and Lox</h3>
                <p>Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</p>
                <p>$8</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>Honeycomb</h3>
                <p>Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.</p>
                <p>$6</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>Beray Bowl</h3>
                <p>Get a big ole bowl of our berries! Side of honey is $1 extra.</p>
                <p>$7</p>
                <div class="menu-item-image-container"></div>
            </div>
            <div class="card menu-item-container">
                <h3>The Beary Best Porridge</h3>
                <p>Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.</p>
                <p>$5</p>
                <div class="menu-item-image-container"></div>
            </div>
        </div>
    </div>
    `;
    contentContainer.innerHTML = content;
}