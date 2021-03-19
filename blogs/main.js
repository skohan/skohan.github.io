        // document.querySelector("#loading").style.display = "";
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@skohan')
            .then((res) => res.json())
            .then((data) => {
                // Fillter the array
                const res = data.items //This is an array with the content. No feed, no info about author etc..
                const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !

                function toText(node) {
                    let tag = document.createElement('div')
                    tag.innerHTML = node
                    node = tag.innerText
                    return node
                }

                function shortenText(text, startingPoint, maxLength) {
                    return text.length > maxLength ?
                        text.slice(startingPoint, maxLength) :
                        text
                }

                let output = '';
                posts.forEach((item) => {
                    output += `

                    <div class="col mb-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${item.thumbnail}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${shortenText(item.title, 0, 50) + '...'}</h5>
                        <p class="card-text">${'...' + shortenText(toText(item.content), 60, 300) + '...'}</p>
                        <p class="card-text">
                            <small class="text-muted">
                                On ${shortenText(item.pubDate, 0, 10)} by ${item.author}.
                            </small>
                        </p>
                        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Ream More...</a>
                    </div>
                </div>
            </div>

            `
                })
                document.querySelector('#posts').innerHTML = output

            })

        document.querySelector("#loading").style.display = "none";