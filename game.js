
class Game {
  constructor () {
    this.getAttributes()
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
    document.getElementById("player").innerHTML = `Player #${this.player.id}` 
  }

  nextPlayer() {
    this.current += 1
    this.current %= this.players_count
    this.render()
  }

  get player() {
    return this.players[this.current]
  }
}

const game = new Game()
