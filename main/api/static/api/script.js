const apiUrl = 'http://localhost:8000/api/items/'



function fetchItems() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const itemList = document.getElementById('item-list')
            itemList.innerHTML = ''
            data.forEach(item => {
                const li = document.createElement('li')
                li.innerText = `${item.name}: ${item.description}`
                itemList.appendChild(li)
            });
        });
}


function addItem() {
    const name = document.getElementById('name').value
    const description = document.getElementById('description').value

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
    })
    .then(response => response.json())
    .then(() => {
        fetchItems();
        document.getElementById('name').value = ''
        document.getElementById('description').value = ''
    });
}

fetchItems();
