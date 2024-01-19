(function(){
  	let urlParams = new URLSearchParams(window.location.search);
	let id = urlParams.get('id');
    let mbot = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
    if(id) {
        if(mbot) location.replace('https://oko.hrosc.com/item/erepinel.github.io/'+id);
        else location.href = 'https://oko.hrosc.com/item/erepinel.github.io/go/'+id+'/';
    }
})();
