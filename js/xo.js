function isLine() {
    return /Line/i.test(navigator.userAgent);
}


$(function () {
    if (!sessionStorage.getItem('token')) {
        location.href = 'login.html'
    }

    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    let type = getParameterByName('game');

    if (type == 'spg') {
        getGameListSpg();
    }

    if (type == 'xo') {
        getGameListXO();
    }

    if (type == 'ds') {
        getGameListDS();
    }

    if (type == 'ameba') {
        getGameListAmeba()
    }

    if (type == 'live22') {
        getGameListLive22();
    }
    if (type == 'gamatron') {
        getGameListGamatron();
    }

    if (type == 'pg') {
        getGamePG();
    }

    if (type == 'amb') {
        getAmbgame();
    }
});


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


var gameWindow;

function checkWindow() {
    if (gameWindow && !gameWindow.closed) {
        gameWindow.close();
    }

    gameWindow = window.open('', "popup", "fullscreen");
    gameWindow.moveTo(0, 0);
    gameWindow.resizeTo(screen.width, screen.height);
    gameWindow.document.write('Loading...');
    return;
}



let listGame;
const endpoint = 'https://ambbet.secure-restapi.com';
const pgGameListURL = 'https://dmn5cgu275.execute-api.ap-southeast-1.amazonaws.com/viewbet/pg/list-games'
const gamatronGameListURL = 'https://aub6j8ozff.execute-api.ap-southeast-1.amazonaws.com/viewbet/ganapati/list-games'


async function getGamePG() {

    let uri = pgGameListURL;

    let resp = await axios.get(uri)

    if (resp.data.code == 0) {
        listGame = resp.data.result;
        console.log(listGame);
        listGame.forEach(data => {
            $('#gameList').append(`<div class="mb-4 col-md-2 col-4">
            <div class="card-promotion-landing card-promotion-landing1">
                <div onclick="pgLogin('${data.GameCode}')" class="img" style="background-image: url(${data.ImageUrl});"></div>
                <div class="caption text-center text-overflow">
                    <a class="">${data.GameName}</a>
                </div>
            </div>
        </div>`)

        })
    }

}

async function getGameListXO() {

    let uri = endpoint + '/slotxo/list-games';

    let resp = await axios.get(uri)

    if (resp.data.Error == 0) {
        listGame = resp.data.ListGames
        console.log(listGame);
        listGame.forEach(data => {
            $('#gameList').append(`<div class="mb-4 col-md-2 col-4">
            <div class="card-promotion-landing card-promotion-landing1">
                <div onclick="xoLogin('${data.GameCode}')" class="img img-slot" style="background-image: url(${data.Image1});"></div>
                <div class="caption text-center text-overflow">
                    <a class="text-game-color">${data.GameName}</a>
                </div>
            </div>
        </div>`)

        })
    }

}

async function getGameListDS() {

    let uri = endpoint + '/ds/getGameList';

    let resp = await axios.get(uri)

    if (resp.data.code == 0) {
        listGame = resp.data.data
        console.log(listGame);
        listGame.forEach(data => {
            $('#gameList').append(`<div class="mb-4 col-md-2 col-4">
            <div class="card-promotion-landing card-promotion-landing1">
                <div onclick="dsLogin('${data.GameId}')" class="img img-slot3" style="background-image: url(${data.ImageUrl});"></div>
                <div class="caption text-center text-overflow">
                    <a class="text-game-color">${data.GameName}</a>
                </div>
            </div>
        </div>`)

        })
    }

}

async function getGameListAmeba() {

    let uri = endpoint + '/ameba/getGameList';

    let resp = await axios.get(uri)

    if (resp.data.code == 0) {
        listGame = resp.data.data
        console.log(listGame);
        listGame.forEach(data => {
            $('#gameList').append(`<div class="mb-4 col-md-2 col-4">
            <div class="card-promotion-landing card-promotion-landing1">
                <div onclick="amebaLogin('${data.GameId}')" class="img img-slot4" style="background-image: url(${data.ImageUrl});"></div>
                <div class="caption text-center text-overflow">
                    <a class="text-game-color">${data.GameName}</a>
                </div>
            </div>
        </div>`)

        })
    }

}

async function getGameListLive22() {

    let uri = endpoint + '/live22/getGameList';

    let resp = await axios.get(uri)

    if (resp.data.code == 0) {
        listGame = resp.data.data;

        listGame.forEach(data => {
            if (data.IsH5Support) {
                $('#gameList').append(`<div class="mb-4 col-md-2 col-4">
                <div class="card-promotion-landing card-promotion-landing1">
                    <div onclick="live22Login('${data.GameId}',${data.IsH5Support})" class="img img-slot1" style="background-image: url(${data.ImageUrl});"></div>
                    <div class="caption text-center text-overflow">
                        <a class="text-game-color">${data.GameName}</a>
                    </div>
                </div>
            </div>`)
            }
        })
    }

}

async function getGameListSpg() {

    let uri = endpoint + '/spg/getGameList';

    let resp = await axios.get(uri)

    if (resp.data.code == 0) {
        listGame = resp.data.data;

        listGame.forEach(data => {
            $('#gameList').append(`

            <div class="mb-4 col-md-2 col-4">
            <div class="card-promotion-landing card-promotion-landing1">
                <div onclick="spgLogin('${data.GameId}')" class="img img-slot2" style="background-image: url(${data.ImageUrl});"></div>
                <div class="caption text-center text-overflow">
                    <a class="text-game-color">${data.GameName}</a>
                </div>
            </div>
        </div>`)
        })
    }

}

async function getGameListGamatron() {

    let uri = gamatronGameListURL;

    let resp = await axios.get(uri)

    if (resp.data.code == 0) {
        listGame = resp.data.result;

        listGame.forEach(data => {
            $('#gameList').append(`
  
            <div class="mb-4 col-md-2 col-4">
            <div class="card-promotion-landing card-promotion-landing1">
                <div onclick="gamatronLogin('${data.GameId}')" class="img img-slot2" style="background-image: url(${data.ImageUrl});"></div>
                <div class="caption text-center text-overflow">
                    <a class="text-game-color">${data.GameName}</a>
                </div>
            </div>
        </div>`)
        })
    }

}

async function getAmbgame() {

    let uri = endpoint + '/ambgame/getGameList';

    let resp = await axios.get(uri)

    if (resp.data.code == 0) {
        listGame = resp.data.data
        if (listGame.length < 12) {
            var cal = 12 - listGame.length;
            for (var i = 0; i < cal; i++) {
                var j = {
                    imageUrl: 'images/comingsoon.png',
                    isActive: false,
                    gameName: 'Coming Soon.'
                }
                listGame.push(j);
            }
        }
        listGame.forEach(data => {
            $('#gameList').append(`
        <div class="mb-4 col-md-2 col-4">
          <div class="card-promotion-landing card-promotion-landing1">
              <div onclick="gameLogin('${data.gameId}','${data.gameKey}',${data.isActive})" class="img img-amb" style="background-image: url(${data.imageUrl});"></div>
              <div class="caption text-center text-overflow">
                  <a class="text-game-color">${data.gameName.th}</a>
              </div>
          </div>
      </div>`)

        })
    }

}


async function xoLogin(gameCode) {
    let uri = endpoint + '/slot-xo/forward-to-game';

    let data = {
        "gameCode": gameCode,
        "language": "EN",
        "isMobile": "false",
        "redirectUrl": ""
    };

    if (isLine()) {
        let resp = await axios.post(uri, data)

        if (resp.data.code == 0) {
            location.href = resp.data.result;
        } else {
            alert(JSON.stringify(result.data.message))
            // gameWindow.close();
        }
    } else {
        checkWindow()

        let resp = await axios.post(uri, data)

        if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.result;
        } else {
            alert(JSON.stringify(result.data.message))
            gameWindow.close();
        }
    }



}

async function dsLogin(gameId) {
    let uri = endpoint + '/ds/login?GameId=' + gameId;


    if (isLine()) {
        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            location.href = resp.data.url;
        } else {
            alert(JSON.stringify(result.data.message))
        }

    }

    checkWindow()

    let resp = await axios.get(uri)

    if (resp.data.code == 0) {
        gameWindow.location.href = resp.data.url;
    } else {
        alert(JSON.stringify(result.data.message))
        gameWindow.close();
    }

}

async function amebaLogin(gameId) {
    let uri = endpoint + '/ameba/login?GameId=' + gameId;

    if (isLine()) {
        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            location.href = resp.data.url;
        } else {
            alert(JSON.stringify(result.data.message))

        }
    } else {
        checkWindow()

        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url;
        } else {
            alert(JSON.stringify(result.data.message))
            gameWindow.close();
        }
    }

}

async function live22Login(gameId, html5) {

    console.log('html5: ', html5)

    let uri = endpoint + '/live22/gameLogin?ClientType=0&GameId=' + gameId;

    if (isLine()) {
        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            location.href = resp.data.Url;
        } else {
            alert(JSON.stringify(result.data.message))

        }
    } else {
        checkWindow()

        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.Url;
        } else {
            alert(JSON.stringify(result.data.message))
            gameWindow.close();
        }
    }

}

async function spgLogin(gameId) {
    let uri = endpoint + '/spg/login?GameId=' + gameId;

    if (isLine()) {
        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            location.href = resp.data.url;
        } else {
            alert(JSON.stringify(result.data.message))

        }
    } else {
        checkWindow()

        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url;
        } else {
            alert(JSON.stringify(result.data.message))
            gameWindow.close();
        }
    }

}

async function pgLogin(gameId) {
    let uri = endpoint + '/pg/forward-to-game'

    if (isLine()) {
        let data = {
            "gameCode": gameId
        }

        let resp = await axios.post(uri, data)

        if (resp.data.code == 0) {
            location.href = resp.data.result;
        } else {
            alert(JSON.stringify(resp.data.message))

        }
    } else {
        checkWindow()

        let data = {
            "gameCode": gameId
        }

        let resp = await axios.post(uri, data)

        if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.result;
        } else {
            alert(JSON.stringify(resp.data.message))
            gameWindow.close();
        }
    }

}


async function gamatronLogin(gameId) {
    let uri = endpoint + '/ganapati/forward-to-game'

    if (isLine()) {
        let data = {
            "gameCode": gameId
        }

        let resp = await axios.post(uri, data)

        if (resp.data.code == 0) {
            location.href = resp.data.result;
        } else {
            alert(JSON.stringify(resp.data.message))

        }
    } else {
        checkWindow()

        let data = {
            "gameCode": gameId
        }

        let resp = await axios.post(uri, data)

        if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.result;
        } else {
            alert(JSON.stringify(resp.data.message))
            gameWindow.close();
        }
    }

}


async function gameLogin(gameId, gameKey, isActive) {

    if (!isActive) {
        alert('Coming Soon.');
        return;
    }

    let uri = endpoint + `/ambgame2/login?gameId=${gameId}&gameKey=${gameKey}`;

    if (isLine()) {
        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            location.href = resp.data.result;
        } else {
            alert(JSON.stringify(resp.data.message))
        }
    } else {
        checkWindow()

        let resp = await axios.get(uri)

        if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url;
        } else {
            alert(JSON.stringify(resp.data.message))
            gameWindow.close();
        }
    }


}