function getTime(t) {
  return `${Math.floor(t / 60)} m ${Math.floor(t % 60)} s`
}
function result() {
  const param = new URLSearchParams(window.location.href.split("?")[1])
  for (const [key, value] of param) {
    const ele = document.createElement("p")
    ele.innerHTML = `Player #${key}: ${getTime(value)}`
    document.getElementById('result').appendChild(ele)
    console.log(key, value)
  }
}

result()
