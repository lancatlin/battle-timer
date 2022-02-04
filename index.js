function submit(form) {
  document.setupForm.elements.basic.value = getTime("basic_m", "basic_s")
  document.setupForm.elements.final.value = getTime("final_m", "final_s")
  return true
}

function getTime(m, s) {
  return 60 * Number(document.getElementById(m).value) + 
    Number(document.getElementById(s).value) 
}

document.setupForm.onsubmit = submit
