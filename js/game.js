$(function() {
    if (!sessionStorage.getItem('token')) {
        alert('กรุณาเข้าสู่ระแบบก่อน.')
        location.href = 'index.html'
    }

    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');

});


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

function isLine() {
    return /Line/i.test(navigator.userAgent);
}

async function saGame() {

    let uri = 'https://ambbet.secure-restapi.com/sagame/login?gameId=601&client=';

    if (isMobile()) {
        uri = uri + 'MB'
    } else {
        uri = uri + 'PC'
    }

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
    }else{

        checkWindow();

        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
     }

}


async function ag() {

    let uri = 'https://ambbet.secure-restapi.com/agg/login?gameId=1&prefix=ALLSTAR&website=https://viewbet.com&client=';

    if (isMobile()) {
        uri = uri + 'MB'
    } else {
        uri = uri + 'PC'
    }

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
    }else{

        checkWindow();

        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
     }

}


async function dream() {

    let uri = 'https://ambbet.secure-restapi.com/dreamgame/login?client=';

    if (isMobile()) {
        uri = uri + 'MB'
    } else {
        uri = uri + 'PC'
    }

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
    }else{

        checkWindow();

        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
     }

}

async function sexy() {

    let uri = 'https://ambbet.secure-restapi.com/sexy-baccarat/login?client=';

    if (isMobile()) {
        uri = uri + 'MB'
    } else {
        uri = uri + 'PC'
    }

    if (isLine()){
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
    }else{

        checkWindow();

        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
     }

}

async function pretty() {

    let uri = 'https://ambbet.secure-restapi.com/pretty/login?client=';

    if (isMobile()) {
        uri = uri + 'MB'
    } else {
        uri = uri + 'PC'
    }

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
    }else{

        checkWindow();

        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            gameWindow.location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            gameWindow.close();
            }
        }
     }

}