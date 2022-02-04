const colors = [
  '4464AD',   // blue
  'EA526F',   // red
  'F79824',   // orange
  '659157',   // green
  'F7AF9D',   // pink
  '4CB5AE',   // verdigris
  '2B2C28',   // jet
  '9649CB',   // dark orchid
]
class Game {
  constructor () {
    this.getAttributes()
    this.isSuspended = false
  }

  getAttributes() {
    const param = new URLSearchParams(window.location.href.split("?")[1])
    this.players_count = Number(param.get("players"))
    this.basic_time = Number(param.get("basic"))
    this.final_time = Number(param.get("final"))
    this.current = 0
    
    this.players = new Array(this.players_count).fill(null).map((v, i) => ({
      id: i + 1,
      basic: this.basic_time,
      final: this.final_time,
    }))
    console.log(this.players)
  }

  render() {
    document.body.style.backgroundColor = "#" + colors[this.current % colors.length];
    document.getElementById("player").innerHTML = `Player #${this.player.id}` 
    document.getElementById("time").innerHTML = `${Math.ceil(this.time)}`
    document.getElementById("suspend").hidden = !this.isSuspended
  }

  nextPlayer() {
    this.current += 1
    this.current %= this.players_count
    this.player.final = this.final_time
    this.render()
  }

  get player() {
    return this.players[this.current]
  }

  get time() {
    return this.player.basic > 0 
      ? this.player.basic
      : this.player.final
  }

  clock() {
    if (this.isSuspended) {
      return
    }
    if (this.player.basic > 0) {
      this.player.basic -= 0.1
    } else if (this.player.final > 0) {
      this.player.final -= 0.1
    } else {
      this.stop()
    }
    this.render()
  }

  stop() {
    const result = this.players.map((p) => `${p.id}=${Math.ceil(p.basic)}`).join("&")
    window.location.assign(`result.html?${result}`)
  }

  suspend() {
    this.isSuspended = !this.isSuspended
    console.log('suspend', this.isSuspended)
    this.render()
  }
}

const game = new Game()
setInterval(() => game.clock(), 100);
game.render()
