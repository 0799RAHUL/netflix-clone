let left_btn = document.getElementsByClassName("bi-chevron-left")[0];
let right_btn = document.getElementsByClassName("bi-chevron-right")[0];
let cards = document.getElementsByClassName("cards")[0];
let content = document.getElementById('moviecontent');

let search = document.getElementsByClassName("search")[0];
let search_input = document.getElementById('search_input');











left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;

})

right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;

})

let json_url = "movie.json";




fetch(json_url).then(Res => Res.json()).then(data => {

    console.log(data);
    data.forEach(function (ele, i) {
        let { name, imdb, date, sposter, bposter, genre, url, link } = ele;
        let card = document.createElement('div');
        card.addEventListener('click', () => {
            content.innerHTML = `<div class="yt_links">
            <iframe width="400" height="250" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>              
        </div>
        <div class="info">
            <h1 id="title">${name}</h1>
        <p>When the national mint and a touring school group are held hostage by robbers, police believe that the
            thieves have no way out. Little do they know that the thieves have a bigger plan in store.</p>
        <div class="details">
            <h6> A Amazon Primes Video</h6>
            <h5 id="gen">${genre}</h5>
            <h4 id="date">${date}</h4>
            <h3 id="rate"><span>IMdb</span><i class="bi bi-star-fill"></i>${imdb}</h3>
        </div>
        <div class="btns">
            <a href="#" id="low_q">480p</a>
            <a href="#" id="med_q">720p</a>
            <a href="#" id="high_q">1080p</a>
        </div>
        </div>`
            var style = `.head::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
             background: url(${bposter})no-repeat center center/cover; 
            opacity: .6;
            z-index: -1;
        
        }`

            var styleSheet = document.createElement("style")
            styleSheet.innerText = style
            document.head.appendChild(styleSheet)

        })


        card.classList.add('card');
        // card.href = url;
        card.innerHTML =
            `<img src="${sposter}" class="poster" alt="${name}">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre},${date}</p>
                    <h3><span>imdb</span><i class="bi bi-cloud-arrow-down-fill"></i>${imdb}</h3>
                </div>
            </div>
            
        </div>`;

        cards.appendChild(card);



    });



    // search

    data.forEach((element) => {
        let { name, imdb, date, sposter, genre, url, link, bposter } = element
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML =
            `
                <img src="${sposter}" alt="">
                <div class="cont">
                    <h3>${name}</h3>
                    <p>${genre},${date} <span>IMdb</span><i class="bi bi-star-fill"></i>${imdb}</p>
                </div>`;

        search.appendChild(card);

        card.addEventListener('click', () => {


            content.innerHTML = `<div class="yt_links">
            <iframe width="400" height="250" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>              
        </div>
        <div class="info">
            <h1 id="title">${name}</h1>
        <p>When the national mint and a touring school group are held hostage by robbers, police believe that the
            thieves have no way out. Little do they know that the thieves have a bigger plan in store.</p>
        <div class="details">
            <h6> A Amazon Primes Video</h6>
            <h5 id="gen">${genre}</h5>
            <h4 id="date">${date}</h4>
            <h3 id="rate"><span>IMdb</span><i class="bi bi-star-fill"></i>${imdb}</h3>
        </div>
        <div class="btns">
            <a href="#" id="low_q">480p</a>
            <a href="#" id="med_q">720p</a>
            <a href="#" id="high_q">1080p</a>
        </div>
        </div>`
            var style = `.head::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
             background: url(${bposter})no-repeat center center/cover; 
            opacity: .6;
            z-index: -1;
        
        }`

            var styleSheet = document.createElement("style")
            styleSheet.innerText = style
            document.head.appendChild(styleSheet)



        })








    })

    // serach filter

    search_input.addEventListener("keyup", () => {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByClassName('card');

        for (i = 0; i < a.length; i++) {
            let b = a[i].getElementsByClassName('cont')[0];
            console.log(a.textContent)
            let text_value = b.textContent || b.innerText;

            if (text_value.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = 'flex';
                search.style.visibility = "visible";
                search.style.opacity = "1";

            }
            else {
                a[i].style.display = 'none'
            }

            if (search_input.value == 0) {
                search.style.visibility = "hidden";
                search.style.opacity = "0";

            }

        }

       

    })



    let series = document.getElementById('series')
    let movies = document.getElementById('movies')
    series.addEventListener('click', () => {
        cards.innerHTML = '';

        let series_array = data.filter((ele) => {
            return ele.type === 'series'



        })

        series_array.forEach(function (ele, i) {
            let { name, imdb, date, sposter, bposter, genre, url, link } = ele;
            let card = document.createElement('div');



            card.addEventListener('click', () => {


                content.innerHTML = `<div class="yt_links">
                <iframe width="400" height="250" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>              
            </div>
            <div class="info">
                <h1 id="title">${name}</h1>
            <p>When the national mint and a touring school group are held hostage by robbers, police believe that the
                thieves have no way out. Little do they know that the thieves have a bigger plan in store.</p>
            <div class="details">
                <h6> A Amazon Primes Video</h6>
                <h5 id="gen">${genre}</h5>
                <h4 id="date">${date}</h4>
                <h3 id="rate"><span>IMdb</span><i class="bi bi-star-fill"></i>${imdb}</h3>
            </div>
            <div class="btns">
                <a href="#" id="low_q">480p</a>
                <a href="#" id="med_q">720p</a>
                <a href="#" id="high_q">1080p</a>
            </div>
            </div>`
                var style = `.head::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                 background: url(${bposter})no-repeat center center/cover; 
                opacity: .6;
                z-index: -1;
            
            }`

                var styleSheet = document.createElement("style")
                styleSheet.innerText = style
                document.head.appendChild(styleSheet)



            })







            card.classList.add('card');

            card.innerHTML =
                `<img src="${sposter}" class="poster" alt="${name}">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre},${date}</p>
                        <h3><span>imdb</span><i class="bi bi-cloud-arrow-down-fill"></i>${imdb}</h3>
                    </div>
                </div>
                
            </div>`;

            cards.appendChild(card);


        });


    })

    movies.addEventListener('click', () => {
        cards.innerHTML = '';

        let movies_array = data.filter((ele) => {
            return ele.type === 'movie'



        })

        movies_array.forEach(function (ele, i) {
            let { name, imdb, date, sposter, bposter, genre, url, link } = ele;
            let card = document.createElement('div');


            card.addEventListener('click', () => {


                content.innerHTML = `<div class="yt_links">
                <iframe width="400" height="250" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>              
            </div>
            <div class="info">
                <h1 id="title">${name}</h1>
            <p>When the national mint and a touring school group are held hostage by robbers, police believe that the
                thieves have no way out. Little do they know that the thieves have a bigger plan in store.</p>
            <div class="details">
                <h6> A Amazon Primes Video</h6>
                <h5 id="gen">${genre}</h5>
                <h4 id="date">${date}</h4>
                <h3 id="rate"><span>IMdb</span><i class="bi bi-star-fill"></i>${imdb}</h3>
            </div>
            <div class="btns">
                <a href="#" id="low_q">480p</a>
                <a href="#" id="med_q">720p</a>
                <a href="#" id="high_q">1080p</a>
            </div>
            </div>`
                var style = `.head::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                 background: url(${bposter})no-repeat center center/cover; 
                opacity: .6;
                z-index: -1;
            
            }`

                var styleSheet = document.createElement("style")
                styleSheet.innerText = style
                document.head.appendChild(styleSheet)



            })






            card.classList.add('card');
            card.innerHTML =
                `<img src="${sposter}" class="poster" alt="${name}">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre},${date}</p>
                        <h3><span>imdb</span><i class="bi bi-cloud-arrow-down-fill"></i>${imdb}</h3>
                    </div>
                </div>
                
            </div>`;

            cards.appendChild(card);


        });


    })




})



