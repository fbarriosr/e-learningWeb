var yo = require('yo-yo');

module.exports = function pagination(i,className){
	const pag = "pag_"+i;
    return yo`
    <li id=${pag} class=${className}><a>${i}</a></li>
    `;
}