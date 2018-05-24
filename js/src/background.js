/**
Enables the use of the key press (ctrl+d or alt+d) to run dev build.
use: ctrl+d
use: alt+d
*/
const jssLite = require('jss-lite'),
    devtarget = 'dev-indicator',
    cornerdistance = '10px',
    size = '15px',
    borderwidth = '2px',
    standardcolor = '#005B94',
    successcolor = '#208c20',
    loadingcolor = '#44C8F5',
    errorcolor = '#ED145B',
    css = jssLite({
        '.dev-indicator': {
            'position': 'fixed',
            'z-index': '9999',
            'bottom': cornerdistance,
            'right': cornerdistance,
            'color': standardcolor,
            'display': 'none'
        },
        '.dev-indicator, .dev-indicator div': {
            'height': size,
            'width': size,
            'border-radius': '50%',
            'border': borderwidth + ' solid',
            'transition': 'all 0.5s ease'
        },
        '.dev-indicator div': {
            'position': 'absolute',
            'top': '-' + borderwidth,
            'right': '-' + borderwidth,
            'bottom': '-' + borderwidth,
            'left': '-' + borderwidth
        },
        '.dev-indicator.loading div': {
            'color': loadingcolor,
            'border-top-color': 'transparent',
            'border-right-color': 'transparent',
            'border-bottom-color': 'transparent',
            'animation': 'dev-indicator-loader 1.4s infinite linear'
        },
        '.dev-indicator.success': {
            'color': successcolor
        },
        '.dev-indicator.error': {
            'color': errorcolor
        },
        '.dev-indicator.success, .dev-indicator.error, .dev-indicator.loading': {
            'display': 'block'
        },
        '.dev-indicator.success div, .dev-indicator.error div': {
            'border': '1px solid',
            'animation': 'dev-indicator-pulse 0.4s infinite linear'
        },
        '@keyframes dev-indicator-loader': {
            '0%': {
                'transform': 'rotate(0deg)'
            },
            '100%': {
                'transform': 'rotate(360deg)'
            }
        },
        '@keyframes dev-indicator-pulse': {
            '0%': {
                'transform': 'scale(0.7)',
                'opacity': '0'
            },
            '50%': {
                'transform': 'scale(1)',
                'opacity': '1',
            },
            '100%': {
                'transform': 'scale(1.3)',
                'opacity': '0'
            }
        }
    }),
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style')

style.type = 'text/css'
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

let devIndicator = document.createElement('div')
devIndicator.setAttribute('id', devtarget)
devIndicator.setAttribute('class', devtarget)
document.body.appendChild(devIndicator)
devIndicator = document.getElementById(devtarget)
devIndicator.appendChild(document.createElement('div'))

let building = false

function devbuildkeyup(e) {
    if(e.altKey && e.keyCode == 68 && !building) {
        building = true
        setDevIndicatorState('loading')
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function() {
            building = false
            if (this.readyState == 4) {
                if (this.status == 200) {
                    let container = document.implementation.createHTMLDocument().documentElement
                    container.innerHTML = this.responseText
                    if (container.querySelectorAll('.error').length > 0) {
                        setDevIndicatorState('error')
                        openInNewTab(this.responseText)
                    } else {
                        setDevIndicatorState('success', true)
                    }
                } else {
                    setDevIndicatorState('error')
                    openInNewTab(this.responseText)
                }
            }

        }
        xhttp.timeout = 60000
        xhttp.ontimeout = function() {
            setDevIndicatorState('error')
        }
        xhttp.open('GET', '/dev/build', true)
        xhttp.send()
    }
}

function setDevIndicatorState(state, reset = false) {
    let classList = devIndicator.classList
    classList.remove('loading')
    classList.remove('success')
    classList.remove('error')
    classList.add(state)
    console.log('dev/build: ' + state)
    if (reset) {
        setTimeout(function(){
            classList.remove('loading')
            classList.remove('success')
            classList.remove('error')
        }, 4000);
    }
}

function openInNewTab(html) {
    let newTab = window.open()
    newTab.document.body.innerHTML = html
}

if (document.addEventListener) {
    document.addEventListener('keyup', devbuildkeyup, false);
} else if (document.attachEvent) {
    document.attachEvent('keyup', devbuildkeyup);
}
