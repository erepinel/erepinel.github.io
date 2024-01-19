(function(){
	let id = location.pathname.split('.')[0].split('/').slice(-1)[0];
    let mbot = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
    if(id) {
		if(mbot) location.replace('https://ara.psabl.com/item/erepinel.github.io/'+id);
        else location.href = 'https://ara.psabl.com/item/erepinel.github.io/go/'+id+'/';
    }
})();
