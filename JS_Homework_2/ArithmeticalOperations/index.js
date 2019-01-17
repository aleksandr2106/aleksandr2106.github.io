while (true) {
  arithmetic = window.prompt('Enter any arithmetical operations, please');
  let reg = /^(\s*((\-\s*[0-9]+\s*)|(\-\s*[0-9]+\s*\.\s*[0-9]+\s*)|([0-9]+\s*\.\s*[0-9]+\s*)|([0-9]+\s*)))(\+|\-|\*|\/)(\s*((\-\s*[0-9]+\s*)|(\-\s*[0-9]+\s*\.\s*[0-9]+\s*)|([0-9]+\s*\.\s*[0-9]+\s*)|([0-9]+\s*)))$/
  alert(reg.test(arithmetic));
}
