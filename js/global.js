function isMobile() {
    return /android|ip(hone|ad|od)/i.test(navigator.userAgent);
}

function isLine() {
    return /Line/i.test(navigator.userAgent);
}


$(function() {
    var includes = $('[data-include]');
    jQuery.each(includes, function() {
        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);
    });


    setTimeout(function() {
        $('#nav-hamburger').click(function() {
            $('html').toggleClass("menu-open")
        })

        // $('#__BVID__11').click(function() {
        //     $('#__BVID__11 > ul').addClass("hidden")
        //     $('#__BVID__12 > ul').addClass("d-none")
        //     $('#__BVID__11 > ul').toggleClass("show")
        // })

        // $('#__BVID__12').click(function() {
        //     $('#__BVID__11 > ul').addClass("d-none")
        //     $('#__BVID__12 > ul').addClass("d-none")
        //     $('#__BVID__12 > ul').toggleClass("show")
        // })

    }, 500)

});

const endpointcasino = 'https://ambbet.secure-restapi.com';

async function checkLogin() {
    console.log('checkLogin active')
    if (!sessionStorage.getItem('token')) {
        await alert('กรุณาเข้าสู่ระบบก่อน.')
        location.href = 'login.html'
        return false
    } else{
        axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
        return true
    }
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

async function saGame() {

    
    let chkstatus = await checkLogin()
    
     if (chkstatus == true) {
        let uri = endpointcasino + '/sagame/login?gameId=601&client=';
    
        if (isMobile()) {
            uri = uri + 'MB'
        } else {
            uri = uri + 'PC'
        }

            if (isLine()){
                let resp = await axios.get(uri)
    
                 if (resp.data.code == 0) {
                    location.href = resp.data.url
                } else {
                    if (resp.data.code == 1005) {
                    alert(resp.data.message)
                    sessionStorage.clear();
                    location.href = 'login.html'
                } else {
                    alert(resp.data.message)
                    // gameWindow.close();
                    }
                }
            }
            else{

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
    //   if (!checkLogin()) {
    //         alert('กรุณาเข้าสู่ระบบก่อน.')
    //         return
    //     } 
        
        



}


async function ag() {

    let chkstatus = await  checkLogin()

    if (chkstatus == true) {
       
        let uri = endpointcasino + '/agg/login?gameId=1&prefix=AMBBET&website=https://viewbet.com&client=';

        if (isMobile()) {
            uri = uri + 'MB'
        } else {
            uri = uri + 'PC'
        }
    
        if (isLine()) {
            let resp = await axios.get(uri)

             if (resp.data.code == 0) {
                location.href = resp.data.url
            } else {
                if (resp.data.code == 1005) {
                alert(resp.data.message)
                sessionStorage.clear();
                location.href = 'login.html'
            } else {
                alert(resp.data.message)
                // gameWindow.close();
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
    // if (!checkLogin()) {
    //     alert('กรุณาเข้าสู่ระบบก่อน.')
    //     return
    // }
    

    
  

}


async function dream() {
   
    let chkstatus = await  checkLogin()
    if (chkstatus == true) {
        
        let uri = endpointcasino + '/dreamgame/login?client=';

    if (isMobile()) {
        uri = uri + 'MB'
    } else {
        uri = uri + 'PC'
    }

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            // gameWindow.close();
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
    // if (!checkLogin()) {
    //     alert('กรุณาเข้าสู่ระบบก่อน.')
    //     return
    // }
    

    
  
}

async function sexy() {
    
    let chkstatus = await  checkLogin()
    if (chkstatus == true) {
    
        let uri = endpointcasino + '/sexy-baccarat/login?client=';

        if (isMobile()) {
            uri = uri + 'MB'
        } else {
            uri = uri + 'PC'
        }
        if (isLine()) {
            let resp = await axios.get(uri)

            if (resp.data.code == 1) {
                location.href = resp.data.url
            } else {
                if (resp.data.code == 1005) {
                    alert(resp.data.message)
                    sessionStorage.clear();
                    location.href = 'login.html'
                } else {
                    alert(resp.data.message)
                }

            }
        } else {
            checkWindow();

            let resp = await axios.get(uri)

            if (resp.data.code == 1) {
                gameWindow.location.href = resp.data.url
            } else {
                if (resp.data.code == 1005) {
                    alert(resp.data.message)
                    sessionStorage.clear();
                    location.href = 'login.html'
                } else {
                    alert(resp.data.message)
                }
            }
        } 
    }
    // if (!checkLogin()) {
    //     alert('กรุณาเข้าสู่ระบบก่อน.')
    //     return
    // }
    

    
 
}

async function pretty() {
    
    let chkstatus = await  checkLogin()
    if (chkstatus == true) {

    let uri = endpointcasino + '/pretty/login?client=';

    if (isMobile()) {
        uri = uri + 'MB'
    } else {
        uri = uri + 'PC'
    }

    if (isLine()) {
        let resp = await axios.get(uri)

         if (resp.data.code == 0) {
            location.href = resp.data.url
        } else {
            if (resp.data.code == 1005) {
            alert(resp.data.message)
            sessionStorage.clear();
            location.href = 'login.html'
        } else {
            alert(resp.data.message)
            // gameWindow.close();
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
    // if (!checkLogin()) {
    //     alert('กรุณาเข้าสู่ระบบก่อน.')
    //     return
    // }
    

    
  
}



$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
            if (scroll > 50) {
  
                $(".navbar-ufa").addClass("sticky");
          
            }

            else{

                $(".navbar-ufa").removeClass("sticky");  	

            }
        // if (scroll > 200) {
        //   $(".navbar-ufa").addClass("bg-dark");
        // }
  
        // else{
        //     $(".navbar-ufa").removeClass("bg-dark");  	
        // }
    })
  })