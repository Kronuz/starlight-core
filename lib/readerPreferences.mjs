// Apply the reader's saved text size and author edit choice before first paint.
export const readerPreferences = [
	"try{var d=document.documentElement,s=localStorage,e=new URLSearchParams(location.search).get('editor');",
	"if(s.getItem('kz-text-size')==='large')d.dataset.textSize='large';",
	"if(e==='on')s.setItem('kz-editor','1');else if(e==='off')s.removeItem('kz-editor');",
	"if(s.getItem('kz-editor'))d.dataset.editor=''}catch(x){}",
].join('');
